const fetcher = (...args) => fetch(...args).then((res) => res.json());
const keys = "1a7046ba34a55fdfdd20ad4254b83f45";
const imagesLink = "https://image.tmdb.org/t/p/w500/";
const imagesOriginalLink = "https://image.tmdb.org/t/p/original/";
const linkMain = "https://api.themoviedb.org/3/";

export { fetcher, keys, imagesLink, imagesOriginalLink, linkMain };
