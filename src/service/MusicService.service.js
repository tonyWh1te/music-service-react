import useRequest from '../hooks/useRequest';

class MusicService {
  http = useRequest();

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
    const endpoint = `/chart/${genreId}/tracks&limit=11`;
    const result = await this.http.request(endpoint);

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
    const endpoint = `/chart/${genreId}/artists`;
    const result = await this.http.request(endpoint);

    const artists = result.data.data.map(this.#transformEntity);

    return { data: artists, message: result.message };
  };

  getAllGenres = async () => {
    const endpoint = `/genre/`;
    const result = await this.http.request(endpoint);

    const genres = result.data.data.map(this.#transformEntity);

    return { data: genres, message: result.message };
  };

  getGenre = async (id) => {
    const endpoint = `/genre/${id}`;
    const result = await this.http.request(endpoint);

    const genre = this.#transformEntity(result.data);

    return { data: genre, message: result.message };
  };

  getNewReleases = async (genreId, withLimit = true) => {
    const limitOfData = withLimit ? `?limit=11` : '';
    const endpoint = `/editorial/${genreId}/releases${limitOfData}`;

    const result = await this.http.request(endpoint);

    const transformationProps = {
      title: 'title',
      artistName: 'artist.name',
      coverImg: 'cover_big',
      releaseDate: 'release_date',
    };

    const releases = result.data.data.map((release) => this.#transformEntity(release, transformationProps));

    return { data: releases, message: result.message };
  };

  getArtistsByGenre = async (genreId) => {
    const endpoint = `/genre/${genreId}/artists`;
    const result = await this.http.request(endpoint);

    const artists = result.data.data.map(this.#transformEntity);

    return { data: artists, message: result.message };
  };

  getAlbum = async (albumId) => {
    const endpoint = `/album/${albumId}`;
    const result = await this.http.request(endpoint);

    const transformationPropsAlbum = {
      title: 'title',
      link: 'share',
      coverImg: 'cover_big',
      date: 'release_date',
      duration: 'duration',
      artistName: 'artist.name',
      artistId: 'artist.id',
      total: 'nb_tracks',
      tracksData: 'tracks.data',
    };

    const transformationPropsTrack = {
      title: 'title',
      artistName: 'artist.name',
      albumTitle: 'album.title',
      coverImg: 'album.cover_big',
      songFile: 'preview',
      duration: 'duration',
      link: 'link',
    };

    const album = this.#transformEntity(result.data, transformationPropsAlbum);
    const tracksData = album.tracksData.map((track) =>
      this.#transformEntity(track, transformationPropsTrack)
    );

    return { data: { ...album, tracksData }, message: result.message };
  };

  getArtist = async (id) => {
    const endpoint = `/artist/${id}`;
    const result = await this.http.request(endpoint);

    const transformationProps = {
      shareLink: 'share',
      fanBase: 'nb_fan',
      nbAlbums: 'nb_album',
    };

    const artist = this.#transformEntity(result.data, transformationProps);

    return { data: artist, message: result.message };
  };

  getTopSongsArtist = async (id) => {
    const endpoint = `/artist/${id}/top`;
    const result = await this.http.request(endpoint);

    const transformationProps = {
      title: 'title',
      albumTitle: 'album.title',
      artistName: 'artist.name',
      coverImg: 'album.cover_big',
      songFile: 'preview',
      duration: 'duration',
      link: 'link',
    };

    const songs = result.data.data.map((song) => this.#transformEntity(song, transformationProps));

    return { data: songs, message: result.message };
  };

  getArtistAlbums = async (id, offset = 0) => {
    const endpoint = `/artist/${id}/albums?limit=5&index=${offset}`;
    const result = await this.http.request(endpoint);

    const transformationProps = {
      title: 'title',
      coverImg: 'cover_big',
      releaseDate: 'release_date',
    };

    const albums = result.data.data.map((album) => this.#transformEntity(album, transformationProps));

    return { data: albums, message: result.message };
  };
}

export default MusicService;
