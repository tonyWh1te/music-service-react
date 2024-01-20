import { useRef } from 'react';
import { useClickOutside } from '../../../hooks';
import './SearchResultsContainer.css';

const SearchResultsContainer = ({
  results,
  resIsShow,
  onCloseRes,
  inputRef,
}) => {
  const { artists, albums, songs } = results;

  const resRef = useRef(null);

  useClickOutside({
    elementRef: resRef,
    onClickOutside: onCloseRes,
    triggerRef: inputRef,
    enabled: resIsShow,
  });

  return (
    resIsShow && (
      <div
        className="results"
        ref={resRef}
      >
        <div className="results__category results__category--artists">
          <h6 className="card-title results__category-title">Artists</h6>
          {artists.map((ArtistsSearchResult, i) => (
            <ArtistsSearchResult
              key={i}
              onCloseRes={onCloseRes}
            />
          ))}
        </div>
        <div className="results__category results__category--albums">
          <h6 className="card-title results__category-title">Albums</h6>
          {albums.map((AlbumsSearchResult, i) => (
            <AlbumsSearchResult
              key={i}
              onCloseRes={onCloseRes}
            />
          ))}
        </div>
        <div className="results__category results__category--songs">
          <h6 className="card-title results__category-title">Songs</h6>
          {songs.map((SongsSearchResult, i) => (
            <SongsSearchResult
              key={i}
              onCloseRes={onCloseRes}
            />
          ))}
        </div>
      </div>
    )
  );
};

export default SearchResultsContainer;
