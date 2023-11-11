import React, { useState, useEffect } from 'react';
import useApi from './useApi';
import { WeatherData } from './Types';

function FetchWeatherData() {
  const baseUrl = window.location.origin;
  const endpoint = '/weatherforecast';
  const { fetchApi, loading } = useApi(baseUrl, endpoint);
  const [forecast, setForecast] = useState<WeatherData[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchApi()
      .then(data => setForecast(data))
      .catch(error => setError('Failed Fetch' + error)); 
  }, []);

  return (
    <div>
      <div>
        <h2>Weather Forecast</h2>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <ol>
            {forecast.map((item, index) => (
              <li key={index}>
                {item.date}: {item.temperatureC}°C ({item.summary})
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

export default FetchWeatherData;
