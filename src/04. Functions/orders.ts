type Product = "coffee" | "water" | "coke" | "snacks";

enum ProductsPrices {
  coffee = 1.5,
  water = 1,
  coke = 1.4,
  snacks = 2,
}

const totalCoffeePrice = (count: number) => count * ProductsPrices.coffee;
const totalWaterPrice = (count: number) => count * ProductsPrices.water;
const totalCokePrice = (count: number) => count * ProductsPrices.coke;
const totalSnacksPrice = (count: number) => count * ProductsPrices.snacks;

function orders(product: Product, count: number) {
  switch (product) {
    case "coffee":
      return totalCoffeePrice(count).toFixed(2);
    case "water":
      return totalWaterPrice(count).toFixed(2);
    case "coke":
      return totalCokePrice(count).toFixed(2);
    case "snacks":
      return totalSnacksPrice(count).toFixed(2);
  }
}

console.log(orders("water", 5));
console.log(orders("coffee", 2));
