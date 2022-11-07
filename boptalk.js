// let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']

// let text = 'this is so weird'

// for(let i = 0; i < consonants.length; i++){
//     text = text.replaceAll( consonants [i], consonants [i] + 'op');
// }

// console.log(text)

let vowels = 'aeiou'
let mySent = 'Thank God'
let boptalk = ' '


for (let i = 0; i < mySent.length; i++){
    let letter = mySent[i]
    if( vowels.includes(letter)) {
        boptalk = boptalk + letter + ' '
    } else {
        boptalk = boptalk + letter + 'op '
    }
}

console.log(boptalk) 