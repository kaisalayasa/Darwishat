import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Card.module.css';

function Card(props) {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div 
      className={styles.card_container}
      style={{ 
        backgroundImage: `url(${props.image})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        cursor: 'pointer' // Make it look clickable
      }}
      onClick={() => navigate(props.route)} // Navigate to the given route on click
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
