import { View, StyleSheet, Button } from "react-native";
import React from "react";
import Dice from "@/components/Dice";
import ShakeSensor from "@/components/ShakeSensor";
import { delay, randomNum } from "@/utils/utils";

const NUM_DICE = 5;

export default function Yacht() {
  const [diceValues, setDiceValues] = React.useState(
    Array.from({ length: NUM_DICE }, (_, index) => index + 1)
  );
  const [selectedDice, setSelectedDice] = React.useState(
    new Array(NUM_DICE).fill(false)
  );
  const [isRolling, setIsRolling] = React.useState(false);

  const onSelect = (index: number) =>
    setSelectedDice(
      selectedDice.map((value, i) => (i === index ? !value : value))
    );

  const roll = async () => {
    setIsRolling(true);

    const TIMES_TO_ROLL = 5;
    for (let i = 0; i < TIMES_TO_ROLL; i++) {
      setDiceValues(
        diceValues.map((value, index) =>
          selectedDice[index] ? value : randomNum()
        )
      );
      await delay(100);
    }

    setIsRolling(false);
  };

  return (
    <View style={styles.main}>
      <View style={styles.topBar}>
        <View style={styles.subtractButton}></View>
        <View style={styles.addButton}></View>
      </View>

      <ShakeSensor onShake={roll} threshold={4} cooldown={1000} />

      <View style={styles.diceSection}>
        {Array.from({ length: NUM_DICE }).map((_value, index) => {
          return (
            <Dice
              key={index}
              value={diceValues[index]}
              selected={selectedDice[index]}
              onSelect={() => onSelect(index)}
            />
          );
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
