import { Text, View, StyleSheet, Button, TouchableOpacity, Pressable } from "react-native";
import React, { useState } from "react";
import ShakeSensor from "../ShakeSensor";


let one = "\u2680";
let two = "\u2681";
let three = "\u2682";
let four = "\u2683";
let five = "\u2684";
let six = "\u2685";
let pipArray = [one, two, three, four, five, six];

const randomNum = (min = 1, max = 6) => Math.floor(Math.random() * (max - min + 1)) + min;
let diceCount = 6;


export default function ThreesGame() {
  const [firstDice, setFirstDice] = React.useState(one);
  const [secondDice, setSecondDice] = React.useState(two);
  const [thirdDice, setThirdDice] = React.useState(three);
  const [fourthDice, setFourthDice] = React.useState(four);
  const [fifthDice, setFifthDice] = React.useState(five);
  const [sixthDice, setSixthDice] = React.useState(six);
  
  const [isRolling, setIsRolling] = React.useState(false);
  const [diceValue, setDiceValue] = React.useState(0)
  const [rollCount, setRollCount] = React.useState(0);

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
        </View>
        <View style={styles.addButton}>
        </View>
      </View>

      <ShakeSensor onShake={roll} threshold={4} cooldown={1000} />

      <View style={styles.diceSection}>
        <View style={styles.diceRow}>
        
          <Pressable onPressIn={() => swapColor(1)}>
            <Text style={{fontSize: 175, color: secondDiceColor}}>{secondDice}</Text>
          </Pressable>
        </View>

        <View style={styles.diceRow}>
        <Pressable onPressIn={() => swapColor(2)}>
            <Text style={{fontSize: 175, color: thirdDiceColor}}>{thirdDice}</Text>
        </Pressable>
        <Pressable onPressIn={() => swapColor(3)}>
          <Text style={{fontSize: 175, color: fourthDiceColor}}>{fourthDice}</Text>
        </Pressable>
        </View>

        <View style={styles.diceRow}>
        <Pressable onPressIn={() => swapColor(4)}>
            <Text style={{fontSize: 175, color: fifthDiceColor}}>{fifthDice}</Text>
        </Pressable>
        <Pressable onPressIn={() => swapColor(5)}>
            <Text style={{fontSize: 175, color: sixthDiceColor}}>{sixthDice}</Text>
        </Pressable>
        </View>
      </View>

      <View style={styles.bottomBar}>
        <View style={styles.rollButton}>
          <Button disabled={isRolling} onPress={roll} title="Roll" />
        </View>
      </View>

    </View>
  );

  async function swapColor(diceNum:number) {
    if (diceNum == 1) {
        if (secondDiceColor == "black") {
            setSecondDiceColor("red");
        } else {
            setSecondDiceColor("black");
        }
    } else if (diceNum == 2) {
        if (thirdDiceColor == "black") {
            setThirdDiceColor("red");
        } else {
            setThirdDiceColor("black");
        }
    } else if (diceNum == 3) {
        if (fourthDiceColor == "black") {
            setFourthDiceColor("red");
        } else {
            setFourthDiceColor("black");
        }
    } else if (diceNum == 4) {
        if (fifthDiceColor == "black") {
            setFifthDiceColor("red");
        } else {
            setFifthDiceColor("black");
        }
    } else if (diceNum == 5) {
        if (sixthDiceColor == "black") {
            setSixthDiceColor("red");
        } else {
            setSixthDiceColor("black");
        }
    }
  }


  async function roll() {

    setIsRolling(true);
    
    secondDiceColor == "black" ? setSecondDice(pipArray[randomNum()-1]) : null;
    thirdDiceColor == "black" ? setThirdDice(pipArray[randomNum()-1]) : null;
    fourthDiceColor == "black" ? setFourthDice(pipArray[randomNum()-1]) : null;
    fifthDiceColor == "black" ? setFifthDice(pipArray[randomNum()-1]) : null;
    sixthDiceColor == "black" ? setSixthDice(pipArray[randomNum()-1]) : null;

    await delay(100)
    
    secondDiceColor == "black" ? setSecondDice(pipArray[randomNum()-1]) : null;
    thirdDiceColor == "black" ? setThirdDice(pipArray[randomNum()-1]) : null;
    fourthDiceColor == "black" ? setFourthDice(pipArray[randomNum()-1]) : null;
    fifthDiceColor == "black" ? setFifthDice(pipArray[randomNum()-1]) : null;
    sixthDiceColor == "black" ? setSixthDice(pipArray[randomNum()-1]) : null;
  
    await delay(100)

    secondDiceColor == "black" ? setSecondDice(pipArray[randomNum()-1]) : null;
    thirdDiceColor == "black" ? setThirdDice(pipArray[randomNum()-1]) : null;
    fourthDiceColor == "black" ? setFourthDice(pipArray[randomNum()-1]) : null;
    fifthDiceColor == "black" ? setFifthDice(pipArray[randomNum()-1]) : null;
    sixthDiceColor == "black" ? setSixthDice(pipArray[randomNum()-1]) : null;

    await delay(100)

    secondDiceColor == "black" ? setSecondDice(pipArray[randomNum()-1]) : null;
    thirdDiceColor == "black" ? setThirdDice(pipArray[randomNum()-1]) : null;
    fourthDiceColor == "black" ? setFourthDice(pipArray[randomNum()-1]) : null;
    fifthDiceColor == "black" ? setFifthDice(pipArray[randomNum()-1]) : null;
    sixthDiceColor == "black" ? setSixthDice(pipArray[randomNum()-1]) : null;
    
    await delay(100)

    secondDiceColor == "black" ? setSecondDice(pipArray[randomNum()-1]) : null;
    thirdDiceColor == "black" ? setThirdDice(pipArray[randomNum()-1]) : null;
    fourthDiceColor == "black" ? setFourthDice(pipArray[randomNum()-1]) : null;
    fifthDiceColor == "black" ? setFifthDice(pipArray[randomNum()-1]) : null;
    sixthDiceColor == "black" ? setSixthDice(pipArray[randomNum()-1]) : null;

    setIsRolling(false);

    let diceValue:number = 0;

    if (firstDice == one) {
        diceValue += 1;
    } else if (firstDice == two) {
        diceValue += 2;
    } else if (firstDice == four) {
        diceValue += 4;
    } else if (firstDice == five) {
        diceValue += 5;
    } else if (firstDice == six) {
        diceValue += 6;
    }

    setDiceValue(diceValue);
  }

  function delay(durationMS:number) {
      return new Promise(resolve => setTimeout(resolve, durationMS))
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
  alert("test")
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    height: "100%"
  },
  diceRow: {
    flex: 1,
    flexWrap: 'wrap',
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
    flexWrap: 'wrap',
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 50,
    backgroundColor: "white"
  },
  bottomBar: {
    height: "10%",
    justifyContent: "center",
    backgroundColor: "white",
    flex: 1
  },
  rollButton: {
    justifyContent: "center",
    flex: 1,
    paddingLeft: "35%",
    paddingRight: "35%",
  },
  subtractButton: {
    
  },
  addButton: {
    
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
});