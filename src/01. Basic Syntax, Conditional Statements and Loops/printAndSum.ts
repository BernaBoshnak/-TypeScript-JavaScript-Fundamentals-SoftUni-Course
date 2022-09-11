function printAndSum(start: number, end: number) {
    let sum = 0;
    let displayNumbers = "";

    for (let i = start; i <= end; i++) {
        displayNumbers += `${i} `;
        sum += i;
    }
    console.log(displayNumbers);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);
