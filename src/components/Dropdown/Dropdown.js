import { useState, useRef, useCallback } from 'react';
import { useAuth } from '../../hooks';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import DropdownMenu from './DropdownMenu/DropdownMenu';

const Dropdown = () => {
  const [opened, setOpened] = useState(false);
  const arrowRef = useRef(null);
  const { logout } = useAuth();

  const menuItems = [
    {
      name: 'Account settings',
      href: '/settings',
      onClick: () => {},
      additionalProps: {},
    },
    {
      name: 'Sign out',
      href: '/',
      onClick: () => logout(),
      additionalProps: {
        replace: true,
      },
    },
  ];

  const onClose = useCallback(() => {
    setOpened(false);
  }, [setOpened]);

  const onToggleDropdown = () => {
    setOpened(!opened);
  };

  return (
    <>
      <button
        className="w-7 h-7 opacity-70 animation-main"
        onClick={onToggleDropdown}
        ref={arrowRef}
      >
        <ChevronDownIcon />
      </button>
      <DropdownMenu
        menuItems={menuItems}
        opened={opened}
        triggerRef={arrowRef}
        onClose={onClose}
      />
    </>
  );
};

export default Dropdown;
