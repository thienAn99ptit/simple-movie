import useSWR from "swr";
import { fetcher, keys } from "../apiConfig/config";
import MoviesLayout from "../components/MoviesLayout/MoviesLayout";
import SwiperComponent from "../components/SwiperComponent/SwiperComponent";
import Banner from "../layouts/DefaultLayout/Banner/Banner";

function Home() {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${keys}&language=en-US&page=1`,
    fetcher
  );
  const banner = data?.results || [];
  return (
    <div>
      <SwiperComponent
        data={banner}
        slidesPerView={1}
        chilrenComponent={Banner}
      />
      <MoviesLayout></MoviesLayout>
    </div>
  );
}

export default Home;
