import React, { useEffect, useState } from 'react';
import './Quotes.css';

const Quote = () => {
  const [quotes, setQuote] = useState([]);
  const [loading, setLoading] = useState([true]);
  const [error, setError] = useState(null);

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
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [setQuote]);

  const quoteStyle = {
    color: 'black',
    fontSize: '0.8rem',
  };

  if (loading) {
    return (
      <div className="loading-div">
        <h4 className={quoteStyle}>Generating quote...</h4>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-div">
        <h4 className={quoteStyle}>
          An error has occurred:
          {' '}
          {error}
        </h4>
      </div>
    );
  }

  return (
    <div className="quote-container">
      <h2 className="quote">
        <br />
        <b className={quoteStyle}>
          {quotes.quote}
        </b>
      </h2>
      <h3 className="author">
        By:
        <b>
          {quotes.author}
        </b>
      </h3>
    </div>
  );
};

export default Quote;
