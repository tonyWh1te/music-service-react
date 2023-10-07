import { useCallback, useState } from 'react';

const usePagination = (getData) => {
  const [offset, setOffset] = useState(0);
  const [newData, setData] = useState([]);
  const [dataEnded, setDataEnded] = useState(false);

  const onDataLoaded = (data) => {
    const ended = data.length < 5;

    setData((prevData) => [...prevData, ...data]);
    setOffset((offset) => offset + 6);
    setDataEnded(ended);
  };

  const onUploadData = useCallback(() => {
    getData(offset).then(({ data }) => onDataLoaded(data));
  }, [offset]);

  return { onUploadData, onDataLoaded, newData, offset, dataEnded };
};

export default usePagination;
