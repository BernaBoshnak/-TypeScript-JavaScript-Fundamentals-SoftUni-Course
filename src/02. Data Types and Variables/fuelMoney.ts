function fuelMoney(distance: number, passengers: number, price: number) {
  let needenFuel = (distance / 100) * 7;
  needenFuel += passengers * 0.1;
  const total = price * needenFuel;

  console.log(`Needed money for that trip is ${total} lv`);
}

fuelMoney(260, 9, 2.49);
fuelMoney(90, 14, 2.88);

export {};
