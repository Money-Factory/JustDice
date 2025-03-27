import { Text, View, StyleSheet, Button, Pressable } from "react-native";
import React, { useEffect } from "react";
import ShakeSensor from "../components/ShakeSensor";
import { finishScreenTransition } from "react-native-reanimated";

let ACE = "\u0041";
let KING = "\u004B";
let QUEEN = "\u0051";
let JACK = "\u004A";
let TEN = "\u0031\u0030";
let NINE = "\u0039";

let aceVal = 14;
let kingVal = 13;
let queenVal = 12;
let jackVal = 11;
let tenVal = 10;
let nineVal = 9;

let cardsToValsMap: { [key: string]: number } = {};

// Setting values
cardsToValsMap[ACE] = aceVal;
cardsToValsMap[KING] = kingVal;
cardsToValsMap[QUEEN] = queenVal;
cardsToValsMap[JACK] = jackVal;
cardsToValsMap[TEN] = tenVal;
cardsToValsMap[NINE] = nineVal;

// 9, A, K, A, J
// 
// Sort
// 9, J, K, A, A
//
// BEGIN
// Index i = 0
// Value of i = NINE
// Index j = i + 1 
// Index j = 1
// Value of j = JACK
//   Ask, are I and J values equal? (NINE and JACK)
//     No.
// Increment J
// Index j = 2
// Value of J = KING
//   Ask, are I and J values euqual? (NINE and KING)
//     No.
// Increment J
// Index j = 3
// Value of J = ACE
//   Ask, are I and J values euqual? (NINE and ACE)
//     No.
// Increment J
// Index j = 4
// Value of J = ACE
//   Ask, are I and J values euqual? (NINE and ACE)
//     No.
// 
// Break inner loop
// Increment I
// Index i = 1
// Value of i = JACK

let pipArray = [ACE, KING, QUEEN, JACK, TEN, NINE];
const randomNum = (min = 1, max = 6) => Math.floor(Math.random() * (max - min + 1)) + min;

const FIVE_OF_A_KIND = "Five of a Kind";
const FOUR_OF_A_KIND = "Four of a Kind";
const FULL_HOUSE = "Full House";
const STRAIGHT = "Straight";
const THREE_OF_A_KIND = "Three of a Kind";
const TWO_PAIR = "Two Pair";
const ONE_PAIR = "One Pair";
const HIGH_CARD = "High Card (you suck lol)";

