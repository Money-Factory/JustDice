import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function Yacht() {
    return (
        <View>
        </View>
    );
};

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