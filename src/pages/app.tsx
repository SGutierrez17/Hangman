import React, { useState, useEffect } from 'react';

import { Box, Paper } from '@mui/material';
import PalabraSeleccionada from '../organisms/palabra-seleccionada';
import Tablero from '../organisms/tablero';

const App: React.FC = () => {
  const [palabra] = useState<string>('ingeniero'); 
  const [letraSeleccionadas, setLetraSeleccionadas] = useState<string[]>([]);
  const [attempts, setAttempts] = useState<number>(6); 
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [win, setWin] = useState<boolean>(false);

  useEffect(() => {
    const uniqueLetters: string[] = [];
    for (const letra of palabra.split('')) {
      if (!uniqueLetters.includes(letra)) {
        uniqueLetters.push(letra);
      }
    }
    if (attempts <= 0) {
      setGameOver(true);
    } else if (uniqueLetters.every(letra => letraSeleccionadas.includes(letra))) {
      setWin(true);
      setGameOver(true);
    }
  }, [letraSeleccionadas, attempts, palabra]);

  const handleLetterClick = (letter: string) => {
    if (!gameOver && !letraSeleccionadas.includes(letter)) {
      setLetraSeleccionadas([...letraSeleccionadas, letter]);
      if (!palabra.includes(letter)) {
        setAttempts(attempts - 1);
      }
    }
  };
  const resetGame = () => {
    setLetraSeleccionadas([]);
    setAttempts(6);
    setGameOver(false);
    setWin(false);
  };

  return (
    <Box sx={{display: 'flex', textAlign: 'center', margin: '100px', fontSize: 'large'}}>
      <Paper sx={{background:'#CACACA'}}>
      <h1>EL AHORCADO</h1>
      {gameOver ? (
        <div>
          {win ? <p>¡Felicidades! Has ganado.</p> : <p>Game Over. La palabra era: {palabra}</p>}
          <button onClick={resetGame}>Reiniciar Juego</button>
        </div>
      ) : (
        <div style={{padding:'30px'}}>
          <PalabraSeleccionada palabra={palabra} letraSeleccionadas={letraSeleccionadas} intentosFallidos={attempts} />
          <Box>
          <Tablero onLetterClick={handleLetterClick} letraSeleccionadas={letraSeleccionadas} />
          </Box>
          <div>Intentos restantes: {attempts}</div>
        </div>
      )}
      </Paper>
    </Box>
  );
};

export default App;

