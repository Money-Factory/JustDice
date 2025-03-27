import type { PropsWithChildren } from "react";
import { Text, StyleSheet } from "react-native";

export enum DiceValue {
  ONE = "\u2680",
  TWO = "\u2681",
  THREE = "\u2682",
  FOUR = "\u2683",
  FIVE = "\u2684",
  SIX = "\u2685",
}

type Props = PropsWithChildren<{
  value: DiceValue;
}>;

export default function Dice({ value }: Props) {
  return <Text style={styles.diceItem}>{value}</Text>;
}

const styles = StyleSheet.create({
  diceItem: {
    width: "45%",
    margin: "2.5%",
    textAlign: "center",
    fontSize: 175,
  },
});
