
import React from 'react';
import { useFetch } from '../hooks/useFetch';
import LoadingPage from './LoadingPage';

const PageProvider = ({url, render}) => {
  const [data, loading, error] = useFetch({url})
  return (
      <>
        {
          loading
            ? <LoadingPage />
            : error
              ? <h1>error</h1>
              : data
                ? render(data)
                : null
        }
      </>
  );
}

export default PageProvider;
