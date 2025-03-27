import { Text, View, StyleSheet, Button, Pressable } from "react-native";
import React from "react";
import ShakeSensor from "../ShakeSensor";

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

let pipArray = [ACE, KING, QUEEN, JACK, TEN, NINE];
const randomNum = (min = 1, max = 6) => Math.floor(Math.random() * (max - min + 1)) + min;

const STRAIGHT = [];
const FOUR_OF_A_KIND = [];
const FULL_HOUSE = []
const THREE_OF_A_KIND = [];
const TWO_PAIR = [];
const ONE_PAIR = [];

export default function PokerDice() {

    const [firstCard, setFirstCard] = React.useState(ACE);
    const [secondCard, setSecondCard] = React.useState(ACE);
    const [thirdCard, setThirdCard] = React.useState(ACE);
    const [fourthCard, setFourthCard] = React.useState(ACE);
    const [fifthCard, setFifthCard] = React.useState(ACE);

    const [isRolling, setIsRolling] = React.useState(false);

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

    return (
        <View style={styles.main}>
        
            <View style={styles.topBar} />

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
    )
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