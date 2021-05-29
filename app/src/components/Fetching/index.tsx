import React from 'react';
import LoadingIndicator from '../LoadingIndicator';
import styles from './styles.module.css';

function Fetching({loading, error, children} : {loading: boolean, error: any, children: JSX.Element}) {
  if (loading) {
    return <div className={styles.container}>
      <LoadingIndicator />
    </div>
  }
  if (error) {
    return <div className={styles.container}>
      <p>Oooops! Something went wrong</p>
    </div>
  }
  return children
}

export default Fetching;