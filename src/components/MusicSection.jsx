import { useEffect, useState } from "react";

const MusicSection = ({ artistName, sectionId, title }) => {
  // Stato per salvare le canzoni ricevute dall'API
  const [songs, setSongs] = useState([]);
  // Stato per gestire eventuali errori nella fetch
  const [error, setError] = useState(null);
  // Stato per indicare se sto caricando i dati
  const [loading, setLoading] = useState(true);

  // useEffect si attiva ogni volta che cambia artistName
  useEffect(() => {
    // Funzione async per fetchare le canzoni
    const fetchSongs = async () => {
      try {
        // Chiamo l'API passando il nome artista
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`);
        // Se la risposta non è ok, lancio un errore
        if (!response.ok) throw new Error("Failed to fetch songs");
        // Estraggo i dati dal json
        const { data } = await response.json();
        // Salvo solo i primi 4 risultati nello stato songs
        setSongs(data.slice(0, 4));
      } catch (err) {
        // Se c'è errore, lo salvo nello stato error
        setError(err.message);
      }
    };

    fetchSongs();
  }, [artistName]); // Questo effetto dipende da artistName: se cambia, rifetcho

  // Se sto caricando mostro un messaggio di caricamento
  if (loading) return <p>Loading {title}...</p>;

  // Se c'è errore mostro messaggio di errore
  if (error)
    return (
      <p>
        Error loading {title}: {error}
      </p>
    );

  // Se tutto ok, renderizzo la sezione con titolo e le canzoni
  return (
    <div id={sectionId}>
      <h2>{title}</h2>
      {/* Uso una griglia responsive bootstrap per le canzoni */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
        {/* Per ogni canzone creo una colonna con immagine e info */}
        {songs.map((song) => (
          <div key={song.id} className="col text-center">
            <img className="img-fluid" src={song.album.cover_medium} alt={song.title} />
            <p>
              Track: &quot;{song.title}&quot;
              <br />
              Artist: {song.artist.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicSection;
