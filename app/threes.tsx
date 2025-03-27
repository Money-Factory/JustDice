import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";
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

export default function ThreesGame() {
  const [firstDice, setFirstDice] = React.useState(one);
  const [secondDice, setSecondDice] = React.useState(two);
  const [thirdDice, setThirdDice] = React.useState(three);
  const [fourthDice, setFourthDice] = React.useState(four);
  const [fifthDice, setFifthDice] = React.useState(five);
  const [sixthDice, setSixthDice] = React.useState(six);

  const [isRolling, setIsRolling] = React.useState(false);
  const [diceValue, setDiceValue] = React.useState(0);
  const [lastDiceValue, setLastDiceValue] = React.useState(0);
  const [rollCount, setRollCount] = React.useState(0);

  const [pressDisabled, setPressDisabled] = React.useState(true);

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
          <Text>Current Value: {diceValue}</Text>
          <Text>Last Score: {lastDiceValue}</Text>
        </View>
        <View style={styles.addButton}>
          <Text>Current Round: {rollCount}</Text>
          <Button onPress={reset} title="Reset" />
        </View>
      </View>

      <ShakeSensor onShake={roll} threshold={4} cooldown={1000} />

      <View style={styles.diceSection}>
        <View style={styles.diceRow}>
          <Pressable disabled={pressDisabled} onPressIn={() => swapColor(1)}>
            <Text style={{ fontSize: 175, color: secondDiceColor }}>
              {secondDice}
            </Text>
          </Pressable>
        </View>

        <View style={styles.diceRow}>
          <Pressable disabled={pressDisabled} onPressIn={() => swapColor(2)}>
            <Text style={{ fontSize: 175, color: thirdDiceColor }}>
              {thirdDice}
            </Text>
          </Pressable>
          <Pressable disabled={pressDisabled} onPressIn={() => swapColor(3)}>
            <Text style={{ fontSize: 175, color: fourthDiceColor }}>
              {fourthDice}
            </Text>
          </Pressable>
        </View>

        <View style={styles.diceRow}>
          <Pressable disabled={pressDisabled} onPressIn={() => swapColor(4)}>
            <Text style={{ fontSize: 175, color: fifthDiceColor }}>
              {fifthDice}
            </Text>
          </Pressable>
          <Pressable disabled={pressDisabled} onPressIn={() => swapColor(5)}>
            <Text style={{ fontSize: 175, color: sixthDiceColor }}>
              {sixthDice}
            </Text>
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

  async function swapColor(diceNum: number) {
    let tempDiceValue = diceValue;

    if (diceNum == 1) {
      if (secondDiceColor == "black") {
        setSecondDiceColor("red");
        if (secondDice == one) {
          tempDiceValue += 1;
        } else if (secondDice == two) {
          tempDiceValue += 2;
        } else if (secondDice == four) {
          tempDiceValue += 4;
        } else if (secondDice == five) {
          tempDiceValue += 5;
        } else if (secondDice == six) {
          tempDiceValue += 6;
        }
        setIsRolling(false);
      }
      // else {
      //     setSecondDiceColor("black");
      //     if (secondDice == one) {
      //         tempDiceValue -= 1;
      //     } else if (secondDice == two) {
      //         tempDiceValue -= 2;
      //     } else if (secondDice == four) {
      //         tempDiceValue -= 4;
      //     } else if (secondDice == five) {
      //         tempDiceValue -= 5;
      //     } else if (secondDice == six) {
      //         tempDiceValue -= 6;
      //     }
      // }
    } else if (diceNum == 2) {
      if (thirdDiceColor == "black") {
        setThirdDiceColor("red");
        if (thirdDice == one) {
          tempDiceValue += 1;
        } else if (thirdDice == two) {
          tempDiceValue += 2;
        } else if (thirdDice == four) {
          tempDiceValue += 4;
        } else if (thirdDice == five) {
          tempDiceValue += 5;
        } else if (thirdDice == six) {
          tempDiceValue += 6;
        }
        setIsRolling(false);
      }
      // else {
      //     setThirdDiceColor("black");
      //     if (thirdDice == one) {
      //         tempDiceValue -= 1;
      //     } else if (thirdDice == two) {
      //         tempDiceValue -= 2;
      //     } else if (thirdDice == four) {
      //         tempDiceValue -= 4;
      //     } else if (thirdDice == five) {
      //         tempDiceValue -= 5;
      //     } else if (thirdDice == six) {
      //         tempDiceValue -= 6;
      //     }
      // }
    } else if (diceNum == 3) {
      if (fourthDiceColor == "black") {
        setFourthDiceColor("red");
        if (fourthDice == one) {
          tempDiceValue += 1;
        } else if (fourthDice == two) {
          tempDiceValue += 2;
        } else if (fourthDice == four) {
          tempDiceValue += 4;
        } else if (fourthDice == five) {
          tempDiceValue += 5;
        } else if (fourthDice == six) {
          tempDiceValue += 6;
        }
        setIsRolling(false);
      }
      // else {
      //     setFourthDiceColor("black");
      //     if (fourthDice == one) {
      //         tempDiceValue -= 1;
      //     } else if (fourthDice == two) {
      //         tempDiceValue -= 2;
      //     } else if (fourthDice == four) {
      //         tempDiceValue -= 4;
      //     } else if (fourthDice == five) {
      //         tempDiceValue -= 5;
      //     } else if (fourthDice == six) {
      //         tempDiceValue -= 6;
      //     }
      // }
    } else if (diceNum == 4) {
      if (fifthDiceColor == "black") {
        setFifthDiceColor("red");
        if (fifthDice == one) {
          tempDiceValue += 1;
        } else if (fifthDice == two) {
          tempDiceValue += 2;
        } else if (fifthDice == four) {
          tempDiceValue += 4;
        } else if (fifthDice == five) {
          tempDiceValue += 5;
        } else if (fifthDice == six) {
          tempDiceValue += 6;
        }
        setIsRolling(false);
      }
      // else {
      //     setFifthDiceColor("black");
      //     if (fifthDice == one) {
      //         tempDiceValue -= 1;
      //     } else if (fifthDice == two) {
      //         tempDiceValue -= 2;
      //     } else if (fifthDice == four) {
      //         tempDiceValue -= 4;
      //     } else if (fifthDice == five) {
      //         tempDiceValue -= 5;
      //     } else if (fifthDice == six) {
      //         tempDiceValue -= 6;
      //     }
      // }
    } else if (diceNum == 5) {
      if (sixthDiceColor == "black") {
        setSixthDiceColor("red");
        if (sixthDice == one) {
          tempDiceValue += 1;
        } else if (sixthDice == two) {
          tempDiceValue += 2;
        } else if (sixthDice == four) {
          tempDiceValue += 4;
        } else if (sixthDice == five) {
          tempDiceValue += 5;
        } else if (sixthDice == six) {
          tempDiceValue += 6;
        }
        setIsRolling(false);
      }
      //  else {
      //     setSixthDiceColor("black");
      //     if (sixthDice == one) {
      //         tempDiceValue -= 1;
      //     } else if (sixthDice == two) {
      //         tempDiceValue -= 2;
      //     } else if (sixthDice == four) {
      //         tempDiceValue -= 4;
      //     } else if (sixthDice == five) {
      //         tempDiceValue -= 5;
      //     } else if (sixthDice == six) {
      //         tempDiceValue -= 6;
      //     }
      // }
    }

    setDiceValue(tempDiceValue);
  }

  async function reset() {
    setRollCount(0);
    setLastDiceValue(diceValue);
    setDiceValue(0);

    setSecondDiceColor("black");
    setThirdDiceColor("black");
    setFourthDiceColor("black");
    setFifthDiceColor("black");
    setSixthDiceColor("black");

    setIsRolling(false);
  }

  async function roll() {
    if (pressDisabled == true) {
      setPressDisabled(false);
    }

    setRollCount(rollCount + 1);

    if (rollCount == 5) {
      setRollCount(0);
      setLastDiceValue(diceValue);
      setDiceValue(0);

      setSecondDiceColor("black");
      setThirdDiceColor("black");
      setFourthDiceColor("black");
      setFifthDiceColor("black");
      setSixthDiceColor("black");

      setPressDisabled(true);
    }

    setIsRolling(true);

    secondDiceColor == "black"
      ? setSecondDice(pipArray[randomNum() - 1])
      : null;
    thirdDiceColor == "black" ? setThirdDice(pipArray[randomNum() - 1]) : null;
    fourthDiceColor == "black"
      ? setFourthDice(pipArray[randomNum() - 1])
      : null;
    fifthDiceColor == "black" ? setFifthDice(pipArray[randomNum() - 1]) : null;
    sixthDiceColor == "black" ? setSixthDice(pipArray[randomNum() - 1]) : null;

    await delay(100);

    secondDiceColor == "black"
      ? setSecondDice(pipArray[randomNum() - 1])
      : null;
    thirdDiceColor == "black" ? setThirdDice(pipArray[randomNum() - 1]) : null;
    fourthDiceColor == "black"
      ? setFourthDice(pipArray[randomNum() - 1])
      : null;
    fifthDiceColor == "black" ? setFifthDice(pipArray[randomNum() - 1]) : null;
    sixthDiceColor == "black" ? setSixthDice(pipArray[randomNum() - 1]) : null;

    await delay(100);

    secondDiceColor == "black"
      ? setSecondDice(pipArray[randomNum() - 1])
      : null;
    thirdDiceColor == "black" ? setThirdDice(pipArray[randomNum() - 1]) : null;
    fourthDiceColor == "black"
      ? setFourthDice(pipArray[randomNum() - 1])
      : null;
    fifthDiceColor == "black" ? setFifthDice(pipArray[randomNum() - 1]) : null;
    sixthDiceColor == "black" ? setSixthDice(pipArray[randomNum() - 1]) : null;

    await delay(100);

    secondDiceColor == "black"
      ? setSecondDice(pipArray[randomNum() - 1])
      : null;
    thirdDiceColor == "black" ? setThirdDice(pipArray[randomNum() - 1]) : null;
    fourthDiceColor == "black"
      ? setFourthDice(pipArray[randomNum() - 1])
      : null;
    fifthDiceColor == "black" ? setFifthDice(pipArray[randomNum() - 1]) : null;
    sixthDiceColor == "black" ? setSixthDice(pipArray[randomNum() - 1]) : null;

    await delay(100);

    secondDiceColor == "black"
      ? setSecondDice(pipArray[randomNum() - 1])
      : null;
    thirdDiceColor == "black" ? setThirdDice(pipArray[randomNum() - 1]) : null;
    fourthDiceColor == "black"
      ? setFourthDice(pipArray[randomNum() - 1])
      : null;
    fifthDiceColor == "black" ? setFifthDice(pipArray[randomNum() - 1]) : null;
    sixthDiceColor == "black" ? setSixthDice(pipArray[randomNum() - 1]) : null;

    //setIsRolling(false);
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
