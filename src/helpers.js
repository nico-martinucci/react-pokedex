import shuffle from "lodash/shuffle";

/**
 * assignRandomHands: Given an array of objects, shuffle the array,
 * distribute it evenly between two arrays, and return them in an array.
 *
 * @param {Array} deck
 * @returns Array of two arrays representing hands
 */

function assignRandomHands(deck) {
    if (deck.length % 2 !== 0) {
        throw new Error("That's not fair.");
    }

    const shuffledDeck = shuffle(deck);
    const cardsPerHand = Math.floor(deck.length/2);
    const secondHand = shuffledDeck.splice(cardsPerHand, cardsPerHand);

    return [shuffledDeck, secondHand];
}

/**
 * calcWinningHand: Given two hand arrays with Pokemon-stats objects,
 * calculate the hand with the greater sum of experience points. Returns an
 * object detailing whether each hand has won or lost
 * { handOneWin: true/false, handTwoWin: true/false }
 *
 * @param {Array} handOne
 * @param {Array} handTwo
 *
 * @returns Object { handOneWin: true/false, handTwoWin: true/false }
 */

function calcWinningHand(handOne, handTwo) {
    const handOneScore = handOne.reduce(
        (acc, next) => acc + next.base_experience,
        0
    );

    const handTwoScore = handTwo.reduce(
        (acc, next) => acc + next.base_experience,
        0
    );

    return {
        handOneWin: handOneScore > handTwoScore,
        handTwoWin: handTwoScore > handOneScore
    };
}

export { assignRandomHands, calcWinningHand };