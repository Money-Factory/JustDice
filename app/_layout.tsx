import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="fivedice" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Simple Dice",
            title: "Simple Dice",
          }}
        />
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Liar's Dice",
            title: "Liar's Dice",
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
      </Drawer>
    </GestureHandlerRootView>
  );
}
