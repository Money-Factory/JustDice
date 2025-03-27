import { Text, View, StyleSheet, Button, Pressable } from "react-native";
import React from "react";
import ShakeSensor from "../components/ShakeSensor";

let ACE = "\u0041";
let KING = "\u004B";
let QUEEN = "\u0051";
let JACK = "\u004A";
let TEN = "\u0031\u0030";
let NINE = "\u0039";

let pipArray = [ACE, KING, QUEEN, JACK, TEN, NINE];
const randomNum = (min = 1, max = 6) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const STRAIGHT = [];
const FOUR_OF_A_KIND = [];
const FULL_HOUSE = [];
const THREE_OF_A_KIND = [];
const TWO_PAIR = [];
const ONE_PAIR = [];

export default function PokerDice() {
  const [firstDice, setFirstDice] = React.useState(ACE);
  const [secondDice, setSecondDice] = React.useState(ACE);
  const [thirdDice, setThirdDice] = React.useState(ACE);
  const [fourthDice, setFourthDice] = React.useState(ACE);
  const [fifthDice, setFifthDice] = React.useState(ACE);

  const [isRolling, setIsRolling] = React.useState(false);

  const [firstDiceColor, setFirstDiceColor] = React.useState("black");
  const [secondDiceColor, setSecondDiceColor] = React.useState("black");
  const [thirdDiceColor, setThirdDiceColor] = React.useState("black");
  const [fourthDiceColor, setFourthDiceColor] = React.useState("black");
  const [fifthDiceColor, setFifthDiceColor] = React.useState("black");

  async function swapColor(diceNum: number) {
    if (diceNum == 1) {
      if (firstDiceColor == "black") {
        setFirstDiceColor("red");
      } else {
        setFirstDiceColor("black");
      }
    } else if (diceNum == 2) {
      if (secondDiceColor == "black") {
        setSecondDiceColor("red");
      } else {
        setSecondDiceColor("black");
      }
    } else if (diceNum == 3) {
      if (thirdDiceColor == "black") {
        setThirdDiceColor("red");
      } else {
        setThirdDiceColor("black");
      }
    } else if (diceNum == 4) {
      if (fourthDiceColor == "black") {
        setFourthDiceColor("red");
      } else {
        setFourthDiceColor("black");
      }
    } else if (diceNum == 5) {
      if (fifthDiceColor == "black") {
        setFifthDiceColor("red");
      } else {
        setFifthDiceColor("black");
      }
    }
  }

  function delay(durationMS: number) {
    return new Promise((resolve) => setTimeout(resolve, durationMS));
  }

  async function roll() {
    setIsRolling(true);

    firstDiceColor == "black" ? setFirstDice(pipArray[randomNum() - 1]) : null;
    secondDiceColor == "black"
      ? setSecondDice(pipArray[randomNum() - 1])
      : null;
    thirdDiceColor == "black" ? setThirdDice(pipArray[randomNum() - 1]) : null;
    fourthDiceColor == "black"
      ? setFourthDice(pipArray[randomNum() - 1])
      : null;
    fifthDiceColor == "black" ? setFifthDice(pipArray[randomNum() - 1]) : null;

    await delay(100);

    firstDiceColor == "black" ? setFirstDice(pipArray[randomNum() - 1]) : null;
    secondDiceColor == "black"
      ? setSecondDice(pipArray[randomNum() - 1])
      : null;
    thirdDiceColor == "black" ? setThirdDice(pipArray[randomNum() - 1]) : null;
    fourthDiceColor == "black"
      ? setFourthDice(pipArray[randomNum() - 1])
      : null;
    fifthDiceColor == "black" ? setFifthDice(pipArray[randomNum() - 1]) : null;

    await delay(100);

    firstDiceColor == "black" ? setFirstDice(pipArray[randomNum() - 1]) : null;
    secondDiceColor == "black"
      ? setSecondDice(pipArray[randomNum() - 1])
      : null;
    thirdDiceColor == "black" ? setThirdDice(pipArray[randomNum() - 1]) : null;
    fourthDiceColor == "black"
      ? setFourthDice(pipArray[randomNum() - 1])
      : null;
    fifthDiceColor == "black" ? setFifthDice(pipArray[randomNum() - 1]) : null;

    await delay(100);

    firstDiceColor == "black" ? setFirstDice(pipArray[randomNum() - 1]) : null;
    secondDiceColor == "black"
      ? setSecondDice(pipArray[randomNum() - 1])
      : null;
    thirdDiceColor == "black" ? setThirdDice(pipArray[randomNum() - 1]) : null;
    fourthDiceColor == "black"
      ? setFourthDice(pipArray[randomNum() - 1])
      : null;
    fifthDiceColor == "black" ? setFifthDice(pipArray[randomNum() - 1]) : null;

    await delay(100);

    firstDiceColor == "black" ? setFirstDice(pipArray[randomNum() - 1]) : null;
    secondDiceColor == "black"
      ? setSecondDice(pipArray[randomNum() - 1])
      : null;
    thirdDiceColor == "black" ? setThirdDice(pipArray[randomNum() - 1]) : null;
    fourthDiceColor == "black"
      ? setFourthDice(pipArray[randomNum() - 1])
      : null;
    fifthDiceColor == "black" ? setFifthDice(pipArray[randomNum() - 1]) : null;

    setIsRolling(false);
  }

  return (
    <View style={styles.main}>
      <View style={styles.topBar} />

      <ShakeSensor onShake={roll} threshold={4} cooldown={1000} />

      <View style={styles.diceSection}>
        <View style={styles.diceRow}>
          <View style={styles.diceContainer}>
            <Pressable onPressIn={() => swapColor(1)}>
              <Text style={{ fontSize: 75, color: firstDiceColor }}>
                {firstDice}
              </Text>
            </Pressable>
          </View>
          <View style={styles.diceContainer}>
            <Pressable onPressIn={() => swapColor(2)}>
              <Text style={{ fontSize: 75, color: secondDiceColor }}>
                {secondDice}
              </Text>
            </Pressable>
          </View>
          <View style={styles.diceContainer}>
            <Pressable onPressIn={() => swapColor(3)}>
              <Text style={{ fontSize: 75, color: thirdDiceColor }}>
                {thirdDice}
              </Text>
            </Pressable>
          </View>
          <View style={styles.diceContainer}>
            <Pressable onPressIn={() => swapColor(4)}>
              <Text style={{ fontSize: 75, color: fourthDiceColor }}>
                {fourthDice}
              </Text>
            </Pressable>
          </View>
          <View style={styles.diceContainer}>
            <Pressable onPressIn={() => swapColor(5)}>
              <Text style={{ fontSize: 75, color: fifthDiceColor }}>
                {fifthDice}
              </Text>
            </Pressable>
          </View>
        </View>
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
  diceContainer: {
    borderWidth: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 10,
    paddingLeft: 10,
    marginRight: 10,
    marginLeft: 10,
    height: "50%",
    width: "10%",
  },
  diceRow: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "center",
    height: "50%",
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
