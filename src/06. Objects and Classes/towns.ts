interface TownData {
  name: string;
  latitude: string;
  longitude: string;
}

function towns(input: Array<string>) {
  class Town implements TownData {
    private _name: TownData["name"];
    private _latitude: TownData["latitude"];
    private _longitude: TownData["longitude"];

    constructor(
      name: TownData["name"],
      latitude: TownData["latitude"],
      longitude: TownData["longitude"]
    ) {
      this._name = name;
      this._latitude = latitude;
      this._longitude = longitude;
    }

    public get name() {
      return this._name;
    }

    public get latitude() {
      return Number(this._latitude).toFixed(2);
    }

    public get longitude() {
      return Number(this._longitude).toFixed(2);
    }
  }
  const towns: Array<TownData> = [];

  for (let i = 0; i < input.length; i++) {
    const [name, latitude, longitude] = input[i].split(" | ");
    towns.push(new Town(name, latitude, longitude));
  }

  for (const town of towns) {
    if (town.name && town.latitude && town.longitude) {
      console.log({
        town: town.name,
        latitude: town.latitude,
        longitude: town.longitude,
      });
    }
  }
}

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);

export {};
