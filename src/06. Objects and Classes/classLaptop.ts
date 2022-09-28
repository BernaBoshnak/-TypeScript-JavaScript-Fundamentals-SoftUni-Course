interface Laptop {
  info: {
    producer: string;
    age: number;
    brand: string;
  };
  quality: number;
}

class Laptop implements Laptop {
  info: Laptop["info"];
  quality = 0;
  isOn = false;

  constructor(info: Laptop["info"], quality: Laptop["quality"]) {
    this.info = {
      producer: info.producer,
      age: info.age,
      brand: info.brand,
    };
    this.quality = quality;
  }

  turnOn() {
    this.quality--;
    this.isOn = true;
    return this.isOn;
  }

  turnOff() {
    this.quality--;
    this.isOn = false;
    return this.isOn;
  }

  showInfo() {
    const output: string[] = [];
    output.push(
      JSON.stringify({
        producer: this.info.producer,
        age: this.info.age,
        brand: this.info.brand,
      })
    );
    return output.join(" ");
  }

  public get price() {
    return 800 - this.info.age * 2 + this.quality * 0.5;
  }
}

const info: Laptop["info"] = { producer: "Dell", age: 2, brand: "XPS" };
const laptop = new Laptop(info, 10);
laptop.turnOn();
console.log(laptop.showInfo());
laptop.turnOff();
console.log(laptop.quality);
laptop.turnOn();
console.log(laptop.isOn);
console.log(laptop.price);

export {};
