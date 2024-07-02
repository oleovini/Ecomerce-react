import React from 'react';

const Carrinho = ({ carrinho, onRemoverItem }) => {
  return (
    <div className="carrinho">
      <h2>Carrinho</h2>
      <ul>
        {carrinho.map(item => (
          <li key={item.id}>
            {item.nome} - R$ {item.preco.toFixed(2)}
            <button onClick={() => onRemoverItem(item)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Carrinho;