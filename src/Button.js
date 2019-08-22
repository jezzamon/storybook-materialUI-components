import React from 'react';

const Button = ({ bg, children }) => {
  return <button style={{ backgroundColor: bg }}>{children}</button>;
};

export default Button;
