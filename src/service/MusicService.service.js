import axios from 'axios';

class MusicService {
  #API_BASE = 'http://127.0.0.1:8000/';

  #getResourse = async (url) => {
    try {
      const response = await axios.get(url, { headers: { 'Content-Type': 'application/json' } });

      return { data: response, message: 'Success!' };
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data, error.response.status, error.response.headers);
      } else if (error.request) {
        throw new Error(error.request);
      } else {
        throw new Error(`Error: ${error.message}`);
      }
    }
  };

  #transformSong = (song) => ({
    id: song.id,
    title: song.name,
    artistName: song.artist.name,
    coverImg: song.image,
    link: song.link,
  });

  getAllSongs = async () => {
    const result = await this.#getResourse(`${this.#API_BASE}songs/`);

    const songs = result.data.data.map(this.#transformSong);

    return { data: songs, message: result.message };
  };

  getAllArtists = async () => {
    const result = await this.#getResourse(`${this.#API_BASE}artists/`);

    return { data: result.data.data, message: result.message };
  };
}

export default MusicService;
