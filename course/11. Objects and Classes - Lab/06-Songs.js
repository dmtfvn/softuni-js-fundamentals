function solveCurTask(arr) {
  const arrWithSongs = [];

  const songCount = arr.shift();
  const songType = arr.pop();

  class Song {
    type;
    name;
    time;

    constructor(type, name, time) {
      this.type = type;
      this.name = name;
      this.time = time;
    }
  }

  for (let i = 0; i < songCount; i++) {
    const [type, name, time] = arr[i].split('_');

    const song = new Song(type, name, time);
    arrWithSongs.push(song);
  }

  if (songType === 'all') {
    arrWithSongs.forEach(obj => console.log(obj.name));
  } else {
    const filterSongs = arrWithSongs.filter(obj => obj.type === songType);

    filterSongs.forEach(obj => console.log(obj.name));
  }
}

solveCurTask([3,
  'favourite_DownTown_3:14',
  'favourite_Kiss_4:16',
  'favourite_Smooth Criminal_4:01',
  'favourite']);