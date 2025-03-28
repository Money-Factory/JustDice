import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

const faces = ["\u2680", "\u2681", "\u2682", "\u2683", "\u2684", "\u2685"];

interface DiceProps {
  /** The value of the die, from 1 to 6 */
  value: number;
  /** Whether the die is able to be selected */
  disabled?: boolean;
  /** Whether the die is selected */
  selected?: boolean;
  /** Callback when the die is selected */
  onSelect?: () => void;
}

export default function Dice({
  value,
  disabled,
  selected,
  onSelect,
}: DiceProps) {
  return (
    <Pressable
      style={styles.wrapper}
      disabled={disabled}
      onPressIn={() => onSelect && onSelect()}
    >
      <Text style={{ ...styles.dice, color: selected ? "red" : "black" }}>
        {faces[value - 1]}
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
