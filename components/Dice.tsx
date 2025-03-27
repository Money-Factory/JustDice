import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

export enum DiceValue {
  ONE = "\u2680",
  TWO = "\u2681",
  THREE = "\u2682",
  FOUR = "\u2683",
  FIVE = "\u2684",
  SIX = "\u2685",
}

interface DiceProps {
  value: DiceValue;
  onSelect?: () => void;
}

export default function Dice({ value, onSelect }: DiceProps) {
  const [selected, setSelected] = React.useState(false);
  return (
    <Pressable
      style={styles.wrapper}
      onPressIn={() => {
        if (onSelect) {
          setSelected(!selected);
          onSelect();
        }
      }}
    >
      <Text style={{ ...styles.dice, color: selected ? "red" : "black" }}>
        {value}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  dice: {
    fontSize: 125,
    textAlign: "center",
  },
  wrapper: {
    width: "45%",
  },
});
