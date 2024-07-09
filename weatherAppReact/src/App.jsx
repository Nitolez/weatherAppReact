import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './components/Main/Form';
import WeatherList from './components/Main/WeatherList';

const App = () => {
  const [value, setValue] = useState('Madrid'); // Inicializa con "Madrid"
  const [weather, setWeather] = useState(null); // Para guardar los datos del pronóstico
  const [loading, setLoading] = useState(false); // Para manejar el estado de carga
  const [error, setError] = useState(null); // Para manejar los errores

  const API_key = '82f25798751871eb4b1d98477ad8d702'; // Reemplaza con tu clave API

  // Equivale a un componentDidUpdate()
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        // Petición HTTP
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${value}&units=metric&appid=${API_key}&lang=es`);
        const data = res.data;

        setWeather(data);
      } catch (e) {
        setError('Error al obtener los datos del clima');
        setWeather(null); // No pintes nada 
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [value]); // componentDidUpdate

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
