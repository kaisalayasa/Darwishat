import React, { useState, useEffect } from 'react';
import styles from './PoemPage.module.css'; 

function PoemPage() {
  const [fetchedPoem, setFetchedPoem] = useState(null);

  const fetchPoem = async () => {
    try {
      const response = await fetch("https://poetrydb.org/random");
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();
      const poemData = data[0];

   
      if (poemData.lines.length < 9) {
        setFetchedPoem(poemData);
      } else {
        fetchPoem(); 
      }
    } catch (error) {
      console.error("Error fetching poem:", error);
    }
  };

  useEffect(() => {
    fetchPoem();
  }, []);

  return (
    <div className={styles.poem_container}>
      <h1 className={styles.poem_title}>Poem of the Day</h1>
      {fetchedPoem ? (
        <div>
          <h2 className={styles.poem_title}>{fetchedPoem.title}</h2>
          <h4 className={styles.poem_author}>By {fetchedPoem.author}</h4>
          <pre className={styles.poem_text}>{fetchedPoem.lines.join("\n")}</pre>
        </div>
      ) : (
        <p className={styles.loading_text}>Loading poem...</p>
      )}
    </div>
  );
}

export default PoemPage;
