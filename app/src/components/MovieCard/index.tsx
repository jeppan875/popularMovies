import React from 'react';
import styles from './styles.module.css';
import { IMovie } from '../../interfaces';
import { posterBaseUrl, posterSizes } from '../../utils/constants';
import useWindowSize from '../../hooks/useWindowSize';

function MovieCard({ movie }: { movie: IMovie }) {
  const windowSize = useWindowSize();
  const width = windowSize.width ? windowSize.width : 0;
  const image = `${posterBaseUrl}${posterSizes[width < 750 ? '185' : '342']}${
    movie.poster_path
  }`;
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <img src={image} alt="poster" />
        <div className={styles.info}>
          <h3
            style={{
              color: 'white',
              fontSize: 30,
              marginTop: 0,
            }}>
            {movie.title}
          </h3>
          <p
            style={{
              fontSize: 16,
              color: 'white',
            }}>
            {movie.overview}
          </p>
        </div>
      </div>
      <div
        className={styles.bgImage}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundImage: `url(${image})`,
        }}
      />
    </div>
  );
}

export default MovieCard;
