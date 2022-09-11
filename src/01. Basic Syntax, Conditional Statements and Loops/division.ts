function division(input: number, phrase: string) {
    if (input % 10 === 0) {
        console.log(phrase + 10);
    } else if (input % 7 === 0) {
        console.log(phrase + 7);
    } else if (input % 6 === 0) {
        console.log(phrase + 6);
    } else if (input % 3 === 0) {
        console.log(phrase + 3);
    } else if (input % 2 === 0) {
        console.log(phrase + 2);
    } else {
        console.log('Not divisible');
    }
}

const resultPhrase = 'The number is divisible by ';

division(30, resultPhrase);
division(15, resultPhrase);
division(12, resultPhrase);
division(1643, resultPhrase);
