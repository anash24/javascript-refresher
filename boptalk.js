let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']
let vowel = ['a', 'e', 'i', 'o', 'u ','y']


let text = 'this is so weird'

text = text.replaceAll( consonants, consonants + 'op');


text = text.replaceAll( 't', 't' + 'op');

console.log(text)