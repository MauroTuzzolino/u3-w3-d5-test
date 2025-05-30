import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong } from "../redux/reducers/playerSlice";
import { toggleFavorite } from "../redux/reducers/favoritesSlice";

const MusicSection = ({ artistName, sectionId, title }) => {
  const [songs, setSongs] = useState([]); // Stato locale per le canzoni
  const [error, setError] = useState(null); // Stato per eventuali errori
  const [loading, setLoading] = useState(true); // Stato per il caricamento

  const dispatch = useDispatch(); // Permette di inviare azioni Redux
  const favorites = useSelector((state) => state.favorites.items); // Prende i preferiti dallo store

  // Al montaggio/filtro artista, effettua il fetch delle canzoni
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`);
        if (!response.ok) throw new Error("Failed to fetch songs");
        const { data } = await response.json();
        setSongs(data.slice(0, 4)); // Prende solo le prime 4
        setError(null);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchSongs();
  }, [artistName]);

  // Mostra messaggi di stato
  if (loading) return <p>Loading {title}...</p>;
  if (error)
    return (
      <p>
        Error loading {title}: {error}
      </p>
    );

  // Controlla se una canzone è nei preferiti
  const isFavorite = (songId) => favorites.some((fav) => fav.id === songId);

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
            } // Clic sull’intero blocco seleziona la canzone
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
                  e.stopPropagation(); // Previene il click sul div padre
                  dispatch(toggleFavorite(song));
                }}
                aria-label="Toggle favorite"
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
