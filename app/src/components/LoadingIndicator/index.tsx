import React from 'react';
import styles from './styles.module.css';

function LoadingIndicator({ size }: { size: number | undefined }) {
  return (
    <div
      className={styles.loader}
      style={
        size
          ? {
              height: size + 'px',
              width: size + 'px',
            }
          : undefined
      }
    />
  );
}

export default LoadingIndicator;
