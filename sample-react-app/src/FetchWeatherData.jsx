import React, { useEffect, useState } from 'react';

function FetchWeatherData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fake the fetch call with a dummy object
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          location: {
            name: 'London',
          },
          current: {
            temp_c: 20,
          },
        });
      }, 2000);
    })
    .then(data => setData(data));
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h2>{data.location.name}</h2>
          <p>{data.current.temp_c}°C</p>
        </div>
      ) : (
        'Loading... Weather'
      )}
    </div>
  );
}

export default FetchWeatherData;