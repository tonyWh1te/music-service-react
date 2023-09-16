import { useContext } from 'react';
import PopoverContext from '../context/PopoverProvider';

const usePopover = () => {
  return useContext(PopoverContext);
};

export default usePopover;
