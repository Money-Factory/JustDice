import { Text, View, StyleSheet, Button, Pressable } from "react-native";
import React from "react";
import ShakeSensor from "@/components/ShakeSensor";
import { delay, randomNum } from "@/utils/utils";

enum CardValue {
  ACE = 14,
  KING = 13,
  QUEEN = 12,
  JACK = 11,
  TEN = 10,
  NINE = 9,
}
const cardFaces: { [key: number]: string } = {
  14: "\u0041", // ACE
  13: "\u004B", // KING
  12: "\u0051", // QUEEN
  11: "\u004A", // JACK
  10: "\u0031\u0030", // TEN
  9: "\u0039", // NINE
};

const FIVE_OF_A_KIND = "Five of a Kind";
const FOUR_OF_A_KIND = "Four of a Kind";
const FULL_HOUSE = "Full House";
const STRAIGHT = "Straight";
const THREE_OF_A_KIND = "Three of a Kind";
const TWO_PAIR = "Two Pair";
const ONE_PAIR = "One Pair";
const HIGH_CARD = "High Card (you suck lol)";

const NUM_CARDS = 5;

export default function PokerDice() {
  const [cards, setCards] = React.useState(
    new Array(NUM_CARDS).fill(CardValue.ACE)
  );
  const [selectedCards, setSelectedCards] = React.useState(
    new Array(NUM_CARDS).fill(false)
  );
  const [isRolling, setIsRolling] = React.useState(false);
  const [handLabel, setHandLabel] = React.useState("NONE");

  const evaluateHand = (values: number[]) => {
    const sortedCards = [...values].sort((a, b) => a - b);

    if (checkForFiveOfAKind(sortedCards)) {
      return FIVE_OF_A_KIND;
    } else if (checkForFourOfAKind(sortedCards)) {
      return FOUR_OF_A_KIND;
    } else if (checkForFullHouse(sortedCards)) {
      return FULL_HOUSE;
    } else if (checkForStraight(sortedCards)) {
      return STRAIGHT;
    } else if (checkForThreeOfAKind(sortedCards)) {
      return THREE_OF_A_KIND;
    } else if (checkForTwoPair(sortedCards)) {
      return TWO_PAIR;
    } else if (checkForOnePair(sortedCards)) {
      return ONE_PAIR;
    } else {
      return HIGH_CARD;
    }
  };

  const checkForFiveOfAKind = (sortedValues: number[]) => {
    return sortedValues[0] === sortedValues[sortedValues.length - 1];
  };

  const checkForFourOfAKind = (sortedValues: number[]) => {
    return (
      sortedValues[0] === sortedValues[sortedValues.length - 2] ||
      sortedValues[1] === sortedValues[sortedValues.length - 1]
    );
  };

  const checkForFullHouse = (sortedValues: number[]) => {
    return (
      (sortedValues[0] === sortedValues[2] &&
        sortedValues[3] === sortedValues[4]) ||
      (sortedValues[0] === sortedValues[1] &&
        sortedValues[2] === sortedValues[4])
    );
  };

  const checkForStraight = (sortedValues: number[]) => {
    for (let i = 1; i < sortedValues.length; i++) {
      if (sortedValues[i] - sortedValues[i - 1] !== 1) {
        return false;
      }
    }

    return true;
  };

  const checkForThreeOfAKind = (sortedValues: number[]) => {
    return (
      sortedValues[0] === sortedValues[2] ||
      sortedValues[1] === sortedValues[3] ||
      sortedValues[2] === sortedValues[4]
    );
  };

  const checkForTwoPair = (sortedValues: number[]) => {
    return (
      (sortedValues[0] === sortedValues[1] &&
        sortedValues[2] === sortedValues[3]) ||
      (sortedValues[1] === sortedValues[2] &&
        sortedValues[3] === sortedValues[4]) ||
      (sortedValues[0] === sortedValues[1] &&
        sortedValues[3] === sortedValues[4])
    );
  };

  const checkForOnePair = (sortedValues: number[]) => {
    for (let i = 1; i < sortedValues.length; i++) {
      if (sortedValues[i] === sortedValues[i - 1]) {
        return true;
      }
    }

    return false;
  };

  const roll = async () => {
    setIsRolling(true);
    let updatedCards = [...cards];

    const TIMES_TO_ROLL = 5;
    for (let i = 0; i < TIMES_TO_ROLL; i++) {
      updatedCards = updatedCards.map((value, index) =>
        selectedCards[index] ? value : randomNum(CardValue.NINE, CardValue.ACE)
      );
      setCards(updatedCards);
      await delay(100);
    }

    setIsRolling(false);

    setHandLabel(evaluateHand(updatedCards));
  };

  const onSelect = (index: number) =>
    setSelectedCards(
      selectedCards.map((value, i) => (i === index ? !value : value))
    );

  return (
    <View style={styles.main}>
      <View style={styles.topBar}>
        <View>
          <Text>Current Hand Ranking: {handLabel}</Text>
        </View>
      </View>

      <ShakeSensor onShake={roll} threshold={4} cooldown={1000} />

      <View style={styles.cardSection}>
        {Array.from({ length: NUM_CARDS }).map((_value, index) => {
          return (
            <Pressable
              key={index}
              onPressIn={() => onSelect(index)}
              style={{
                ...styles.cardContainer,
                borderColor: selectedCards[index] ? "red" : "black",
              }}
            >
              <Text
                style={{
                  ...styles.cardFace,
                  color: selectedCards[index] ? "red" : "black",
                }}
              >
                {cardFaces[cards[index]]}
              </Text>
            </Pressable>
          );
        })}
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
    height: "100%",
  },
  cardContainer: {
    borderWidth: 5,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    height: "40%",
    width: "25%",
  },
  cardSection: {
    height: "80%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
  },
  cardFace: {
    fontSize: 75,
  },
  topBar: {
    height: "10%",
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 50,
    backgroundColor: "white",
  },
  bottomBar: {
    height: "10%",
    justifyContent: "center",
    backgroundColor: "white",
    flex: 1,
  },
  rollButton: {
    justifyContent: "center",
    flex: 1,
    paddingLeft: "35%",
    paddingRight: "35%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
  },
});
