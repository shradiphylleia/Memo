import React from 'react';

function Heading({ className, text }) {
  return (
    <>
      <h1 className={className}>{text}</h1>
    </>
  );
}

export default Heading;
