numbers = []

for (var i = 0; i <= 100; i++) {
    if (i % 3  === 0)  {
        if (i % 5 === 0) {
            console.log('fizzbuzz')
            numbers.push('fizzbuzz')
        } else {
            console.log('fizz')
            numbers.push('fizz')
        }
    } else if (i % 5 === 0) {
        console.log('buzz')
        numbers.push('buzz')
    } else {
        console.log(i)
        numbers.push(i)
    }
    
}

