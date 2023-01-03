import axios from "axios";
import { useEffect, useState } from "react";
import { fetcher, keys, imagesLink } from "../../apiConfig/config";
import Image from "../image/Image";
function CastWrapper({ id }) {
  const [casts, setCasts] = useState([]);
  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${keys}&language=en-US`
      )
      .then(function (response) {
        // handle success
        setCasts(response.data.cast);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  return (
    <>
      {casts.length > 0 && (
        <>
          <h1 className="text-center font-bold text-2xl mb-10 ">Casts</h1>
          <div className="grid grid-cols-4 gap-x-5 ">
            {casts.splice(0, 4).map((cast) => (
              <div key={cast.id} className="flex flex-col justify-between">
                <Image
                  src={`${imagesLink}${cast.profile_path}`}
                  alt=""
                  className="w-full h-[200px] rounded-md object-cover mb-2"
                />

                <h4 className="text-center font-medium text-lg">{cast.name}</h4>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default CastWrapper;
