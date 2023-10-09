import { useEffect } from 'react';

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

export default useClickOutside;
