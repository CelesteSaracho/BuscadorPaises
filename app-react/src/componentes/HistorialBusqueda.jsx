import React from 'react';

const HistorialBusqueda = ({ historialBusqueda }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Historial de Búsqueda</h3>
      <ul>
        {historialBusqueda.map((pais, index) => (
          <li key={index}>{pais}</li>
        ))}
      </ul>
    </div>
  );
};

export default HistorialBusqueda;
