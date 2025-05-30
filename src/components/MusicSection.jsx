import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongsByArtist } from "../redux/reducers/songsSlice";
import { setCurrentSong } from "../redux/reducers/playerSlice";
import { toggleFavorite } from "../redux/reducers/favoritesSlice";

const MusicSection = ({ artistName, sectionId, title }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const songs = useSelector((state) => state.songs.byArtist[artistName] || []);
  const loading = useSelector((state) => state.songs.loading);
  const error = useSelector((state) => state.songs.error);

  useEffect(() => {
    dispatch(fetchSongsByArtist(artistName));
  }, [artistName, dispatch]);

  const isFavorite = (id) => favorites.some((song) => song.id === id);

  if (loading) return <p>Loading {title}...</p>;
  if (error)
    return (
      <p>
        Error loading {title}: {error}
      </p>
    );

  return (
    <div id={sectionId}>
      <h2>{title}</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
        {songs.map((song) => (
          <div
            key={song.id}
            className="col text-center"
            style={{ cursor: "pointer" }}
            onClick={() =>
              dispatch(
                setCurrentSong({
                  id: song.id,
                  title: song.title,
                  artist: song.artist.name,
                  cover: song.album.cover_medium,
                })
              )
            }
          >
            <img
              className="img-fluid rounded shadow-sm"
              src={song.album.cover_medium}
              alt={song.title}
              style={{ transition: "transform 0.3s" }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div className="d-flex justify-content-center align-items-center mt-2 gap-2">
              <p className="mb-0 text-white fw-bold text-center" style={{ fontSize: "0.85rem" }}>
                Track: &quot;{song.title}&quot;
                <br />
                Artist: {song.artist.name}
              </p>
              <button
                className="btn btn-link p-0 text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(toggleFavorite(song));
                }}
              >
                <i className={`bi ${isFavorite(song.id) ? "bi-heart-fill text-success" : "bi-heart"}`} style={{ fontSize: "1.2rem" }}></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicSection;
