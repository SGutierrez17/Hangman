import React from 'react';

interface Props {
  onLetterClick: (letra: string) => void;
  letraSeleccionadas: string[];
}

const Tablero: React.FC<Props> = ({ onLetterClick, letraSeleccionadas }) => {
  const letras = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return (
    <div>
      {letras.map((letra) => (
        <button
          style={{margin: '2px', padding: '10px 20px'}}
          key={letra}
          onClick={() => onLetterClick(letra)}
          disabled={letraSeleccionadas.includes(letra)}
        >
          {letra.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default Tablero;
