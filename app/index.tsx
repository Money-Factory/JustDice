import { Text, View, StyleSheet, Button } from "react-native";
import React from "react";
import ShakeSensor from "../components/ShakeSensor";

const ONE = "\u2680";
const TWO = "\u2681";
const THREE = "\u2682";
const FOUR = "\u2683";
const FIVE = "\u2684";
const SIX = "\u2685";
const POSSIBLE_VALUES = [ONE, TWO, THREE, FOUR, FIVE, SIX];

const MAX_DIE_COUNT = 6;
const MIN_DIE_COUNT = 0;

export default function Index() {
  const [diceCount, setDiceCount] = React.useState(MAX_DIE_COUNT);
  const [diceValues, setDiceValues] = React.useState([...POSSIBLE_VALUES]);
  const [isRolling, setIsRolling] = React.useState(false);

  const removeDie = () =>
    setDiceCount(diceCount === MIN_DIE_COUNT ? MIN_DIE_COUNT : diceCount - 1);
  const addDie = () =>
    setDiceCount(diceCount === MAX_DIE_COUNT ? MAX_DIE_COUNT : diceCount + 1);

  const roll = async () => {
    setIsRolling(true);

    for (let i = 0; i < 5; i++) {
      setDiceValues(diceValues.map(() => POSSIBLE_VALUES[randomNum() - 1]));
      await delay(100);
    }

    setIsRolling(false);
  };

  const randomNum = (): number => Math.floor(Math.random() * 6) + 1;

  const delay = (durationMS: number) =>
    new Promise((resolve) => setTimeout(resolve, durationMS));

  return (
    <View style={styles.main}>
      <View style={styles.topBar}>
        <View style={styles.subtractButton}>
          <Button onPress={removeDie} title="Remove Die" />
        </View>
        <View style={styles.addButton}>
          <Button onPress={addDie} title="Add Die" />
        </View>
      </View>

      <ShakeSensor onShake={roll} threshold={4} cooldown={1000} />

      <View style={styles.diceSection}>
        {Array.from({ length: diceCount }).map((_value, index) => {
          return <Text style={styles.diceItem}>{diceValues[index]}</Text>;
        })}
      </View>

      <View style={styles.bottomBar}>
        <View style={styles.rollButton}>
          <Button disabled={isRolling} onPress={roll} title="Roll" />
        </View>
      </View>
    </View>
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
    backgroundColor: "white",
  },
  diceItem: {
    width: "45%",
    margin: "2.5%",
    textAlign: "center",
    fontSize: 175,
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
    backgroundColor: "white",
  },
  bottomBar: {
    height: "10%",
    justifyContent: "center",
    backgroundColor: "white",
    flex: 1,
  },
  rollButton: {
    justifyContent: "center",
    flex: 1,
    paddingLeft: "35%",
    paddingRight: "35%",
  },
  subtractButton: {},
  addButton: {},
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
  },
});
