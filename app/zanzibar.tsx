import { StyleSheet, Button } from "react-native";
import React from "react";
import { useSettings } from "@/components/contexts/SettingsContext";
import ShakeSensor from "@/components/ShakeSensor";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { delay, randomNum } from "@/utils/utils";
import Dice from "@/components/Dice";

const pointValues: { [key: number]: number } = {
  1: 100,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 60,
};
const NUM_DICE = 3;

export default function Zanzibar() {
  const { settings } = useSettings();
  const [rolls, setRolls] = React.useState(0);
  const [diceValues, setDiceValues] = React.useState(
    Array.from({ length: NUM_DICE }, (_, index) => index + 1)
  );
  const [points, setPoints] = React.useState("0");
  const [highest, setHighest] = React.useState("0");
  const [isRolling, setIsRolling] = React.useState(false);

  async function reset() {
    setRolls(0);
    setPoints("0");
    setHighest("0");
    setDiceValues(Array.from({ length: NUM_DICE }, (_, index) => index + 1));
  }

  async function roll() {
    setIsRolling(true);
    let updatedDice = [...diceValues];

    const TIMES_TO_ROLL = 5;
    for (let i = 0; i < TIMES_TO_ROLL; i++) {
      updatedDice = updatedDice.map(() => randomNum());
      setDiceValues(updatedDice);
      await delay(100);
    }

    setIsRolling(false);
    setRolls(rolls + 1);

    const sortedDice = [...updatedDice].sort((a, b) => a - b);

    let newPoints = "";

    if (isZanzibar(sortedDice)) {
      newPoints = "Zanzibar";
    } else if (isHighCombo(sortedDice)) {
      newPoints = "Higher Combo!";
    } else if (isLowCombo(sortedDice)) {
      newPoints = "Lower Combo!";
    } else {
      newPoints = `${
        pointValues[updatedDice[0]] +
        pointValues[updatedDice[1]] +
        pointValues[updatedDice[2]]
      }`;
    }

    setPoints(newPoints);

    if (
      newPoints === "Zanzibar" ||
      (newPoints === "Higher Combo!" && highest !== "Zanzibar") ||
      (newPoints === "Lower Combo!" &&
        highest !== "Zanzibar" &&
        highest !== "Higher Combo!") ||
      (highest !== "Zanzibar" &&
        highest !== "Higher Combo!" &&
        highest !== "Lower Combo!" &&
        Number(newPoints) > Number(highest))
    ) {
      setHighest(newPoints);
    }
  }

  const isZanzibar = (sortedDice: number[]) => {
    const expected = [4, 5, 6];
    return sortedDice.every((value, index) => value === expected[index]);
  };

  const isHighCombo = (sortedDice: number[]) => sortedDice[0] === sortedDice[2];

  const isLowCombo = (sortedDice: number[]) => {
    const expected = [1, 2, 3];
    return sortedDice.every((value, index) => value === expected[index]);
  };

  return (
    <ThemedView style={styles.main}>
      <ThemedView style={styles.topBar}>
        <ThemedView style={styles.containerRow}>
          <ThemedText style={styles.headerText}>Roll: {rolls}</ThemedText>
        </ThemedView>
        <ThemedView style={styles.containerRow}>
          <ThemedText style={styles.headerText}>Points: {points}</ThemedText>
        </ThemedView>
        <ThemedView style={styles.containerRow}>
          <ThemedText style={styles.headerText}>
            Highest Roll: {highest}
          </ThemedText>
        </ThemedView>
      </ThemedView>

      {settings.shakeEnabled && (
        <ShakeSensor onShake={roll} threshold={4} cooldown={1000} />
      )}

      <ThemedView style={styles.diceSection}>
        {Array.from({ length: NUM_DICE }).map((_value, index) => {
          return <Dice key={index} value={diceValues[index]} />;
        })}
      </ThemedView>

      <ThemedView style={styles.bottomBar}>
        <ThemedView style={styles.containerRow}>
          <Button
            disabled={isRolling || rolls === 3}
            onPress={roll}
            title="Roll"
          />
          <Button disabled={isRolling} onPress={reset} title="Reset" />
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    height: "80%",
  },
  containerRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  headerText: {
    fontSize: 24,
  },
  diceSection: {
    height: "75%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  topBar: {
    height: "10%",
    justifyContent: "center",
    flex: 1,
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
