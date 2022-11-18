

// const card1 = { suit: 'Hearts', rank: 'Ace' };
// const card2 = { suit: 'Diamonds', rank: '7' };
// const card3 = { suit: 'Spades', rank: 'King' };

// let deck = [card1, card2, card3]


// for(let i = 0; i < deck.length; i++){
//     aboutCards(deck[i])
// }    

// function aboutCards(card) {
//     console.log(card.rank + ' of ' + card.suit)
// }

let suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs']


let deck = []

for (let i = 0; i < 4; i++) {
    let suit = suits[i]
    for (let i = 1; i <= 13; i++) {
        let rank
        if (i == 1) {
            rank = 'Ace'
        } else if (i == 11) {
            rank = 'Jack'
        } else if (i == 12) {
            rank = 'Queen'
        } else if (i == 13) {
            rank = 'King'
        } else {
            rank = i
        }
        deck.push({ suit: suit, rank: rank })
    }

}

console.log(deck)