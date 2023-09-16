import { createContext, useRef, useState } from 'react';

const defaultRect = {
  left: 0,
  right: 0,
  width: 0,
  height: 0,
};

const PopoverContext = createContext({
  isShow: false,
  setIsShow: () => {
    throw new Error('PopoverContext setIsShow should be used under provider');
  },
  prefferedPosition: 'bottom-center',
  triggerRect: defaultRect,
  setTriggerRect: () => {
    throw new Error('PopoverContext setIsShow should be used under provider');
  },
  triggerRef: null,
});

const PopoverProvider = ({ children, preferredPosition: position }) => {
  const [isShow, setIsShow] = useState(false);
  const [triggerRect, setTriggerRect] = useState(defaultRect);
  const triggerRef = useRef(null);

  const contextValue = { isShow, setIsShow, position, triggerRect, setTriggerRect, triggerRef };

  return <PopoverContext.Provider value={contextValue}>{children}</PopoverContext.Provider>;
};

export default PopoverContext;
export { PopoverProvider };
