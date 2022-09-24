function gramophone(bandName: string, albumName: string, songName: string) {
  const time = (albumName.length * bandName.length * songName.length) / 2;
  const rotations = Math.ceil(time / 2.5);

  console.log(`The plate was rotated ${rotations} times.`);
}

gramophone("Black Sabbath", "Paranoid", "War Pigs");
gramophone("Rammstein", "Sehnsucht", "Engel");

export {};
