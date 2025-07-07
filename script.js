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

// New Releases movies
const newReleases = [
  {
    title: "The Mother",
    image: "https://image.tmdb.org/t/p/w500/8QVDXDiOGHRcAD4oM6MXjE0osSj.jpg",
  },
  {
    title: "Glass Onion",
    image: "https://image.tmdb.org/t/p/w500/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg",
  },
  {
    title: "The Adam Project",
    image: "https://image.tmdb.org/t/p/w500/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg",
  },
  {
    title: "The Sea Beast",
    image: "https://image.tmdb.org/t/p/w500/9pCoqX24a6rE981fB1xL6yW5yyO.jpg",
  },
  {
    title: "Day Shift",
    image: "https://image.tmdb.org/t/p/w500/bI7lGR5HuYlENlp11brKUAaPHuO.jpg",
  },
  {
    title: "Slumberland",
    image: "https://image.tmdb.org/t/p/w500/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg",
  },
];
const newReleasesGrid = document.getElementById("newReleasesGrid");
newReleases.forEach((movie) => {
  const card = document.createElement("div");
  card.className = "movie-card";
  card.innerHTML = `
    <img src="${movie.image}" alt="${movie.title}">
    <div class="movie-title">${movie.title}</div>
  `;
  newReleasesGrid.appendChild(card);
});

// Comedy movies
const comedyMovies = [
  {
    title: "Murder Mystery",
    image: "https://image.tmdb.org/t/p/w500/bSMSO9xupd4R4vwTPqigHn2quLN.jpg",
  },
  {
    title: "The Wrong Missy",
    image: "https://image.tmdb.org/t/p/w500/1eTgP1gF3h6Z6yD6y7k1l7lA4hA.jpg",
  },
  {
    title: "Yes Day",
    image: "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
  },
  {
    title: "The Do-Over",
    image: "https://image.tmdb.org/t/p/w500/2lECpi35Hnbpa4y46JX0aY3AWTy.jpg",
  },
  {
    title: "The Ridiculous 6",
    image: "https://image.tmdb.org/t/p/w500/5bKQp0L2r4uBnhbAaqiFzXy9S4H.jpg",
  },
  {
    title: "Game Over, Man!",
    image: "https://image.tmdb.org/t/p/w500/4PiiNGXj1KENTmCBHeN6Mskj2Fq.jpg",
  },
];
const comedyGrid = document.getElementById("comedyGrid");
comedyMovies.forEach((movie) => {
  const card = document.createElement("div");
  card.className = "movie-card";
  card.innerHTML = `
    <img src="${movie.image}" alt="${movie.title}">
    <div class="movie-title">${movie.title}</div>
  `;
  comedyGrid.appendChild(card);
});

// Newsletter form submission
const newsletterForm = document.querySelector(".newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for subscribing!");
    newsletterForm.reset();
  });
}
