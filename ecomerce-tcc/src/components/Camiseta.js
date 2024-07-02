import React from 'react';

const Camiseta = ({ camiseta, onAddToCart }) => {
  return (
    <div className="camiseta">
      <h3>{camiseta.nome}</h3>
      <p>{camiseta.descricao}</p>
      <p>Preço: R$ {camiseta.preco.toFixed(2)}</p>
      <button onClick={() => onAddToCart(camiseta)}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default Camiseta;
