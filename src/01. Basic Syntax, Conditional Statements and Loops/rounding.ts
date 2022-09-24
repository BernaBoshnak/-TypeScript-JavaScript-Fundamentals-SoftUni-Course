function rounding(a: number, rounder: number) {
  if (rounder > 15) {
    rounder = 15;
  }
  console.log(parseFloat(a.toFixed(rounder)));
}

rounding(3.141592653589793, 2);
rounding(10.5, 3);

export {};
