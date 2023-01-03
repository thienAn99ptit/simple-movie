import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, keys, imagesOriginalLink } from "../apiConfig/config";
import CastWrapper from "../components/casts/CastWrapper";
import Image from "../components/image/Image";
import MovieSimilar from "../components/movieSimilar/MovieSimilar";
import VideoTrailer from "../components/videoTrailer/VideoTrailer";

function MovieDetail() {
  const { movie_id } = useParams();
  const [movie, setMovie] = useState(null);

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${keys}&language=en-US`,
    fetcher
  );
  useEffect(() => {
    if (data) setMovie(data);
  }, [data]);

  return (
    <div>
      {movie && (
        <>
          <div className="h-[500px] relative" style={{}}>
            <img
              src={`${imagesOriginalLink}${movie.backdrop_path}`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[300px] w-[800px] rounded-lg -mt-[150px] relative z-10 mx-auto">
            <Image
              src={`${imagesOriginalLink}${movie.poster_path}`}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-[800px] mx-auto">
            <h1 className="text-3xl font-bold text-center my-10 uppercase">
              {movie.title}
            </h1>
            <div className="flex gap-x-5 justify-center mb-10">
              {movie.genres.map((item) => (
                <h3
                  key={item.id}
                  className="px-6 py-2 font-semibold rounded-lg border border-primary  text-sm "
                >
                  {item.name}
                </h3>
              ))}
            </div>
            <p className="text-center text-sm mb-10">{movie.overview}</p>
            <CastWrapper id={movie_id}></CastWrapper>
            <VideoTrailer id={movie_id}></VideoTrailer>
            <MovieSimilar id={movie_id}></MovieSimilar>
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDetail;
