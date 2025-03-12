import React, { useState, useEffect } from 'react';
import styles from "./BoardPage.module.css";
import Posting from '../components/Posting';

function BoardPage() {
  const [userInput, setUserInput] = useState('');
  const [poems, setPoems] = useState([]);

 
  useEffect(() => {
    const savedPoems = JSON.parse(localStorage.getItem('poems')) || [];
    setPoems(savedPoems);
  }, []);

  const isArabic = (text) => {
    return /[\u0600-\u06FF]/.test(text);
  };

  const newPoem = () => {
    if (userInput.trim() !== '') {
      const updatedPoems = [...poems, userInput];
      setPoems(updatedPoems);
      localStorage.setItem('poems', JSON.stringify(updatedPoems)); 
      setUserInput('');
    }
  };

  const deletePoem = (index) => {
    const updatedPoems = poems.filter((_, i) => i !== index);
    setPoems(updatedPoems);
    localStorage.setItem('poems', JSON.stringify(updatedPoems)); 
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.posting_container}>
        {poems.map((poem, index) => (
          <Posting 
            key={index} 
            user_poem={poem} 
            index={index} 
            deletePoem={deletePoem} 
          />
        ))}
      </div>

      <div className={styles.input_container}>
        <input 
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput} 
          className={styles.input} 
          type="text" 
          placeholder="write a poem                                      اكتب بيت"
          style={{ textAlign: isArabic(userInput) ? 'right' : 'left' }} 
        /> 
        <button onClick={newPoem} className={styles.submit_btn}> send </button>
      </div>
    </div>
  );
}

export default BoardPage;