export default function PokerDice() {

    const [firstCard, setFirstCard] = React.useState(ACE);
    const [secondCard, setSecondCard] = React.useState(ACE);
    const [thirdCard, setThirdCard] = React.useState(ACE);
    const [fourthCard, setFourthCard] = React.useState(ACE);
    const [fifthCard, setFifthCard] = React.useState(ACE);

  const [isRolling, setIsRolling] = React.useState(false);

    const [handLabel, setHandLabel] = React.useState("NONE")
    const [handRank, setHandRank] = React.useState("NONE")

    const [firstCardColor, setFirstCardColor] = React.useState("black");
    const [secondCardColor, setSecondCardColor] = React.useState("black");
    const [thirdCardColor, setThirdCardColor] = React.useState("black");
    const [fourthCardColor, setFourthCardColor] = React.useState("black");
    const [fifthCardColor, setFifthCardColor] = React.useState("black");

    async function swapColor(diceNum: number) {
        if (diceNum == 1) {
            if (firstCardColor == "black") {
                setFirstCardColor("red");
            } else {
                setFirstCardColor("black");
            }
        } else if (diceNum == 2) {
            if (secondCardColor == "black") {
                setSecondCardColor("red");
            } else {
                setSecondCardColor("black");
            }
        } else if (diceNum == 3) {
            if (thirdCardColor == "black") {
                setThirdCardColor("red");
            } else {
                setThirdCardColor("black");
            }
        } else if (diceNum == 4) {
            if (fourthCardColor == "black") {
                setFourthCardColor("red");
            } else {
                setFourthCardColor("black");
            }
        } else if (diceNum == 5) {
            if (fifthCardColor == "black") {
                setFifthCardColor("red");
            } else {
                setFifthCardColor("black");
            }
        }
    }

    function delay(durationMS: number) {
        return new Promise(resolve => setTimeout(resolve, durationMS))
    }

    function updateHandRank(values: string[]) {
        var numericValues = getSortedNumericCardValues(values)

        if (checkForFiveOfAKind(numericValues)) {
            setHandRank(FIVE_OF_A_KIND)
        } else if (checkForFourOfAKind(numericValues)) {
            setHandRank(FOUR_OF_A_KIND)
        } else if (checkForFullHouse(numericValues)) {
            setHandRank(FULL_HOUSE)
        } else if (checkForStraight(numericValues)) {
            setHandRank(STRAIGHT)
        } else if (checkForThreeOfAKind(numericValues)) {
            setHandRank(THREE_OF_A_KIND)
        } else if (checkForTwoPair(numericValues)) {
            setHandRank(TWO_PAIR)
        } else if (checkForOnePair(numericValues)) {
            setHandRank(ONE_PAIR)
        } else {
            setHandRank(HIGH_CARD)
        }
        // var currHandRank = HIGH_CARD
        // for (let i = 0; i < numericValues.length; i++) {
        //     const iValue = numericValues[i];

        //     for (let j = i + 1; j < numericValues.length; j++) {
        //         const jValue = numericValues[j]
        //         console.log("Comparing [" + i + "]:" + iValue + " and [" + j +"]:" + jValue)

        //         if (iValue == jValue) {
        //             if (handRank == HIGH_CARD) {
        //                 console.log("High card > One Pair")
        //                 currHandRank = ONE_PAIR
        //             } else if (handRank == ONE_PAIR) {
        //                 console.log("One pair > Set")
        //                 currHandRank = THREE_OF_A_KIND
        //             } else if (handRank == THREE_OF_A_KIND) {
        //                 console.log("Set > Quads")
        //                 currHandRank = FOUR_OF_A_KIND
        //             } else if (handRank == FOUR_OF_A_KIND) {
        //                 console.log("Quads > FOAK")
        //                 currHandRank = FIVE_OF_A_KIND
        //             }
        //         }
        //     }
        // }
        // setHandRank(currHandRank)
    }

    function checkForFiveOfAKind(values: number[]) {
        const firstCard = values[0]
        const secondCard = values[1]
        const thirdCard = values[2]
        const fourthCard = values[3]
        const fifthCard = values[4]

        if (firstCard == secondCard &&
            firstCard == thirdCard &&
            firstCard == fourthCard &&
            firstCard == fifthCard
        ) {
            return true
        }

        return false;
    }

    function checkForFourOfAKind(values: number[]) {
        const firstCard = values[0]
        const secondCard = values[1]
        const thirdCard = values[2]
        const fourthCard = values[3]
        const fifthCard = values[4]

        if (firstCard == secondCard) {
            if (firstCard == thirdCard && firstCard == fourthCard) {
                return true
            }
        } else if (secondCard == thirdCard && secondCard == fourthCard && secondCard == fifthCard) {
            return true
        }
        return false
    }

    function checkForFullHouse(values: number[]) {
        const firstCard = values[0]
        const secondCard = values[1]
        const thirdCard = values[2]
        const fourthCard = values[3]
        const fifthCard = values[4]

        if (firstCard == secondCard && thirdCard == fourthCard && thirdCard == fifthCard) {
            return true
        } else if (firstCard == secondCard && firstCard == thirdCard && fourthCard == fifthCard) {
            return true
        }

        return false
    }

    function checkForStraight(values: number[]) {
        const firstCard = values[0]
        const secondCard = values[1]
        const thirdCard = values[2]
        const fourthCard = values[3]
        const fifthCard = values[4]

        if (firstCard == nineVal && secondCard == tenVal && thirdCard == jackVal && fourthCard == queenVal && fifthCard == kingVal) {
            return true
        } else if (firstCard == tenVal && secondCard == jackVal && thirdCard == queenVal && fourthCard == kingVal && fifthCard == aceVal) {
            return true
        }

        return false
    }

    function checkForThreeOfAKind(values: number[]) {
        const firstCard = values[0]
        const secondCard = values[1]
        const thirdCard = values[2]
        const fourthCard = values[3]
        const fifthCard = values[4]

        // Logic 

        if (firstCard == secondCard && firstCard == thirdCard && firstCard != fourthCard && firstCard != fifthCard) {
            return true
        } else if (secondCard == thirdCard && secondCard == fourthCard && secondCard != fifthCard) {
            return true
        } else if (thirdCard == fourthCard && thirdCard == fifthCard) {
            return true
        }

        return false
    }

    function checkForTwoPair(values: number[]) {
        const firstCard = values[0]
        const secondCard = values[1]
        const thirdCard = values[2]
        const fourthCard = values[3]
        const fifthCard = values[4]

        if (firstCard == secondCard && thirdCard == fourthCard) {
            return true
        } else if (secondCard == thirdCard && fourthCard == fifthCard) {
            return true
        }
        return false
    }

    function checkForOnePair(values: number[]) {
        const firstCard = values[0]
        const secondCard = values[1]
        const thirdCard = values[2]
        const fourthCard = values[3]
        const fifthCard = values[4]

        if (firstCard == secondCard && firstCard != thirdCard && firstCard != fourthCard && firstCard != fifthCard) {
            return true
        } else if (secondCard == thirdCard && secondCard != fourthCard && secondCard != fifthCard) {
            return true
        } else if (thirdCard == fourthCard && thirdCard != fifthCard) {
            return true
        } else if (fourthCard == fifthCard) {
            return true
        }

        return false
    }

    function getSortedNumericCardValues(values: string[]) {
        let result: number[] = []
        for (let index = 0; index < values.length; index++) {
            const element = values[index];
            let val = cardsToValsMap[element]
            result.push(val)
        }

        result.sort((a,b) => a - b)

        return result
    }

    async function roll() {
        setIsRolling(true);

        firstCardColor == "black" ? setFirstCard(pipArray[randomNum() - 1]) : null;
        secondCardColor == "black" ? setSecondCard(pipArray[randomNum() - 1]) : null;
        thirdCardColor == "black" ? setThirdCard(pipArray[randomNum() - 1]) : null;
        fourthCardColor == "black" ? setFourthCard(pipArray[randomNum() - 1]) : null;
        fifthCardColor == "black" ? setFifthCard(pipArray[randomNum() - 1]) : null;

        await delay(100)

        firstCardColor == "black" ? setFirstCard(pipArray[randomNum() - 1]) : null;
        secondCardColor == "black" ? setSecondCard(pipArray[randomNum() - 1]) : null;
        thirdCardColor == "black" ? setThirdCard(pipArray[randomNum() - 1]) : null;
        fourthCardColor == "black" ? setFourthCard(pipArray[randomNum() - 1]) : null;
        fifthCardColor == "black" ? setFifthCard(pipArray[randomNum() - 1]) : null;

        await delay(100)

        firstCardColor == "black" ? setFirstCard(pipArray[randomNum() - 1]) : null;
        secondCardColor == "black" ? setSecondCard(pipArray[randomNum() - 1]) : null;
        thirdCardColor == "black" ? setThirdCard(pipArray[randomNum() - 1]) : null;
        fourthCardColor == "black" ? setFourthCard(pipArray[randomNum() - 1]) : null;
        fifthCardColor == "black" ? setFifthCard(pipArray[randomNum() - 1]) : null;

        await delay(100)

        firstCardColor == "black" ? setFirstCard(pipArray[randomNum() - 1]) : null;
        secondCardColor == "black" ? setSecondCard(pipArray[randomNum() - 1]) : null;
        thirdCardColor == "black" ? setThirdCard(pipArray[randomNum() - 1]) : null;
        fourthCardColor == "black" ? setFourthCard(pipArray[randomNum() - 1]) : null;
        fifthCardColor == "black" ? setFifthCard(pipArray[randomNum() - 1]) : null;

        await delay(100)

        firstCardColor == "black" ? setFirstCard(pipArray[randomNum() - 1]) : null;
        secondCardColor == "black" ? setSecondCard(pipArray[randomNum() - 1]) : null;
        thirdCardColor == "black" ? setThirdCard(pipArray[randomNum() - 1]) : null;
        fourthCardColor == "black" ? setFourthCard(pipArray[randomNum() - 1]) : null;
        fifthCardColor == "black" ? setFifthCard(pipArray[randomNum() - 1]) : null;

        setIsRolling(false);
    }

    useEffect(() => {
        if (!isRolling) {
            console.log("Stopped rolling - updating hand")
            let values = [firstCard, secondCard, thirdCard, fourthCard, fifthCard]
            updateHandRank(values)
        }
    }, [isRolling])

    useEffect(() => {
        setHandLabel(handRank)
    }, [handRank])

    return (
        <View style={styles.main}>
        
                  <View style={styles.topBar}>
                    <View style={styles.subtractButton}>
                        <Text>Current Hand Ranking: {handLabel}</Text>
                    </View>
                  </View>

      <ShakeSensor onShake={roll} threshold={4} cooldown={1000} />

            <View style={styles.diceSection}>
                <View style={styles.diceRow}>
                    <View style={styles.diceContainer}>
                        <Pressable onPressIn={() => swapColor(1)}>
                            <Text style={{ fontSize: 75, color: firstCardColor }}>{firstCard}</Text>
                        </Pressable>
                    </View>
                    <View style={styles.diceContainer}>
                        <Pressable onPressIn={() => swapColor(2)}>
                            <Text style={{ fontSize: 75, color: secondCardColor }}>{secondCard}</Text>
                        </Pressable>
                    </View>
                    <View style={styles.diceContainer}>
                        <Pressable onPressIn={() => swapColor(3)}>
                            <Text style={{ fontSize: 75, color: thirdCardColor }}>{thirdCard}</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.diceRow}>
                    <View style={styles.diceContainer}>
                        <Pressable onPressIn={() => swapColor(4)}>
                            <Text style={{ fontSize: 75, color: fourthCardColor }}>{fourthCard}</Text>
                        </Pressable>
                    </View>
                    <View style={styles.diceContainer}>
                        <Pressable onPressIn={() => swapColor(5)}>
                            <Text style={{ fontSize: 75, color: fifthCardColor }}>{fifthCard}</Text>
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
        height: "100%"
    },
    diceContainer: {
        borderWidth: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10,
        paddingLeft: 10,
        marginRight: 10,
        marginLeft: 10,
        height: "50%",
        width: "10%"
    },
    diceRow: {
        flex: 1,
        flexWrap: 'wrap',
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
        flexWrap: 'wrap',
        flexDirection: "row",
        justifyContent: "center",
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
