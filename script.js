// Sample movie data
const movies = [
  {
    title: "Stranger Things",
    image: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
  },
  {
    title: "Money Heist",
    image: "https://image.tmdb.org/t/p/w500/mo0FP1GxOFZT4UDde7RFDz5APXF.jpg",
  },
  {
    title: "The Witcher",
    image: "https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg",
  },
  {
    title: "Breaking Bad",
    image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
  },
  {
    title: "Squid Game",
    image: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
  },
  {
    title: "Bridgerton",
    image: "https://image.tmdb.org/t/p/w500/luoKpgVwi1E5nQsi7W0Uu6HwBvA.jpg",
  },
  {
    title: "Dark",
    image: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
  },
  {
    title: "Narcos",
    image: "https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg",
  },
];

const movieGrid = document.getElementById("movieGrid");

movies.forEach((movie) => {
  const card = document.createElement("div");
  card.className = "movie-card";
  card.innerHTML = `
    <img src="${movie.image}" alt="${movie.title}">
    <div class="movie-title">${movie.title}</div>
  `;
  movieGrid.appendChild(card);
});

// Trending Now movies
const trendingMovies = [
  {
    title: "Extraction",
    image: "https://image.tmdb.org/t/p/w500/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg",
  },
  {
    title: "The Gray Man",
    image: "https://image.tmdb.org/t/p/w500/8cXbitsS6dWQ5gfMTZdorpAAzEH.jpg",
  },
  {
    title: "Enola Holmes",
    image: "https://image.tmdb.org/t/p/w500/riYInlsq2kf1AWoGm80JQW5dLKp.jpg",
  },
  {
    title: "Red Notice",
    image: "https://image.tmdb.org/t/p/w500/lAXONuqg41NwUMuzMiFvicDET9Y.jpg",
  },
  {
    title: "Army of the Dead",
    image: "https://image.tmdb.org/t/p/w500/z8CExJekGrEThbpMXAmCFvvgoJR.jpg",
  },
  {
    title: "Bird Box",
    image: "https://image.tmdb.org/t/p/w500/rGfGfgL2pEPCfhIvqHXieXFn7gp.jpg",
  },
];

const trendingGrid = document.getElementById("trendingGrid");
trendingMovies.forEach((movie) => {
  const card = document.createElement("div");
  card.className = "movie-card";
  card.innerHTML = `
    <img src="${movie.image}" alt="${movie.title}">
    <div class="movie-title">${movie.title}</div>
  `;
  trendingGrid.appendChild(card);
});

// Top Rated movies
const topRatedMovies = [
  {
    title: "The Shawshank Redemption",
    image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
  },
  {
    title: "The Godfather",
    image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
  },
  {
    title: "The Dark Knight",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    title: "Forrest Gump",
    image: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
  },
  {
    title: "Inception",
    image: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
  },
  {
    title: "Fight Club",
    image: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
  },
];

const topRatedGrid = document.getElementById("topRatedGrid");
topRatedMovies.forEach((movie) => {
  const card = document.createElement("div");
  card.className = "movie-card";
  card.innerHTML = `
    <img src="${movie.image}" alt="${movie.title}">
    <div class="movie-title">${movie.title}</div>
  `;
  topRatedGrid.appendChild(card);
});
