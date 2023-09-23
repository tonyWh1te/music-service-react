import { useEffect, useState, useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import PlayerContext from '../context/PlayerProvider';
import PopoverContext from '../context/PopoverProvider';
import { sizes } from '../utils/constants';

const useAuth = () => {
  return useContext(AuthContext);
};

const useClickOutside = ({ elementRef, onClickOutside, triggerRef = null, enabled = true }) => {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const handleClick = (e) => {
      const target = e.target;

      if (!elementRef.current) {
        return;
      }

      const ignoreElements = [elementRef.current];

      if (triggerRef?.current) {
        ignoreElements.push(triggerRef.current);
      }

      if (!ignoreElements.some((el) => el.contains(target))) {
        onClickOutside(e);
      }
    };

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [onClickOutside, elementRef, triggerRef, enabled]);
};

const useMediaQuery = (screen) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const query = `(min-width: ${sizes[screen]})`;
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, screen]);

  return matches;
};

const usePlayer = () => {
  return useContext(PlayerContext);
};

const usePopover = () => {
  return useContext(PopoverContext);
};

export { useAuth, useClickOutside, usePlayer, usePopover, useMediaQuery };
