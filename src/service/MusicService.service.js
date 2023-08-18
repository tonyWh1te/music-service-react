import axios from 'axios';

class MusicService {
  #proxy = 'https://api.allorigins.win/raw?url=';
  #API_BASE = `https://api.deezer.com/`;

  #getResourse = async (url) => {
    try {
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'Accept-Language': 'en',
        },
      });

      return { data: { ...response.data }, message: response.statusText };
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
    title: song.title,
    artistName: song.artist.name,
    coverImg: song.album.cover_big,
    songFile: song.preview,
  });

  #transformArtist = (artist) => ({
    id: artist.id,
    name: artist.name,
    artistPic: artist.picture_big,
  });

  #transformGenre = (genre) => ({
    id: genre.id,
    name: genre.name,
    genrePic: genre.picture_big,
  });

  getAllSongs = async () => {
    const result = await this.#getResourse(`${this.#proxy}${encodeURIComponent(`${this.#API_BASE}chart/0/tracks&limit=10`)}`);

    const songs = result.data.data.map(this.#transformSong);

    return { data: songs, message: result.message };
  };

  getAllArtists = async () => {
    const result = await this.#getResourse(`${this.#proxy}${encodeURIComponent(`${this.#API_BASE}chart/0/artists&limit=10`)}`);

    const artists = result.data.data.map(this.#transformArtist);

    return { data: artists, message: result.message };
  };

  getAllGenres = async () => {
    const result = await this.#getResourse(`${this.#proxy}${encodeURIComponent(`${this.#API_BASE}genre`)}`);

    const genres = result.data.data.map(this.#transformGenre);

    return { data: genres, message: result.message };
  };
}

export default MusicService;
