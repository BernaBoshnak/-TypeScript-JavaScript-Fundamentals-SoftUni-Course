interface CatData {
  name: string;
  age: number;
}

function cats(input: string[]) {
  class Cat implements CatData {
    name: CatData["name"];
    age: CatData["age"];

    constructor(name: CatData["name"], age: CatData["age"]) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }
  const cats: Array<Cat> = [];

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i].split(" ");
    const [name, age] = currentElement;
    cats.push(new Cat(name, Number(age)));
  }

  for (const cat of cats) {
    cat.meow();
  }
}

cats(["Mellow 2", "Tom 5"]);
cats(["Candy 1", "Poppy 3", "Nyx 2"]);

export {};
