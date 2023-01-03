import axios from "axios";
import { useEffect, useState } from "react";
import { keys } from "../../apiConfig/config";

function VideoTrailer({ id }) {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${keys}&language=en-US`
      )
      .then(function (response) {
        // handle success

        setVideos([response.data.results[0]]);
        console.log();
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [id]);
  return (
    <>
      <h1 className="text-center font-bold text-2xl mb-10">Video Trailer</h1>
      {videos.length > 0 &&
        videos.map((video) => (
          <div className="w-full my-10" key={id}>
            <iframe
              width="100%"
              height="370"
              src={`https://www.youtube.com/embed/${video.key}`}
              title="THE WOMAN KING - Filming in South Africa"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
    </>
  );
}

export default VideoTrailer;
