import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";
import { SettingsProvider } from "@/components/contexts/SettingsContext";
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function RootLayout() {
  return (
    <SettingsProvider>
      <ThemeProvider
        value={useColorScheme() === "light" ? DefaultTheme : DarkTheme}
      >
        <StatusBar backgroundColor={useThemeColor({}, "background")} />
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Drawer>
            <Drawer.Screen
              name="index" // This is the name of the page and must match the url from root
              options={{
                drawerLabel: "Liar's Dice",
                title: "Liar's Dice",
              }}
            />
            <Drawer.Screen
              name="fivedice" // This is the name of the page and must match the url from root
              options={{
                drawerLabel: "Simple Dice",
                title: "Simple Dice",
              }}
            />
            <Drawer.Screen
              name="threes" // This is the name of the page and must match the url from root
              options={{
                drawerLabel: "Threes",
                title: "Threes",
              }}
            />
            <Drawer.Screen
              name="poker" // This is the name of the page and must match the url from root
              options={{
                drawerLabel: "Poker",
                title: "Poker",
              }}
            />
            <Drawer.Screen
              name="zanzibar" // This is the name of the page and must match the url from root
              options={{
                drawerLabel: "Zanzibar",
                title: "Zanzibar",
              }}
            />
            <Drawer.Screen
              name="rules" // This is the name of the page and must match the url from root
              options={{
                drawerLabel: "Rules",
                title: "Rules",
              }}
            />
            <Drawer.Screen
              name="settings" // This is the name of the page and must match the url from root
              options={{
                drawerLabel: "Settings",
                title: "Settings",
              }}
            />
          </Drawer>
        </GestureHandlerRootView>
      </ThemeProvider>
    </SettingsProvider>
  );
}
