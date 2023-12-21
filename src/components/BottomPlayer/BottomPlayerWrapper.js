import { usePlayer } from '../../hooks';
import BottomPlayer from './BottomPlayer';

const BottomPlayerWrapper = () => {
  const {
    state: { show },
  } = usePlayer();

  return show && <BottomPlayer />;
};

export default BottomPlayerWrapper;
