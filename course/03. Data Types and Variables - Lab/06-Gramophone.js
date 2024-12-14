function solveCurTask(band, album, song) {
  const bandName = band.length;
  const albumName = album.length;
  const songName = song.length;

  const songDuration = (bandName * albumName) * songName / 2;
  const fullRotation = 2.5;

  const rotationCount = songDuration / fullRotation;

  console.log(`The plate was rotated ${Math.ceil(rotationCount)} times.`);
}

solveCurTask('Black Sabbath', 'Paranoid', 'War Pigs');