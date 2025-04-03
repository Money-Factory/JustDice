import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Switch,
  StyleSheet,
} from "react-native";
import { useSettings } from "@/components/contexts/SettingsContext";

export default function Settings() {
  const { settings, updateSetting, loading } = useSettings();

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>Shake to roll:</Text>
        <Switch
          value={settings.shakeEnabled}
          onValueChange={() =>
            updateSetting("shakeEnabled", !settings.shakeEnabled)
          }
        />
      </View>
    </View>
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
