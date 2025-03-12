import React from 'react';
import styles from './Posting.module.css';

function Posting({ user_poem, index, deletePoem }) {
  
  const isArabic = (text) => {
    return /[\u0600-\u06FF]/.test(text); 
  };

  return (
    <div className={styles.posting_container}>
      <h2 
        className={styles.posting_content} 
        style={{ textAlign: isArabic(user_poem) ? 'right' : 'left' }}
      >
        {user_poem}
      </h2>
      <button className={styles.delete_btn} onClick={() => deletePoem(index)}>Delete</button>
    </div>
  );
}

export default Posting;
