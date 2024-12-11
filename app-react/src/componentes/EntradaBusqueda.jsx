import React from 'react';

const EntradaBusqueda = ({ terminoBusqueda, alCambiarTerminoBusqueda }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Buscar País:</h2>
      <input
        type="text"
        placeholder="Escribe el nombre de un pais..."
        value={terminoBusqueda}
        onChange={(e) => alCambiarTerminoBusqueda(e.target.value)}
        style={{ padding: '10px', width: '100%' }}
      />
    </div>
  );
};

export default EntradaBusqueda;
