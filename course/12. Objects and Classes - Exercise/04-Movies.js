function solveCurTask(arr) {
  const movieList = [];

  for (const data of arr) {
    if (data.includes('addMovie')) {
      const newArr = data.split('addMovie ');
      const movieName = newArr[1];

      const movie = {name: movieName};

      movieList.push(movie);
    } else if (data.includes('directedBy')) {
      const newArr = data.split(' directedBy ');
      const [movieName, movieDirector] = newArr;

      const existingMovie = movieList.find(obj => obj.name === movieName);

      if (existingMovie) {
        existingMovie.director = movieDirector;
      }
    } else if (data.includes('onDate')) {
      const newArr = data.split(' onDate ');
      const [movieName, movieDate] = newArr;

      const existingMovie = movieList.find(obj => obj.name === movieName);

      if (existingMovie) {
        existingMovie.date = movieDate;
      }
    }
  }

  for (const movie of movieList) {
    if (movie.name && movie.director && movie.date) {
      console.log(JSON.stringify(movie));
    }
  }
}

solveCurTask([
  'addMovie Fast and Furious',
  'addMovie Godfather',
  'Inception directedBy Christopher Nolan',
  'Godfather directedBy Francis Ford Coppola',
  'Godfather onDate 29.07.2018',
  'Fast and Furious onDate 30.07.2018',
  'Batman onDate 01.08.2018',
  'Fast and Furious directedBy Rob Cohen'
  ]);