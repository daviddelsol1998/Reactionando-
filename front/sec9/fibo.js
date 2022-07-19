function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    
    // first two fibonacci numbers
    fibonacci = [0,1]
    

    if (n  === 1) {
        return fibonacci.slice(0,1)
    } else if (n === 2) {
        return fibonacci.slice(0,2)
    } else {
        for (var i = 0; i < n - 2; i++)  {
            let position1 = fibonacci.length - 1
            let position2 = fibonacci.length - 2
            fibonacci.push(fibonacci[position1]  + fibonacci[position2])
        }
        return fibonacci
    }

     
    
    
    
    
    
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}


console.log(fibonacciGenerator(3))