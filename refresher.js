// console.log('Hello world!');
let message = 'How are you today?';
// console.log(message);

let greeting = 'Hello';
let name = 'Bob';
//let text3 = greeting + ' ' + name + '!';
// console.log(text3);

let age = 13;
// console.log('You are' + ' ' + age);
let years = 10 + age;
// console.log('In ten years you will be' + ' ' + years);

// Part 2


//if (name == 'Bob') {
//  console.log('I knew it was you, Bob!');
//}



//let iAmWearingABelt = true
//let iAmWearingGlasses = true

// if (iAmWearingABelt == true && iAmWearingGlasses == true) {
//  console.log('Probably not Mr. Gorton');
// } else if (iAmWearingABelt == true && iAmWearingGlasses == false) {
//   console.log('Probably is Mr. Gorton');
// } else {
//   console.log('Probably just some dude');
// }


// Part 3
// for (let i = 0; i < 6; i++) {
//   console.log('comp sci is awesome');
// }

// for (let i = 0; i < 11; i++) {
//   console.log(i);
// } 

// tellMeMyAge(14)

// function tellMeMyAge(hippo){
//   console.log('You are ' + hippo + ' years old.');
// }



// function makePizza(size, type){
//   console.log('One ' + size + ' ' + type + ' pizza coming up!')
// }

// makePizza('small', 'pepperoni')


function pricePizza(size) {
  if (size == 'large') {
    return 17
  } else {
    return 13
  }
}

let x = pricePizza('large')
console.log(x)