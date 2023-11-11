import { useState, useEffect } from 'react';

function useApi(baseUrl, endpoint) {
  const [loading, setLoading] = useState(false);

  const fetchApi = async () => {
    setLoading(true);
    const url = baseUrl.replace('5173', '5063') + endpoint;
    try {
          const response = await fetch(url);
          setLoading(false);
          return await response.json();
      } catch (error) {
          setLoading(false);
          throw error;
      }
  };

  return { fetchApi, loading };
}

export default useApi;