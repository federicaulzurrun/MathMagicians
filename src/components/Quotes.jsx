import React, { useEffect, useState } from 'react';
import style from '../styles/Quotes.module.css';

const Quote = () => {
  const [quotes, setQuote] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=art', {
          headers: {
            'X-Api-Key': 'CmyK7HiBkpq7mLI5GfrGJA==HclXkpsfJugofkGR',
          },
        });

        if (!response.ok) {
          throw new Error('There was an error with the response');
        }
        const data = await response.json();
        setQuote(data[0]);
      } catch (error) {
        <div className={style.errorDiv}>
          <h4>
            An error has occurred:
            {error}
          </h4>
        </div>;
      }
    };
    fetchData();
  }, [setQuote]);

  const quoteStyle = {
    color: 'black',
    fontSize: '0.8rem',
  };
  return (
    <div className={style.quoteContainer}>
      <h2 className={style.quote}>
        <br />
        <b className={quoteStyle}>
          {quotes.quote}
        </b>
      </h2>
      <h3 className={style.author}>
        By:
        <b>
          {quotes.author}
        </b>
      </h3>
    </div>
  );
};

export default Quote;
