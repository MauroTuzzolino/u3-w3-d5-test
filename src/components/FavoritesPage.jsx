import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../redux/reducers/favoritesSlice";
import { BsHeartFill } from "react-icons/bs";

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites.items);
  const dispatch = useDispatch();

  const handleToggleFavorite = (songId) => {
    dispatch(removeFavorite(songId));
  };

  return (
    <main className="mainPage container px-4 py-4 ms-5" style={{ marginBottom: "100px", minHeight: "100vh" }}>
      <h2 className="text-white mb-4">Your Favorites</h2>

      {favorites.length === 0 ? (
        <p className="text-light">No favorite songs yet.</p>
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {favorites.map((song) => (
            <div key={song.id} className="col text-center">
              <img className="img-fluid rounded shadow-sm" src={song.album.cover_medium} alt={song.title} />
              <div className="d-flex justify-content-center align-items-center mt-2 gap-2">
                <p className="mb-0 text-white fw-bold text-center" style={{ fontSize: "0.85rem" }}>
                  Track: &quot;{song.title}&quot;
                  <br />
                  Artist: {song.artist.name}
                </p>
                <button className="btn btn-link p-0 ms-2" onClick={() => handleToggleFavorite(song.id)}>
                  <BsHeartFill className="text-success fs-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default FavoritesPage;
