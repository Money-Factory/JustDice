import { Slot } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Liar\'s Dice',
            title: 'Liar\'s Dice',
          }}
        />
        <Drawer.Screen
          name="yacht" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Yacht Dice',
            title: 'Yacht Dice',
          }}
        />
        <Drawer.Screen
          name="threes" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Threes',
            title: 'Threes',
          }}
        />
        <Drawer.Screen
          name="poker" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Poker Dice',
            title: 'Poker Dice',
          }}
        />
    </Drawer>
    </GestureHandlerRootView >
  );
}
