peeps = ['Angela', 'Ben', 'Jenny', 'Michael', 'Chloe']


function whosPaying(names) {

    /******Don't change the code above*******/

    //Write your code here.
    

    randomPerson = Math.floor(Math.random()*names.length)

    return peeps[randomPerson] + ' is going to buy lunch today!'



    /******Don't change the code below*******/
}

console.log(whosPaying(peeps))