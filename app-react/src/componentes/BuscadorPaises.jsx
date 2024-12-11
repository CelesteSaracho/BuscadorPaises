import React, { useState, useEffect } from 'react';
import EntradaBusqueda from './EntradaBusqueda';
import ListaPaises from './ListaPaises';
import HistorialBusqueda from './HistorialBusqueda';

const BuscadorPaises = () => {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [paises, setPaises] = useState([]);
  const [historialBusqueda, setHistorialBusqueda] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!terminoBusqueda) {
      setPaises([]);
      setError('');
      return;
    }

    const obtenerPaises = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${terminoBusqueda}`);
        
        if (response.ok) {
          const data = await response.json();
          setPaises(data);
          setError('');

          if (data.length > 0) {
            const nombrePais = data[0].name.common;
            setHistorialBusqueda((prev) => {
              const nuevoHistorial = [nombrePais, ...prev];
              return [...new Set(nuevoHistorial)].slice(0, 5);
            });
          }
        } else {
          setPaises([]);
          setError('No se encontraron resultados');
        }
      } catch (err) {
        setError('Error al obtener los datos');
        setPaises([]);
      }
    };

    const timeoutId = setTimeout(obtenerPaises, 1000); //cambie el valor para darme tiempo a escribir
    return () => clearTimeout(timeoutId);
  }, [terminoBusqueda]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Buscador de Paises</h1>
      
      <EntradaBusqueda 
        terminoBusqueda={terminoBusqueda} 
        alCambiarTerminoBusqueda={setTerminoBusqueda} />
      
      <ListaPaises 
        paises={paises} 
        error={error} />

      <HistorialBusqueda 
        historialBusqueda={historialBusqueda} />
    </div>
  );
};

export default BuscadorPaises;
