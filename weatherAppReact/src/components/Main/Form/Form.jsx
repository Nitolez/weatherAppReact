import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        name="form"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Introduce el nombre de la ciudad"
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default Form;

