import MovieCardItem from "../MovieCardItem/MovieCardItem";
import MovieCardList from "../MovieCardList/MovieCardList";

function MoviesLayout() {
  return (
    <section className="movies-layout page-container ">
      <MovieCardList
        title={"Now playing"}
        link={"now_playing"}
        movieCardItem={MovieCardItem}
      />
      <MovieCardList
        title={"top rate"}
        link={"top_rated"}
        movieCardItem={MovieCardItem}
      />
      <MovieCardList
        title={"popular"}
        link={"popular"}
        movieCardItem={MovieCardItem}
      />
    </section>
  );
}

export default MoviesLayout;
