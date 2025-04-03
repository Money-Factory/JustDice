import React from "react";
import { ActivityIndicator, Switch, StyleSheet } from "react-native";
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
