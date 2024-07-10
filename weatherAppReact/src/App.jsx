import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './components/Main/Form';
import WeatherList from './components/Main/WeatherList';

const App = () => {
  const [value, setValue] = useState('Madrid'); 
  const [weather, setWeather] = useState(null); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

  const API_key = 'introduce tu api Key'; 

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${value}&units=metric&appid=${API_key}&lang=es`);
        const data = res.data;

        setWeather(data);
      } catch (e) {
        setError('Error al obtener los datos del clima');
        setWeather(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [value]); 

  const handleFormSubmit = (city) => {
    setValue(city);
  };

  return (
    <div>
      <h1>Pronóstico del Tiempo</h1>
      <Form onSubmit={handleFormSubmit} />

      {loading && <div>Cargando...</div>}
      {error && <div>{error}</div>}
      {weather && <WeatherList weather={weather} />}
    </div>
  );
};

export default App;
