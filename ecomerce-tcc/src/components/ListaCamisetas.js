import React from 'react';
import Camiseta from './Camiseta';

const ListaCamisetas = ({ camisetas, onAddToCart }) => {
  return (
    <div className="lista-camisetas">
      <h2>Camisetas Disponíveis</h2>
      {camisetas.map(camiseta => (
        <Camiseta key={camiseta.id} camiseta={camiseta} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default ListaCamisetas;