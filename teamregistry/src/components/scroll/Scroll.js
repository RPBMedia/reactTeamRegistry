import React from 'react';

const Scroll = ({children}) => {
  return (
    <div style={{ overflow: 'scroll', border: '2px solid lightblue', height: '800px' }}>
      {children}
    </div>
  );
};

export default Scroll;
