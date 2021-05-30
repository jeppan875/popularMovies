import React from 'react';

export const HEADER_HEIGHT = '80px';

function Header() {
  return (
    <header
      style={{
        backgroundColor: 'rgba(1,1,1,0.8)',
        justifyContent: 'center',
        display: 'flex',
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        zIndex: 1000,
        height: HEADER_HEIGHT,
      }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '80px',
          maxWidth: '900px',
          flexGrow: 1,
        }}>
        <h1
          style={{
            color: 'white',
            marginLeft: 20,
          }}>
          Popular Movies
        </h1>
      </div>
    </header>
  );
}

export default Header;
