import { imagesLink } from "../../../apiConfig/config";
import Button from "../../../components/button/Button";
function Banner({ data }) {
  const { poster_path, original_title } = data;
  return (
    <section className="page-container h-[500px] mb-10">
      <div className="w-full h-full rounded-lg relative">
        <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
        <img
          src={`${imagesLink}${poster_path}`}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute left-5 bottom-5 w-full text-white">
          <h2 className="font-bold text-3xl mb-5">{original_title}</h2>
          <div className="flex item-center gap-x-3 mb-8">
            <span className="px-4 py-2 border rounded-md border-white">
              Action
            </span>
            <span className="px-4 py-2 border rounded-md border-white">
              Action
            </span>
            <span className="px-4 py-2 border rounded-md border-white">
              Action
            </span>
          </div>
          <Button className="bg-secondary"> Watch now</Button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
