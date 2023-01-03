import { keys } from "../../apiConfig/config";
import useAxios from "../../hooks/useAxios";
import MovieCardItem from "../MovieCardItem/MovieCardItem";
import SwiperComponent from "../SwiperComponent/SwiperComponent";

function MovieSimilar({ id }) {
  const datasAxious = useAxios(
    `movie/${id}/similar?api_key=${keys}&language=en-US`
  );
  // useEffect(() => {
  //   if()
  //   setMovieSimilar(movieSimilar);
  // }, [datasAxious]);
  if (!datasAxious || datasAxious.results.length <= 0) return null;
  return (
    <>
      <h1 className="text-center font-bold text-2xl mb-10">Movies Similar</h1>
      {datasAxious.results.length > 0 && (
        <div className="video-similar mb-20">
          <SwiperComponent
            slidesPerView={3}
            data={datasAxious.results}
            chilrenComponent={MovieCardItem}
          />
        </div>
      )}
    </>
  );
}

export default MovieSimilar;
