import React, { useState } from 'react';
import ListaCamisetas from './components/ListaCamisetas';
import Carrinho from './components/Carrinho';
import camisetasData from './data/camisetas';

import './styles.css';

function App() {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (camiseta) => {
    setCarrinho([...carrinho, camiseta]);
  };

  const removerDoCarrinho = (item) => {
    const novoCarrinho = carrinho.filter(camiseta => camiseta.id !== item.id);
    setCarrinho(novoCarrinho);
  };

  return (
    <div className="app">
      <ListaCamisetas camisetas={camisetasData} onAddToCart={adicionarAoCarrinho} />
      <Carrinho carrinho={carrinho} onRemoverItem={removerDoCarrinho} />
    </div>
  );
}

export default App;
