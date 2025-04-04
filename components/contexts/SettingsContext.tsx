import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Appearance } from "react-native";
import { parse } from "@babel/core";

type AppSettings = {
  shakeEnabled: boolean;
  theme: "light" | "dark" | "system";
};

interface SettingsContextType {
  settings: AppSettings;
  updateSetting: (key: string, value: any) => Promise<void>;
  loading: boolean;
}

const defaultContext: SettingsContextType = {
  settings: {
    shakeEnabled: false,
    theme: "system",
  },
  updateSetting: async (_key: string, _value: any) => {},
  loading: true,
};

const SettingsContext = createContext<SettingsContextType>(defaultContext);

export const useSettings = () => {
  return useContext(SettingsContext);
};

export const SettingsProvider = ({ children }: PropsWithChildren) => {
  const [settings, setSettings] = useState(defaultContext.settings);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const savedSettings = await AsyncStorage.getItem("settings");
        if (savedSettings) {
          const parsedSettings = JSON.parse(savedSettings);
          setSettings(parsedSettings);
          Appearance.setColorScheme(
            parsedSettings.theme === "system"
              ? Appearance.getColorScheme()
              : parsedSettings.theme
          );
        } else {
          setSettings((prev) => ({
            ...prev,
            theme: Appearance.getColorScheme() || "light",
          }));
        }
      } catch (error) {
        console.error("Error loading settings from AsyncStorage", error);
      } finally {
        setLoading(false);
      }
    };
    loadSettings();
  }, []);

  useEffect(() => {
    if (settings.theme === "system") {
      const listener = Appearance.addChangeListener(({ colorScheme }) => {
        setSettings((prev) => ({
          ...prev,
          theme: colorScheme || "light",
        }));
      });

      return () => listener.remove();
    }
  }, [settings.theme]);

  const updateSetting = async (key: string, value: any) => {
    try {
      const newSettings = { ...settings, [key]: value };
      setSettings(newSettings);
      await AsyncStorage.setItem("settings", JSON.stringify(newSettings));
    } catch (error) {
      console.error("Error saving settings to AsyncStorage", error);
    }
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSetting, loading }}>
      {children}
    </SettingsContext.Provider>
  );
};
