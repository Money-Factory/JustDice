import React from "react";
import { Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
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
(or dice) is the winner. The winner of the last round starts the bidding on the next round.\n';

const simpleDice =
  "Simple dice is just a simple mode where you can roll dice and save some to the side between roles.\n\n\
In this mode you can make your own games or play something more well known like Yacht Dice!\n";

const threes =
  "Threes is a dice game where players compete for the lowest score while rolling five dice. Dice are added together based on their face values (1-6), except for 3, which is worth 0. If a player rolls all sixes (6-6-6-6-6), they “shoot the moon”\
  and immediately win the game.\n\nEach player’s turn works as follows:\n1. Roll all five dice\n2. Set aside between one and five dice, which become locked in and cannot be rolled again\n3. Roll all remaining dice\n4. Repeat #2-3 until there are no remaining dice to be rolled\n";

const poker =
  "Poker Dice combines the rules of both Yacht and Poker.\n\n\
Each player’s turn works as follows:\n1. Roll all five dice\n2. Set aside between one and five dice, which become locked in and cannot be rolled again\n3. Roll all remaining dice\n4. Repeat #2-3 until there are no remaining dice to be rolled\
\n\nAt the end the hand ranks are as follows: Five of a Kind, Four of a Kind, Full House, Straight, Three of a Kind, Two Pair, One Pair, High Card";
const zanzibar =
  "Zanzibar is dice game is for 2 or more players that uses an interesting scoring mechanism.\n\nThe first player may roll the dice up to three times in an attempt to get as high a score as possible.\
 They may stop rolling after the first or second roll if they wish. The other players, in turn, then try to roll a higher score in the same number or fewer rolls than the first player. The player with the lowest score looses the round.\
 The winner of the previous round rolls first in the next round. Once a player looses 3 rounds they are out.\n\nFor the purposes of scoring you add your three dice with the following values: 1 = 100 pts, 2 = 2 pts, 3 = 3 pts, 4 = 4 pts, 5 = 5 pts, 6 = 60 pts\
 There are also a few special ranking cases that rank in the following order: (4,5,6), (1,1,1), (2,2,2), (3,3,3), (4,4,4), (5,5,5), (6,6,6), (1,2,3)";

export default function Rules() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.baseText}>
            <Text style={styles.titleText}>
              {"Simple Dice"}
              {"\n"}
            </Text>
            <Text>
              {simpleDice}
              {"\n"}
            </Text>
          </Text>

          <Text style={styles.baseText}>
            <Text style={styles.titleText}>
              {"Liar's Dice"}
              {"\n"}
            </Text>
            <Text>
              {liarsDiceRules}
              {"\n"}
            </Text>
          </Text>

          <Text style={styles.baseText}>
            <Text style={styles.titleText}>
              {"Threes"}
              {"\n"}
            </Text>
            <Text>
              {threes}
              {"\n"}
            </Text>
          </Text>

          <Text style={styles.baseText}>
            <Text style={styles.titleText}>
              {"Poker Dice"}
              {"\n"}
            </Text>
            <Text>
              {poker}
              {"\n"}{" "}
            </Text>
          </Text>

          <Text style={styles.baseText}>
            <Text style={styles.titleText}>
              {"Zanzibar"}
              {"\n"}
            </Text>
            <Text>{zanzibar}</Text>
          </Text>
        </ScrollView>
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
