
let maxHeads = 0

for (let i = 0; i < 100; i++) {
    coinToss()
}

console.log('The max heads was ' + maxHeads)

function coinToss() {
    let headCount = 0
    for (let i = 1; i <= 100; i++) {
        if (Math.random() > 0.5) {
            headCount++
        }
    }
    console.log('you got ' + headCount + ' heads.')

    if (headCount > maxHeads) {
        maxHeads = headCount
    }

}



