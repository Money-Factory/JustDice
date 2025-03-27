import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ShakeSensor from "../components/ShakeSensor";

let one = "\u2680";
let two = "\u2681";
let three = "\u2682";
let four = "\u2683";
let five = "\u2684";
let six = "\u2685";
let pipArray = [one, two, three, four, five, six];

const randomNum = (min = 1, max = 6) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
let diceCount = 6;

export default function Index() {
  const [firstDice, setFirstDice] = React.useState(one);
  const [secondDice, setSecondDice] = React.useState(two);
  const [thirdDice, setThirdDice] = React.useState(three);
  const [fourthDice, setFourthDice] = React.useState(four);
  const [fifthDice, setFifthDice] = React.useState(five);
  const [sixthDice, setSixthDice] = React.useState(six);

  const [isRolling, setIsRolling] = React.useState(false);

  const [firstDiceColor, setFirstDiceColor] = React.useState("black");
  const [secondDiceColor, setSecondDiceColor] = React.useState("black");
  const [thirdDiceColor, setThirdDiceColor] = React.useState("black");
  const [fourthDiceColor, setFourthDiceColor] = React.useState("black");
  const [fifthDiceColor, setFifthDiceColor] = React.useState("black");
  const [sixthDiceColor, setSixthDiceColor] = React.useState("black");

  return (
    <View style={styles.main}>
      <View style={styles.topBar}>
        <View style={styles.subtractButton}>
          <Button onPress={subtract} title="Remove Die" />
        </View>
        <View style={styles.addButton}>
          <Button onPress={add} title="Add Die" />
        </View>
      </View>

      <ShakeSensor onShake={roll} threshold={4} cooldown={1000} />

      <View style={styles.diceSection}>
        <View style={styles.diceRow}>
          <Text style={{ fontSize: 175, color: firstDiceColor }}>
            {firstDice}
          </Text>
          <Text style={{ fontSize: 175, color: secondDiceColor }}>
            {secondDice}
          </Text>
        </View>

        <View style={styles.diceRow}>
          <Text style={{ fontSize: 175, color: thirdDiceColor }}>
            {thirdDice}
          </Text>
          <Text style={{ fontSize: 175, color: fourthDiceColor }}>
            {fourthDice}
          </Text>
        </View>

        <View style={styles.diceRow}>
          <Text style={{ fontSize: 175, color: fifthDiceColor }}>
            {fifthDice}
          </Text>
          <Text style={{ fontSize: 175, color: sixthDiceColor }}>
            {sixthDice}
          </Text>
        </View>
      </View>

      <View style={styles.bottomBar}>
        <View style={styles.rollButton}>
          <Button disabled={isRolling} onPress={roll} title="Roll" />
        </View>
      </View>
    </View>
  );

  async function roll() {
    setIsRolling(true);

    setFirstDice(pipArray[randomNum() - 1]);
    setSecondDice(pipArray[randomNum() - 1]);
    setThirdDice(pipArray[randomNum() - 1]);
    setFourthDice(pipArray[randomNum() - 1]);
    setFifthDice(pipArray[randomNum() - 1]);
    setSixthDice(pipArray[randomNum() - 1]);

    await delay(100);

    setFirstDice(pipArray[randomNum() - 1]);
    setSecondDice(pipArray[randomNum() - 1]);
    setThirdDice(pipArray[randomNum() - 1]);
    setFourthDice(pipArray[randomNum() - 1]);
    setFifthDice(pipArray[randomNum() - 1]);
    setSixthDice(pipArray[randomNum() - 1]);

    await delay(100);

    setFirstDice(pipArray[randomNum() - 1]);
    setSecondDice(pipArray[randomNum() - 1]);
    setThirdDice(pipArray[randomNum() - 1]);
    setFourthDice(pipArray[randomNum() - 1]);
    setFifthDice(pipArray[randomNum() - 1]);
    setSixthDice(pipArray[randomNum() - 1]);

    await delay(100);

    setFirstDice(pipArray[randomNum() - 1]);
    setSecondDice(pipArray[randomNum() - 1]);
    setThirdDice(pipArray[randomNum() - 1]);
    setFourthDice(pipArray[randomNum() - 1]);
    setFifthDice(pipArray[randomNum() - 1]);
    setSixthDice(pipArray[randomNum() - 1]);

    await delay(100);

    setFirstDice(pipArray[randomNum() - 1]);
    setSecondDice(pipArray[randomNum() - 1]);
    setThirdDice(pipArray[randomNum() - 1]);
    setFourthDice(pipArray[randomNum() - 1]);
    setFifthDice(pipArray[randomNum() - 1]);
    setSixthDice(pipArray[randomNum() - 1]);

    setIsRolling(false);
  }

  function delay(durationMS: number) {
    return new Promise((resolve) => setTimeout(resolve, durationMS));
  }
  function add() {
    if (diceCount == 0) {
      setFirstDiceColor("black");
      diceCount++;
    } else if (diceCount == 1) {
      setSecondDiceColor("black");
      diceCount++;
    } else if (diceCount == 2) {
      setThirdDiceColor("black");
      diceCount++;
    } else if (diceCount == 3) {
      setFourthDiceColor("black");
      diceCount++;
    } else if (diceCount == 4) {
      setFifthDiceColor("black");
      diceCount++;
    } else if (diceCount == 5) {
      setSixthDiceColor("black");
      diceCount++;
    }
  }

  function subtract() {
    if (diceCount == 6) {
      setSixthDiceColor("white");
      diceCount--;
    } else if (diceCount == 5) {
      setFifthDiceColor("white");
      diceCount--;
    } else if (diceCount == 4) {
      setFourthDiceColor("white");
      diceCount--;
    } else if (diceCount == 3) {
      setThirdDiceColor("white");
      diceCount--;
    } else if (diceCount == 2) {
      setSecondDiceColor("white");
      diceCount--;
    } else if (diceCount == 1) {
      setFirstDiceColor("white");
      diceCount--;
    }
  }
}

function test() {
  alert("test");
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
  },
  diceRow: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "center",
    height: "33%",
  },
  diceSection: {
    height: "80%",
  },
  topBar: {
    height: "10%",
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 50,
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
