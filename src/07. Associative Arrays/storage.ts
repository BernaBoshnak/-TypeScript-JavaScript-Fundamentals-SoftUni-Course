function storage(array: string[]) {
  const storage = new Map<string, number>();

  for (const line of array) {
    const tokens = line.split(" ");
    const product = tokens[0];
    const quantity = Number(tokens[1]);

    if (!storage.has(product)) {
      storage.set(product, quantity);
    } else {
      let currentQuantity = storage.get(product);
      if (currentQuantity !== undefined) {
        const newQuantity = (currentQuantity += quantity);
        storage.set(product, newQuantity);
      }
    }
  }
  for (const [product, quantity] of storage) {
    console.log(`${product} -> ${quantity}`);
  }
}

storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);

export {};
