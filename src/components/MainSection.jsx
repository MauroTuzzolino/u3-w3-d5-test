import MusicSection from "./MusicSection";
import { Link } from "react-router-dom";

const MainSection = () => {
  return (
    <main className="col-12 col-md-9 offset-md-3 mainPage" style={{ marginBottom: "100px" }}>
      <div className="w-100 d-flex justify-content-end align-items-center px-5 pt-3 d-block d-lg-none">
        <Link className="btn btn-outline-light d-flex align-items-center " to="/favorites">
          Favorites
        </Link>
      </div>
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-lg-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>

      <div className="row">
        <div className="col-10">
          <MusicSection artistName="queen" sectionId="rock" title="Rock Classics" />
        </div>
      </div>

      <div className="row">
        <div className="col-10">
          <MusicSection artistName="katyperry" sectionId="pop" title="Pop Culture" />
        </div>
      </div>

      <div className="row">
        <div className="col-10">
          <MusicSection artistName="eminem" sectionId="hiphop" title="#HipHop" />
        </div>
      </div>
    </main>
  );
};

export default MainSection;
