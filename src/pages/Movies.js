import useSWR from "swr";
import { fetcher, keys } from "../apiConfig/config";
import MovieCardList from "../components/MovieCardList/MovieCardList";
import MovieCardItem from "../components/MovieCardItem/MovieCardItem";
import { useState } from "react";
import useDebounds from "../hooks/useDebound";
import { useEffect } from "react";

function Movies() {
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=${keys}&language=en-US`
  );
  const { data, error } = useSWR(url, fetcher);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const valueDebound = useDebounds(search, 800);

  useEffect(() => {
    console.log({ valueDebound });
    if (valueDebound) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=${keys}&query=${valueDebound}`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=${keys}&language=en-US`
      );
    }
  }, [valueDebound]);
  const movies = data?.results || [];
  return (
    <div className="page-container">
      <div className="flex mb-10">
        <input
          type="text"
          placeholder="Text here to search ..."
          className="flex-1 py-2 px-4 text-sm bg-slate-800 text-white font-bold outline-none"
          onChange={(e) => handleSearch(e)}
        />
        <button className="py-2 px-4 bg-primary ">Submit</button>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {movies.map((movie) => (
          <MovieCardItem key={movie.id} data={movie} />
        ))}
      </div>
    </div>
  );
}

export default Movies;
