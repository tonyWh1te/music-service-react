import { useState, useCallback, useRef, memo } from 'react';
import SearchBar from './SearchBar/SearchBar';
import SearchResultsContainer from './SearchResultsContainer/SearchResultsContainer';

const SearchWrapper = () => {
  const [resIsShow, setResIsShow] = useState(false);
  const [results, setResults] = useState({
    artists: [],
    albums: [],
    songs: [],
  });
  const inputRef = useRef(null);

  const onAssignInputRef = (newInputRef) => {
    if (!newInputRef.current) return;

    inputRef.current = newInputRef.current;
  };

  const onCloseRes = useCallback(() => {
    setResIsShow(false);
  }, [setResIsShow]);

  return (
    <div className="search-wrapper">
      <SearchBar
        setResults={setResults}
        setResIsShow={setResIsShow}
        onAssignInputRef={onAssignInputRef}
      />
      <SearchResultsContainer
        results={results}
        resIsShow={resIsShow}
        onCloseRes={onCloseRes}
        inputRef={inputRef}
      />
    </div>
  );
};

export default memo(SearchWrapper);
