type Product = {
  name: string;
  price: number;
};

function catalogue(array: Array<string>) {
  const products: Product[] = [];
  while (array.length > 0) {
    const line = array?.shift()?.split(" : ");
    if (line) {
      const catalog: Product = {
        name: line[0],
        price: Number(line[1]),
      };
      products.push(catalog);
    }
  }

  products.sort((firstEl, secondEl) =>
    firstEl.name.localeCompare(secondEl.name)
  );

  let currentLetter = "";
  for (const product of products) {
    if (product.name.charAt(0).toUpperCase() === currentLetter) {
      console.log(` ${product.name}: ${product.price}`);
    } else {
      currentLetter = product.name.charAt(0).toUpperCase();
      console.log(currentLetter);
      console.log(` ${product.name}: ${product.price}`);
    }
  }
}

catalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);

export {};
