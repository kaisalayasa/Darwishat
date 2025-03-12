import React from 'react';
import Card from '../components/Card';
import styles from './HomePage.module.css';
import darwish_podem from '../assets/darwish_podem.jpeg';
import darwishdark from '../assets/darwishdark.jpg';

function HomePage() {
  return (
    <>
      <div className={styles.main}>
        <br />
        <h1>عَلَى هَذِهِ الأَرْضِ مَا يَسْتَحِقُّ الحَيَاةَ</h1>
      </div>

      <div className={styles.image_container}> 
        <div className={styles.card_container}>
          <Card info="Poem of the Day" image={darwish_podem} route="/poem" />
          <Card info="Darwishat Board" image={darwishdark} route="/board" />
        </div>
      </div>
    </>
  );
}

export default HomePage;
