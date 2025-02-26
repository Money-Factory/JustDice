import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ShakeSensor from "@/ShakeSensor";

let one = "\u2680";
let two = "\u2681";
let three = "\u2682";
let four = "\u2683";
let five = "\u2684";
let six = "\u2685";
let pipArray = [one, two, three, four, five, six];
let mapToInt = new Map([
    [one, 100],
    [two, 2],
    [three, 3],
    [four, 4],
    [five, 5],
    [six, 60]
]);

const randomNum = (min = 1, max = 6) => Math.floor(Math.random() * (max - min + 1)) + min;
let rollNumber = 0;
let points: string | number = 0;
let highest: string | number = 0;

export default function Zanzibar() {
    const [firstDice, setFirstDice] = React.useState(one);
    const [secondDice, setSecondDice] = React.useState(two);
    const [thirdDice, setThirdDice] = React.useState(three);

    const [isRolling, setIsRolling] = React.useState(false);

    const [firstDiceColor, setFirstDiceColor] = React.useState("black");
    const [secondDiceColor, setSecondDiceColor] = React.useState("black");
    const [thirdDiceColor, setThirdDiceColor] = React.useState("black");

    return (
        <View style={styles.main}>
            <View style={styles.topBar}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 20, paddingTop: 10 }}>
                    <Text style={{fontSize: 24}}>Roll: {rollNumber}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 20 }}>
                    <Text style={{fontSize: 24}}>Points: {points}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 20 }}>
                    <Text style={{fontSize: 24}}>Highest Roll: {highest}</Text>
                </View>
            </View>

            <ShakeSensor onShake={roll} threshold={4} cooldown={1000} />

            <View style={styles.diceSection}>
                <View style={styles.diceRow}>
                    <Text style={{fontSize: 175, color: firstDiceColor}}>{firstDice}</Text>
                    <Text style={{fontSize: 175, color: secondDiceColor}}>{secondDice}</Text>
                </View>

                <View style={styles.diceRow}>
                    <Text style={{fontSize: 175, color: thirdDiceColor}}>{thirdDice}</Text>
                </View>
            </View>

            <View style={styles.bottomBar}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10 }}>
                    <Button disabled={isRolling || rollNumber == 3} onPress={roll} title="Roll" />
                    <Button disabled={isRolling} onPress={reset} title="Reset" />
                </View>
            </View>

        </View>
    );

    async function reset() {
        rollNumber = 0;
        points = 0;
        highest = 0;
        setFirstDice(one);
        setSecondDice(two);
        setThirdDice(three);
    }

    async function roll() {

        setIsRolling(true);

        setFirstDice(pipArray[randomNum()-1]);
        setSecondDice(pipArray[randomNum()-1]);
        setThirdDice(pipArray[randomNum()-1]);

        await delay(100)

        setFirstDice(pipArray[randomNum()-1]);
        setSecondDice(pipArray[randomNum()-1]);
        setThirdDice(pipArray[randomNum()-1]);

        await delay(100)

        setFirstDice(pipArray[randomNum()-1]);
        setSecondDice(pipArray[randomNum()-1]);
        setThirdDice(pipArray[randomNum()-1]);

        await delay(100)

        setFirstDice(pipArray[randomNum()-1]);
        setSecondDice(pipArray[randomNum()-1]);
        setThirdDice(pipArray[randomNum()-1]);

        await delay(100)

        let fdr = pipArray[randomNum()-1];
        setFirstDice(fdr);
        let sdr = pipArray[randomNum()-1];
        setSecondDice(sdr);
        let tdr = pipArray[randomNum()-1];
        setThirdDice(tdr);

        setIsRolling(false);
        rollNumber++;

        if (fdr === "\u2683" && sdr === "\u2684" && tdr === "\u2685") {
            points = "Zanzibar";
            highest = points;
        } else if (fdr == sdr && sdr == tdr) {
            points = "Higher Combo!";
            if (highest !== "Zanzibar") {
                highest = points;
            }
        } else if (fdr === "\u2680" && sdr === "\u2681" && tdr === "\u2682") {
            points = "Lower Combo!";
            if (highest !== "Zanzibar" && highest !== "Higher Combo!") {
                highest = points;
            }
        } else {
            // @ts-ignore
            points = mapToInt.get(fdr) + mapToInt.get(sdr) + mapToInt.get(tdr);
            // @ts-ignore
            if (highest !== "Zanzibar" && highest !== "Higher Combo!" && highest !== "Lower Combo!" && points > highest) {
                highest = points;
            }
        }

    }

    function delay(durationMS:number) {
        return new Promise(resolve => setTimeout(resolve, durationMS))
    }
};


const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        height: "100%",
        backgroundColor: "white",
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
        paddingTop: 15,
    },
    topBar: {
        height: "10%",
        justifyContent: "center",
        backgroundColor: "white",
        flex: 1
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
