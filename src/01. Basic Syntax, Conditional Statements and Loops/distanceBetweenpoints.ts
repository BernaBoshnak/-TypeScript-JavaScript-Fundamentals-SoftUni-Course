function distanceBetweenPoints(x1: number, y1: number, x2: number, y2: number) {
  const a = Math.abs(x1 - x2);
  const b = Math.abs(y1 - y2);

  const distance = Math.sqrt(a * a + b * b);
  return distance;
}

console.log(distanceBetweenPoints(2, 4, 5, 0));
console.log(distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985));
