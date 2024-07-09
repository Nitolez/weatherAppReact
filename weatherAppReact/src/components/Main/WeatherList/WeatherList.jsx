import React from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';

const WeatherList = ({ weather }) => {
  return (
    <div>
      <h2>Pronóstico del tiempo para {weather.city.name}</h2>
      <ul className="forms">
        {weather.list.map((item) => (
          <li key={item.dt}>
            <WeatherCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherList;
