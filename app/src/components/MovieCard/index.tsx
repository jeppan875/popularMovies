import React from 'react';
import styles from './styles.module.css';
import { IMovie } from '../../interfaces';
import { posterBaseUrl, posterSizes } from '../../utils/constants';
import useWindowSize from '../../hooks/useWindowSize';

function MovieCard({ movie, index }: { movie: IMovie; index: number }) {
  const windowSize = useWindowSize();
  const width = windowSize.width ? windowSize.width : 0;
  const image = `${posterBaseUrl}${posterSizes[width < 750 ? '185' : '342']}${
    movie.poster_path
  }`;
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div style={{ position: 'relative' }}>
          <img className={styles.img} src={image} alt="poster" />
          <div className={styles.countBg}>
            <p className={styles.count}>{index + 1}</p>
          </div>
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>{movie.title}</h3>
          <p>{movie.overview}</p>
        </div>
      </div>
      <div
        className={styles.bgImage}
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className={styles.bgDrop} />
    </div>
  );
}

export default MovieCard;
