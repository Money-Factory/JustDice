import React from "react";
import {
  ActivityIndicator,
  Switch,
  StyleSheet,
  Appearance,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useSettings } from "@/components/contexts/SettingsContext";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function Settings() {
  const { settings, updateSetting, loading } = useSettings();

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.row}>
        <ThemedText>Shake to roll:</ThemedText>
        <Switch
          value={settings.shakeEnabled}
          onValueChange={() =>
            updateSetting("shakeEnabled", !settings.shakeEnabled)
          }
        />
      </ThemedView>
      <ThemedView>
        <ThemedText>Theme:</ThemedText>
        <Picker
          selectedValue={settings.theme}
          onValueChange={(value) => {
            Appearance.setColorScheme(
              value === "system" ? Appearance.getColorScheme() : value
            );
          }}
        >
          <Picker.Item label="System Default" value="system" />
          <Picker.Item label="Light" value="light" />
          <Picker.Item label="Dark" value="dark" />
        </Picker>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
