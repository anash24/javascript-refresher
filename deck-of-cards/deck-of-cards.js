function WriteCards(suit) {
    let rank
    for (let i = 1; i <= 13; i++) {
        if (i == 1) {
            rank = 'Ace';
        } else if(i == 11) {
            rank = 'Jack';
        } else if (i == 12) {
            rank = 'Queen';
        }else if (i == 13) {
            rank = 'King';
        }else{
            rank = i
        }
          console.log(rank+" "+suit) 
    } 
}

WriteCards("of Hearts")
WriteCards("of Diamonds")
WriteCards("of Spades")
WriteCards("of Clubs")

