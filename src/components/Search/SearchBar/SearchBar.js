import { useState, useEffect, useRef } from 'react';
import { useDebounce } from '../../../hooks';
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import withContent from '../../../hoc/withContent';
import SearchResultsList from '../SearchResultsList/SearchResultsList';
import './SearchBar.css';

const GET_ARTISTS_BY_SEARCH = 'getArtistsBySearch';
const GET_ALBUMS_BY_SEARCH = 'getAlbumsBySearch';
const GET_SONGS_BY_SEARCH = 'getSongsBySearch';

const SearchBar = ({ setResults, setResIsShow, onAssignInputRef }) => {
  const [search, setSearch] = useState('');
  const debouncedValue = useDebounce(search);
  const inputRef = useRef(null);

  const onKeyDown = (e) => {
    if (!(e.key === 'Enter')) {
      return;
    }

    onSearch(debouncedValue);
  };

  const createContent = (methodName, query) =>
    withContent(SearchResultsList, {
      methodName,
      methodParams: [query],
    });

  const onSearch = (query) => {
    if (query === '') return;

    const ContentWithArtistsSearch = createContent(
      GET_ARTISTS_BY_SEARCH,
      query
    );
    const ContentWithAlbumsSearch = createContent(GET_ALBUMS_BY_SEARCH, query);
    const ContentWithSongsSearch = createContent(GET_SONGS_BY_SEARCH, query);

    setResults({
      artists: [ContentWithArtistsSearch],
      albums: [ContentWithAlbumsSearch],
      songs: [ContentWithSongsSearch],
    });

    setResIsShow(true);
  };

  const onChange = (e) => {
    const value = e.target.value;

    if (value === '') {
      setResIsShow(false);
    }

    setSearch(value);
  };

  const onClearInput = () => {
    setSearch('');
    setResIsShow(false);
  };

  useEffect(() => onSearch(debouncedValue), [debouncedValue]);
  useEffect(() => onAssignInputRef(inputRef), [inputRef]);

  return (
    <div className="relative">
      <input
        className="search__input"
        type="search"
        placeholder="Search"
        value={search}
        ref={inputRef}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <div
        className="search__img"
        data-search
      >
        <MagnifyingGlassIcon className="fill-gray-icon md:fill-black" />
      </div>
      <button
        className="search__close"
        onClick={onClearInput}
      >
        <XMarkIcon className="fill-black" />
      </button>
    </div>
  );
};

export default SearchBar;
