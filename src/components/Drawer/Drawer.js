import React, { forwardRef, useEffect, useState } from 'react';

const Drawer = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    console.log("");
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [ref]);

  return (
    <div
      className={`drawer${isOpen ? ' open' : ''}`}
      ref={ref}
    >
      {props.children}
    </div>
  );
});

export default Drawer;