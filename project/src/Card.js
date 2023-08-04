import React from 'react';

const Card = ({ children }) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '10px',
        margin: '10px 10px 10px 600px',
        maxWidth: '300px',
        backgroundColor: '#f8f8f8',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      }}
    >
      {children}
    </div>
  );
};

export default Card;