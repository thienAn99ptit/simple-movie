import { useNavigate } from "react-router-dom";
import { imagesLink } from "../../apiConfig/config";
import Image from "../image/Image";
function MovieCardItem({ data }) {
  const navigate = useNavigate();
  const { backdrop_path, title, vote_average, release_date, id } = data;
  const handleNavigate = (id) => {
    navigate(`/movie/${id}`);
  };
  return (
    <div className="flex flex-col movie-card-item rounded-lg p-3 bg-slate-800 w-full select-none h-full ">
      <Image
        src={`${imagesLink}${backdrop_path}`}
        alt=""
        className="w-full h-[200px] object-cover rounded-lg mb-5"
      />

      <div className="flex flex-col flex-1">
        <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
        <div className="text-white flex items-center justify-between text-sm opacity-50 mb-8">
          <span>{release_date}</span>
          <span>{vote_average}</span>
        </div>
        <button
          className="text-white font-semibold py-3 px-6 rounded-lg capitalize bg-primary text-center w-full mt-auto"
          onClick={() => handleNavigate(id)}
        >
          watch now
        </button>
      </div>
    </div>
  );
}

export default MovieCardItem;
