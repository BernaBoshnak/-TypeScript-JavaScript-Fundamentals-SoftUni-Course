interface MovieData {
  name: string;
  director?: string;
  date?: string;
}

function movies(array: string[]) {
  class Movie implements MovieData {
    private _name: MovieData["name"];
    private _director?: MovieData["director"];
    private _date?: MovieData["date"];

    constructor(name: MovieData["name"]) {
      this._name = name;
    }

    public get name() {
      return this._name;
    }

    public set name(name: MovieData["name"]) {
      this._name = name;
    }

    public get director() {
      return this._director;
    }

    public set director(director: MovieData["director"]) {
      this._director = director;
    }

    public get date() {
      return this._date;
    }

    public set date(date: MovieData["date"]) {
      this._date = date;
    }
  }
  const movies: Array<MovieData> = [];

  const getMovie = function (movieName: MovieData["name"]) {
    return movies.find((movie) => movie.name === movieName);
  };

  for (let i = 0; i < array.length; i++) {
    const command = array[i].split(" ");

    if (command.includes("addMovie")) {
      const name = command.slice(1, command.length).join(" ");
      movies.push(new Movie(name));
    } else if (command.includes("directedBy")) {
      const name = command.slice(0, command.indexOf("directedBy")).join(" ");
      const movie = getMovie(name);
      if (movie) {
        movie.director = command
          .slice(command.indexOf("directedBy") + 1, command.length)
          .join(" ");
      }
    } else if (command.includes("onDate")) {
      const name = command.slice(0, command.indexOf("onDate")).join(" ");
      const movie = getMovie(name);
      if (movie) {
        movie.date = command
          .slice(command.indexOf("onDate") + 1, command.length)
          .join(" ");
      }
    }
  }

  for (const movie of movies) {
    if (movie.name && movie.director && movie.date) {
      console.log(
        JSON.stringify({
          name: movie.name,
          director: movie.director,
          date: movie.date,
        })
      );
    }
  }
}

movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);

export {};
