import { useState } from 'react';

export const useToggle = (initialState = false) => {
  const [isShowSelect, setisShowSelect] = useState(initialState);

  const show = () => setisShowSelect(true);
  const hide = () => setisShowSelect(false);
  const toggleHook = () => setisShowSelect(isShowSelect => !isShowSelect);

  return {
    isShowSelect,
    show,
    hide,
    toggleHook,
  };
};
