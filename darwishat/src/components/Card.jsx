import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Card.module.css';

function Card(props) {
  const navigate = useNavigate(); 

  return (
    <div 
      className={styles.card_container}
      style={{ 
        backgroundImage: `url(${props.image})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        cursor: 'pointer' 
      }}
      onClick={() => navigate(props.route)}
    >
      <div>
        <div className={styles.background}>
          <h2 className={styles.infocard}>{props.info}</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
