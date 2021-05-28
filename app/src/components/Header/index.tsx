import React from 'react';

function Home() {
  return (
    <header style={{
      backgroundColor: '#2b5278',
      justifyContent: 'center',
      display: 'flex'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        height: '80px',
        maxWidth: '900px',
        flexGrow: 1
      }}>
        <p>
          Popular Movies
        </p>
        </div>
      </header>
  );
}

export default Home;