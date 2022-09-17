function bitcoinMining(data: number[]) {
  const goldValue = 67.51;
  const bitcoinValue = 11949.16;

  let bitcoinCount = 0;
  let firstDay;
  let totalMoney = 0;

  for (let day = 1; day <= data.length; day++) {
    let goldMined = data[day - 1];

    if (!(day % 3)) {
      goldMined -= goldMined * (30 / 100);
      totalMoney += goldMined * goldValue;
    } else {
      totalMoney += goldMined * goldValue;
    }

    if (totalMoney >= bitcoinValue) {
      if (firstDay === 0) {
        firstDay = day;
      }
      bitcoinCount += parseInt((totalMoney / bitcoinValue).toString(), 10);
      totalMoney %= bitcoinValue;
    }
  }

  console.log(`Bought bitcoins: ${bitcoinCount}`);

  if (firstDay) {
    console.log(`Day of the first purchased bitcoin: ${firstDay}`);
  }

  console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);
