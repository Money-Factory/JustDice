import { StyleSheet, Button } from "react-native";
import React from "react";
import Dice from "@/components/Dice";
import { useSettings } from "@/components/contexts/SettingsContext";
import ShakeSensor from "@/components/ShakeSensor";
import { ThemedView } from "@/components/ThemedView";
import { delay, randomNum } from "@/utils/utils";

const MAX_DIE_COUNT = 6;
const MIN_DIE_COUNT = 0;

export default function Index() {
  const { settings } = useSettings();
  const [diceCount, setDiceCount] = React.useState(MAX_DIE_COUNT);
  const [diceValues, setDiceValues] = React.useState(
    Array.from({ length: MAX_DIE_COUNT }, (_, index) => index + 1)
  );
  const [isRolling, setIsRolling] = React.useState(false);

  const removeDie = () =>
    setDiceCount(diceCount === MIN_DIE_COUNT ? MIN_DIE_COUNT : diceCount - 1);
  const addDie = () =>
    setDiceCount(diceCount === MAX_DIE_COUNT ? MAX_DIE_COUNT : diceCount + 1);

  const roll = async () => {
    setIsRolling(true);

    const TIMES_TO_ROLL = 5;
    for (let i = 0; i < TIMES_TO_ROLL; i++) {
      setDiceValues(diceValues.map(() => randomNum()));
      await delay(100);
    }

    setIsRolling(false);
  };

  return (
    <ThemedView style={styles.main}>
      <ThemedView style={styles.topBar}>
        <ThemedView>
          <Button onPress={removeDie} title="Remove Die" />
        </ThemedView>
        <ThemedView>
          <Button onPress={addDie} title="Add Die" />
        </ThemedView>
      </ThemedView>

      {settings.shakeEnabled && (
        <ShakeSensor onShake={roll} threshold={4} cooldown={1000} />
      )}

      <ThemedView style={styles.diceSection}>
        {Array.from({ length: diceCount }).map((_value, index) => {
          return <Dice key={index} value={diceValues[index]} />;
        })}
      </ThemedView>

      <ThemedView style={styles.bottomBar}>
        <ThemedView style={styles.rollButton}>
          <Button disabled={isRolling} onPress={roll} title="Roll" />
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
  },
  diceSection: {
    height: "80%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  topBar: {
    height: "10%",
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  bottomBar: {
    height: "10%",
    justifyContent: "center",
    flex: 1,
  },
  rollButton: {
    justifyContent: "center",
    flex: 1,
    paddingLeft: "35%",
    paddingRight: "35%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
  },
});
