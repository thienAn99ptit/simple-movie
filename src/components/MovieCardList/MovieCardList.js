import useSWR from "swr";
import { fetcher, keys } from "../../apiConfig/config";
import SwiperComponent from "../SwiperComponent/SwiperComponent";

function MovieCardList({ movieCardItem, title, link }) {
  const MovieCardItem = movieCardItem;
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${link}?api_key=${keys}&language=en-US&page=1`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <div className="movies-list mb-20">
      <h2 className="capitalize text-white mb-8 text-2xl font-bold ">
        {title}
      </h2>
      <SwiperComponent
        slidesPerView={4}
        data={movies}
        chilrenComponent={MovieCardItem}
      />
      {/* <div className="movie-card-list grid grid-cols-4 gap-10"></div> */}
    </div>
  );
}

export default MovieCardList;
