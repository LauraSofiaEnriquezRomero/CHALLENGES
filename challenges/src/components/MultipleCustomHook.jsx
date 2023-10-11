import React from 'react';
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';

export const MultipleCustomHook = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);

  return (
    <>
      <h1>MultipleCustomHook</h1>
      <hr />
      {isLoading ? (
        <div className="alert alert-info text-center">
          Loading...
        </div>
      ) : (
        <blockquote className='blockquote text-end'>
          {data ? (
            <div>
              <p className="mb-1">7+{data[0]?.quote}</p>
              <footer className='blockquote-footer'>
                {data[0]?.author}
              </footer>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </blockquote>

      )}
      <button className="btn btn-primary" onClick={() => increment()}>Next Quote</button>
    </>
  );
};