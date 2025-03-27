import React from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const liarsDiceRules =
  'Liar\'s dice is a class of dice game for two or more players in which deception is a significant gameplay element. \
Each player starts with six die. At the start of a round, all players roll their die and look at the result while keeping their die concealed from the other players. \n\n\
The first player begins bidding, announcing any face value and the minimum number of dice that the player believes are showing that value, \
under all of the cups in the game. Ones are wild, counting as the face of the current bid. \n\n\
Turns rotate among the players in a clockwise order. Each player has two choices during their turn: to make a higher bid, or challenge the previous bid – typically with \
a call of "liar". Raising the bid means either increasing the quantity, or the face value, or both. the player may bid a higher quantity of the same face, or any particular \
quantity of a higher face (allowing a player to "reset" the quantity) \n\n\
If the current player challenges the previous bid, all dice are revealed. If the bid is valid (at least as many of the face value and any wilds showing as \
were bid), the bidder wins. Otherwise, the challenger wins. The player who loses a round loses one of their dice. The last player to still retain a die \
(or dice) is the winner. The winner of the last round starts the bidding on the next round.';

export default function Rules() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.baseText}>
          <Text style={styles.titleText}>
            {"Liar's Dice"}
            {"\n"}
          </Text>
          <Text>{liarsDiceRules}</Text>
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  baseText: {
    fontFamily: "Cochin",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
