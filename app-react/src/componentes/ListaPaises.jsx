import React from 'react';

const ListaPaises = ({ paises, error }) => {
  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div>
      {paises.map((pais) => (
        <div key={pais.cca3} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
          <h2>{pais.name.common}</h2>
          <p>Capital: {pais.capital ? pais.capital[0] : 'N/A'}</p>
          <p>Population: {pais.population.toLocaleString()}</p>
          <img src={pais.flags.svg} alt={`${pais.name.common} flag`} style={{ width: '100px', height: 'auto' }} />
        </div>
      ))}
    </div>
  );
};

export default ListaPaises;
