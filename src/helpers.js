import shuffle from "lodash/shuffle";

function assignRandomHands(deck) {
    const shuffledDeck = shuffle(deck);
    const secondHand = shuffledDeck.splice(4, 4);

    return [shuffledDeck, secondHand];
}


export { assignRandomHands };