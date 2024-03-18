let movies = [
  {
    name: "Interstellar",
    year: "2014",
    director: "Christopher Nolan",
    picture: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpghttps://i.ytimg.com/vi/YF1eYbfbH5k/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGE4gYShlMA8=&rs=AOn4CLDt6JPoesvmQnP8qf-00JpeDZUfyA"
  },
  {
    name: "Everything Everywhere All At Once",
    year: "2022",
    director: "Daniel Kwan and Daniel Scheinert",
    picture: "https://i.etsystatic.com/18242346/r/il/7fb6f1/3898744406/il_fullxfull.3898744406_6wp7.jpg"
  },
  {
    name: "Jojo Rabbit",
    year: "2019",
    director: "Taika Waititi",
    picture: "https://m.media-amazon.com/images/M/MV5BZjU0Yzk2MzEtMjAzYy00MzY0LTg2YmItM2RkNzdkY2ZhN2JkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg"
  }
];

let movieElements = movies.map(movie => {
  return `
    <li>
      <p>${movie.name}</p>
      <p>Year: ${movie.year}</p>
      <p>Director: ${movie.director}</p>
      <img src="${movie.picture}" alt="${movie.name} Poster"  
      style="max-width: 50%;">
    </li>
  `;
});

document.getElementById('movie-list').innerHTML = movieElements.join('');
