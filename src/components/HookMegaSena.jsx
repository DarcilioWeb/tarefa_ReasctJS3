import React, { useState } from 'react';

const HookMegaSena = () => {
  const [numeroSorteado, setNumeroSorteado] = useState('');
  const [numerosSorteados, setNumerosSorteados] = useState([]);

  const sortearNumero = () => {
    if (numerosSorteados.length === 6) {
      alert('Já temos 6 números sorteados!');
      return;
    }

    const numero = Math.floor(Math.random() * 60) + 1;
    setNumeroSorteado(numero);
    setNumerosSorteados([...numerosSorteados, numero]);
  };

  return (
    <div>
      <p>Número sorteado: {numeroSorteado}</p>
      <p>Números sorteados: {numerosSorteados.join(', ')}</p>
      <button onClick={sortearNumero}>Sortear Número</button>
    </div>
  );
};

export default HookMegaSena;
