import { cloneElement, useCallback, useLayoutEffect, useRef, useState } from 'react';
import { usePopover, useClickOutside } from '../../hooks';
import { PopoverProvider } from '../../context/PopoverProvider';
import './Popover.css';

const POPOVER_OFFSET = 10;

const Popover = ({ children, preferredPosition = 'bottom-center' }) => {
  return <PopoverProvider preferredPosition={preferredPosition}>{children}</PopoverProvider>;
};

const Trigger = ({ children }) => {
  const { setIsShow, setTriggerRect, triggerRef } = usePopover();

  const onClick = () => {
    const element = triggerRef.current;

    if (!element) {
      return;
    }

    const triggerRect = element.getBoundingClientRect();

    setTriggerRect(triggerRect);
    setIsShow((isShow) => !isShow);
  };

  const childrenToTriggerPopover = cloneElement(children, {
    onClick,
    ref: triggerRef,
  });

  return childrenToTriggerPopover;
};

const Content = ({ children }) => {
  const { isShow } = usePopover();

  return isShow && <ContentInternal>{children}</ContentInternal>;
};

const getPopoverCoords = (triggerRect, popoverRect, position) => {
  let top, left;

  switch (position) {
    case 'bottom-center':
    default:
      top = triggerRect.top + triggerRect.height + POPOVER_OFFSET;
      left = Math.max(triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2, POPOVER_OFFSET);

      // переход на нижний уровень при нехватке места
      if (top + popoverRect.height > window.innerHeight - POPOVER_OFFSET) {
        top = triggerRect.top - POPOVER_OFFSET - popoverRect.height;
      }

      return { top, left };
    case 'top-center':
      top = triggerRect.top - popoverRect.height - POPOVER_OFFSET;
      left = Math.max(triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2, POPOVER_OFFSET);

      if (top < POPOVER_OFFSET) {
        top = triggerRect.top + triggerRect.height + POPOVER_OFFSET;
      }

      return { top, left };
    case 'left':
      top = Math.max(triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2, POPOVER_OFFSET);
      left = triggerRect.left - popoverRect.width - POPOVER_OFFSET;

      if (left < POPOVER_OFFSET) {
        left = triggerRect.left + triggerRect.width + POPOVER_OFFSET;
      }

      return { top, left };
    case 'right':
      top = Math.max(triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2, POPOVER_OFFSET);
      left = triggerRect.left + triggerRect.width + POPOVER_OFFSET;

      if (left + popoverRect.width > window.innerWidth + POPOVER_OFFSET) {
        left = triggerRect.left - popoverRect.width - POPOVER_OFFSET;
      }

      return { top, left };
  }
};

const ContentInternal = ({ children }) => {
  const { triggerRect, position, setIsShow, triggerRef } = usePopover();
  const contentRef = useRef(null);
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  const onClickOutside = useCallback(() => {
    setIsShow(false);
  }, [setIsShow]);

  useClickOutside({ elementRef: contentRef, onClickOutside, triggerRef });

  useLayoutEffect(() => {
    const element = contentRef.current;

    if (!element) {
      return;
    }

    const rect = element.getBoundingClientRect();
    const coords = getPopoverCoords(triggerRect, rect, position);

    setCoords(coords);
  }, []);

  return (
    <PositioningPopoverContent
      coords={coords}
      contentRef={contentRef}
    >
      {children}
    </PositioningPopoverContent>
  );
};

const PositioningPopoverContent = ({ coords, contentRef, children }) => {
  return (
    <dialog
      className="popover"
      open={true}
      ref={contentRef}
      style={{
        position: 'fixed',
        top: `${coords.top}px`,
        left: `${coords.left}px`,
        margin: '0',
      }}
    >
      {children}
    </dialog>
  );
};

const Close = ({ children }) => {
  const { setIsShow } = usePopover();

  const onClick = () => {
    setIsShow(false);
  };

  const childrenToClosePopover = cloneElement(children, {
    onClick,
  });

  return childrenToClosePopover;
};

Popover.Trigger = Trigger;
Popover.Content = Content;
Popover.Close = Close;

export default Popover;
