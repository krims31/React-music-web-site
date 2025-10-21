import "./LeftSideTop.css";
import House from "../../assets/house.png";
import Search from "../../assets/search-interface-symbol.png";
import Explore from "../../assets/application.png";

export default function LeftSideTop() {
  const nav = {
    home: {
      icon: House,
      text: "Home",
    },
    search: {
      icon: Search,
      text: "Search",
    },
    explore: {
      icon: Explore,
      text: "Explore",
    },
  };
  return (
    <>
      <sidebar>
        <div className="container">
          <div className="Home">
            <img src={House} alt="house" width={35} />
            <p>{nav.home.text}</p>
          </div>
          <div className="Search">
            <img src={Search} alt="search" width={20} />
            <p>{nav.search.text}</p>
          </div>
          <div className="Explore">
            <img src={Explore} alt="explore" width={20} />
            <p>{nav.explore.text}</p>
          </div>
        </div>
      </sidebar>
    </>
  );
}
