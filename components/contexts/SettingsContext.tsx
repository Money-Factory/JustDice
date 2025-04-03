import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AppSettings = {
  shakeEnabled: boolean;
};

interface SettingsContextType {
  settings: AppSettings;
  updateSetting: (key: string, value: any) => Promise<void>;
  loading: boolean;
}

const defaultContext: SettingsContextType = {
  settings: {
    shakeEnabled: false,
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
          setSettings(JSON.parse(savedSettings));
        }
      } catch (error) {
        console.error("Error loading settings from AsyncStorage", error);
      } finally {
        setLoading(false);
      }
    };
    loadSettings();
  }, []);

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
