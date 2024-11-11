import React from 'react';

function Lives({ lives }) {
  return (
    <div className="lives">
      {Array.from({ length: lives }).map((_, index) => (
        <span key={index}>&hearts; </span>
      ))}
    </div>
  );
}

export default Lives;
