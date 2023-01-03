import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MovieDetail = lazy(() => import("../pages/MovieDetail"));

const privaryRoute = [
  {
    element: Home,
    path: "/",
  },
  {
    element: Movies,
    path: "/movies",
  },
  {
    element: MovieDetail,
    path: "/movie/:movie_id",
  },
];

const publicRoute = [];
export { privaryRoute, publicRoute };
