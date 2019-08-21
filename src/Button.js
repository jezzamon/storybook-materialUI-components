import React from 'react';

export const Button = ({ bg, children }) => {
  return <button style={{ backgroundColor: bg }}>{children}</button>;
};
