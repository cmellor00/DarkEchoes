import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();


  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Episode Details</h2>
          <p>select and episode</p>
        </section>
      );
    }


    return (
      <section>
        <h2>Episode Details</h2>
        <h3>{selectedEpisode.id}. {selectedEpisode.title}</h3>
        <p>{selectedEpisode.description}</p>
      </section>
    );

  }

  function EpisodeList() {
    return (
      <section className="episodeList">
        <h2>Episodes</h2>
        <ul className="episodeList">
          {episodes.map((episode) => (
            <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
              {episode.id}. {episode.title}
            </li>
          ))}
        </ul>

      </section>
    );
  }

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <EpisodeList />
        <EpisodeDetails />
      </main>
    </>
  );
}