import React from 'react';

const BrowserFrame = ({ imageSrc }) => (
    <svg width="100%" height="auto" viewBox="0 0 800 550" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="800" height="550" rx="12" ry="12" fill="#f5f5f5" stroke="#ccc" />
      <rect x="0" y="0" width="800" height="50" rx="12" ry="12" fill="#e0e0e0" />
      <circle cx="20" cy="25" r="6" fill="#ff5f56" />
      <circle cx="40" cy="25" r="6" fill="#ffbd2e" />
      <circle cx="60" cy="25" r="6" fill="#27c93f" />
      <rect x="100" y="15" width="600" height="20" rx="10" fill="#ffffff" stroke="#ccc" />
      <foreignObject x="0" y="50" width="800" height="500">
        <img
          xmlns="http://www.w3.org/1999/xhtml"
          src={imageSrc}
          width="800"
          height="500"
          style={{ objectFit: "cover" }}
          alt="Website screenshot"
        />
      </foreignObject>
    </svg>
  );
  
  export default BrowserFrame;