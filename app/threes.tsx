import { View, StyleSheet, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Die from "./die";

export default function ThreesGame() {

    const totalDiceCount = 5
    var [diceValues, setDiceValues] = useState([1, 1, 1, 1, 1])
    var [savedDiceIndices, setSavedDiceIndices] = useState<number[]>([])


    function rollDice() {
        var newDiceValues = []
        for (let i = 0; i < totalDiceCount; i++) {
            if (savedDiceIndices.some(index => index == i)) {
                // window.alert("Die at index " + i + " was saved.")
                // If the Die was already set as saved, do not reroll it's value
                newDiceValues[i] = diceValues[i]
            } else {
                //window.alert("Rolling die at index " + i)
                var randomNum = (min = 1, max = 6) => Math.floor(Math.random() * (max - min + 1)) + min;
                newDiceValues[i] = randomNum()
            }
        }

        // window.alert("New Values: [" +
        //     newDiceValues[0] + "," +
        //     newDiceValues[1] + "," +
        //     newDiceValues[2] + "," +
        //     newDiceValues[3] + "," +
        //     newDiceValues[4] + "]"
        // )
        setDiceValues(newDiceValues)
    }


    function handleDiePress(index: number) {
        const wasDieAlreadySaved = savedDiceIndices.some(i => i == index)
        if (wasDieAlreadySaved) {
            // Remove it
            // window.alert("Die " + index + " Unsaved")
            var updatedIndices = removeValue(savedDiceIndices, index)
            setSavedDiceIndices(updatedIndices)
        } else {
            // Add it to our list of indices to not re-roll
            // window.alert("Die " + index + " Saved")
            var updatedIndices = [...savedDiceIndices, index]
            setSavedDiceIndices(updatedIndices)
        }
    }

    const removeValue = (arr: number[], value: number): number[] => {
        return arr.reduce((acc, item) => {
            if (item !== value) {
                acc.push(item);
            }
            return acc;
        }, [] as number[]);
    };

    const isHeld = (index: number): boolean => {
        return savedDiceIndices.some(i => index == i)
    }

    return (
        <View style={styles.main}>
            <View style={styles.diceSection}>
                <View style={styles.diceRow}>
                    {diceValues.map((value, index) => (
                        <div>
                            <TouchableOpacity key={index} onPress={() => handleDiePress(index)}>
                                <Die key={index} currentValue={value} isHeld={isHeld(index)}/>
                            </TouchableOpacity>
                        </div>
                    ))}
                </View>
            </View>
            <View style={styles.bottomBar}>
                <View style={styles.rollButton}>
                    <Button onPress={rollDice} title="Roll Dice" />
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

    }
});