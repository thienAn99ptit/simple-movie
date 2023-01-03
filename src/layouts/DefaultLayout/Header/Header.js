import { useState } from "react";
import { Link } from "react-router-dom";

const titles = [
  {
    id: 1,
    title: "Home",
    to: "/",
  },
  {
    id: 2,
    title: "Movies",
    to: "/movies",
  },
];

function Header() {
  const [active, setActive] = useState(1);
  const handleActive = (id) => {
    setActive(id);
  };
  return (
    <div className="flex justify-center gap-x-4 py-10 text-white ">
      {titles.map((title, index) => (
        <Link
          key={title.id}
          to={title.to}
          className={title.id === active ? "text-primary" : ""}
          onClick={() => handleActive(title.id)}
        >
          {title.title}
        </Link>
      ))}
    </div>
  );
}

export default Header;
