let remainingBottles = 99

function printLyrics() {
    while (remainingBottles  >= 2)  {
        console.log(`${remainingBottles} bottles of beer on the wall, ${remainingBottles} bottles of beer.  Take one down and pass it around, ${remainingBottles} bottles of beer on the wall.`)
        remainingBottles--
    }

    console.log('1 bottle of beer on the wall, 1 bottle of beer.Take one down and pass it around, no more bottles of beer on the wall.')
    
    console.log('No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.')

}


printLyrics()
