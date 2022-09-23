function perfectNumber(sum: number) {
  let temp = 0;
  for (let i = 1; i <= sum / 2; i++) {
    if (!(sum % i)) {
      temp += i;
    }
  }

  if (temp === sum && temp !== 0) {
    console.log("We have a perfect number!");
  } else {
    console.log(`It's not so perfect.`);
  }
}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);
