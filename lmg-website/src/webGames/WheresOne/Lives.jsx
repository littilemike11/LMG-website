import React from 'react';

function Lives({ lives }) {
  return (
    <div className="text-red-600">
      {Array.from({ length: lives }).map((_, index) => (
        <span key={index}>&hearts; </span>
      ))}
    </div>
  );
}

export default Lives;
