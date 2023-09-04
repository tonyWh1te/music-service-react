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

  #transformEntity = (entity, transformationProps = {}) => {
    const transformedEntity = {
      id: entity?.id,
      name: entity?.name,
      image: entity?.picture_big,
    };

    for (const prop in transformationProps) {
      const propValue = transformationProps[prop].split('.').reduce((obj, key) => obj[key], entity);

      transformedEntity[prop] = propValue;
    }

    return transformedEntity;
  };

  getTopSongs = async (genreId = 0) => {
    const endpoint = `${this.#API_BASE}chart/${genreId}/tracks&limit=11`;
    const result = await this.#getResourse(`${this.#proxy}${encodeURIComponent(endpoint)}`);

    const transformationProps = {
      title: 'title',
      artistName: 'artist.name',
      coverImg: 'album.cover_big',
      songFile: 'preview',
      link: 'link',
    };

    const songs = result.data.data.map((song) => this.#transformEntity(song, transformationProps));

    return { data: songs, message: result.message };
  };

  getTopArtists = async (genreId = 0) => {
    const endpoint = `${this.#API_BASE}chart/${genreId}/artists`;
    const result = await this.#getResourse(`${this.#proxy}${encodeURIComponent(endpoint)}`);

    const artists = result.data.data.map(this.#transformEntity);

    return { data: artists, message: result.message };
  };

  getAllGenres = async () => {
    const endpoint = `${this.#API_BASE}genre/`;
    const result = await this.#getResourse(`${this.#proxy}${encodeURIComponent(endpoint)}`);

    const genres = result.data.data.map(this.#transformEntity);

    return { data: genres, message: result.message };
  };

  getGenre = async (id) => {
    const endpoint = `${this.#API_BASE}genre/${id}`;
    const result = await this.#getResourse(`${this.#proxy}${encodeURIComponent(endpoint)}`);

    const genre = this.#transformEntity(result.data);

    return { data: genre, message: result.message };
  };

  getNewReleases = async (genreId, withLimit = true) => {
    const limitOfData = withLimit ? `?limit=11` : '';
    const endpoint = `${this.#API_BASE}editorial/${genreId}/releases${limitOfData}`;
    const result = await this.#getResourse(`${this.#proxy}${encodeURIComponent(endpoint)}`);

    const transformationProps = {
      title: 'title',
      artistName: 'artist.name',
      coverImg: 'cover_big',
      link: 'link',
    };

    const releases = result.data.data.map((release) => this.#transformEntity(release, transformationProps));

    return { data: releases, message: result.message };
  };

  getArtistsByGenre = async (genreId) => {
    const endpoint = `${this.#API_BASE}genre/${genreId}/artists`;
    const result = await this.#getResourse(`${this.#proxy}${encodeURIComponent(endpoint)}`);

    const artists = result.data.data.map(this.#transformEntity);

    return { data: artists, message: result.message };
  };
}

export default MusicService;
