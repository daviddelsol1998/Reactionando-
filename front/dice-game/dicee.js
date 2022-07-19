// load dice  faces

let diceFaces = ['./images/dice1.png','./images/dice2.png','./images/dice3.png','./images/dice4.png','./images/dice5.png','./images/dice6.png']

//  get 2 random dice faces
let dice1 = diceFaces[Math.floor(Math.random() * diceFaces.length)]
let dice2 = diceFaces[Math.floor(Math.random() * diceFaces.length)]


// assign them in the dom
document.querySelector('.img1').src = dice1
document.querySelector('.img2').src = dice2

// determine winner
console.log('1:'  +  diceFaces.indexOf(dice1) +  ' 2:' + diceFaces.indexOf(dice2))

if (diceFaces.indexOf(dice1) >  diceFaces.indexOf(dice2)) {
    document.querySelector('.winner').innerHTML = "<h2>Player 1 Wins!</h2>"
} else if (diceFaces.indexOf(dice1) < diceFaces.indexOf(dice2)) {
    document.querySelector('.winner').innerHTML = "<h2>Player 2 Wins!</h2>"
} else {
    document.querySelector('.winner').innerHTML = "<h2>it's tied... refresh again.</h2>"
}

