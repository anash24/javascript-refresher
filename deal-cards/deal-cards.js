

const card1 = { suit: 'Hearts', rank: 'Ace' };
const card2 = { suit: 'Diamonds', rank: '7' };
const card3 = { suit: 'Spades', rank: 'King' };

let deck = [card1, card2, card3]


for(let i = 0; i < deck.length; i++){
    aboutCards(deck[i])
}    

function aboutCards(card) {
    console.log(card.rank + ' of ' + card.suit)
}

