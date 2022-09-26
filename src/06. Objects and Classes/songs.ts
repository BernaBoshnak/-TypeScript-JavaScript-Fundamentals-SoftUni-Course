type CommandsArray =
  | [number, string, string, string]
  | [number, string, string, string, string]
  | [number, string, string, string, string, string];

interface SongData {
  type: string;
  name: string;
  time: string;
}

function songs(input: CommandsArray) {
  class Song implements SongData {
    private _type: SongData["type"];
    private _name: SongData["name"];
    time: SongData["time"];

    constructor(
      type: SongData["type"],
      name: SongData["name"],
      time: SongData["time"]
    ) {
      this._type = type;
      this._name = name;
      this.time = time;
    }

    public get name() {
      return this._name;
    }

    public get type() {
      return this._type;
    }
  }
  const songs: Array<SongData> = [];
  const numberOfSongs = input.shift();
  const typeSong = input.pop();

  if (numberOfSongs) {
    for (let i = 0; i < numberOfSongs; i++) {
      const currentInput = input.shift();
      if (currentInput) {
        const [type, name, time] = currentInput.toString().split("_");
        songs.push(new Song(type, name, time));
      }
    }
  }

  if (typeSong === "all") {
    songs.forEach((song) => console.log(song.name));
  } else {
    const filtered = songs.filter((song) => song.type === typeSong);
    filtered.forEach((song) => console.log(song.name));
  }
}

songs([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
songs([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);
songs([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);

export {};
