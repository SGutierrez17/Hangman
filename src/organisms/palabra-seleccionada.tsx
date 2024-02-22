import React from 'react';

import Intento1 from '../images/Group 1.svg';
import Intento2 from '../images/Group 2.svg';
import Intento3 from '../images/Group 3.svg';
import Intento4 from '../images/Group 4.svg';
import Intento5 from '../images/Group 5.svg';
import Intento6 from '../images/Group 6.svg';

interface Props {
  palabra: string;
  letraSeleccionadas: string[];
  intentosFallidos: number;
}

const PalabraSeleccionada: React.FC<Props> = ({ palabra, letraSeleccionadas, intentosFallidos }) => {
  const displayWord = palabra.split('').map((letra) => letraSeleccionadas.includes(letra) ? letra : '_').join(' ');

  const getHangmanImage = (intentosFallidos: number): string => {
    const images = [
      Intento6,
      Intento5,
      Intento4,
      Intento3,
      Intento2,
      Intento1,
    ];

    const imageIndex = Math.min(intentosFallidos, images.length - 1);
    
    return images[imageIndex];
  };

  return (
    <div>
      <div>{displayWord}</div>
      <img style={{margin:'20px'}} src={getHangmanImage(intentosFallidos)} alt={`Hangman ${intentosFallidos} attempt(s)`} />
    </div>
  );
};

export default PalabraSeleccionada;

