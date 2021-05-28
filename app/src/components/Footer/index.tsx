import React from 'react';

const FOOTER_HEIGHT = '80px';

function Home() {
  return (
    <footer style={{
      width: '100%',
      bottom: 0,
      height: FOOTER_HEIGHT,
      position: 'absolute',
      backgroundColor: 'black',
    }}>
      <p style={{
          color: 'white'
        }}>
          fotter
        </p>
    </footer>
  );
}

export default Home;