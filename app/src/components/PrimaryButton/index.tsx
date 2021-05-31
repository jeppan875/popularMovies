import React from 'react';
import styles from './styles.module.css';
import LoadingIndicator from '../LoadingIndicator';

function PrimaryButton({
  text,
  loading,
  onClick,
}: {
  text: string;
  loading: boolean | undefined;
  onClick: () => void;
}) {
  return (
    <button className={styles.button} onClick={loading ? () => null : onClick}>
      <span style={{ opacity: loading ? 0 : 1 }}>{text}</span>
      {loading && (
        <div className={styles.centerAbsolute}>
          <LoadingIndicator size={18} />
        </div>
      )}
    </button>
  );
}

export default PrimaryButton;
