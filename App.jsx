import { useState } from 'react';
import './App.css';
import Button from './mybotton';

function App() {
  const [x, setX] = useState(0);
  const [color, setColor] = useState('black'); 

  const increment = () => {
    const newValue = x + 1;
    setX(newValue);
    if (newValue > 0) setColor('green');
    else if (newValue < 0) setColor('red');
    else setColor('black');
  };

  const decrement = () => {
    const newValue = x - 1;
    setX(newValue);
    if (newValue > 0) setColor('green');
    else if (newValue < 0) setColor('red');
    else setColor('black');
  };

  const reset = () => {
    setX(0);
    setColor('black');
  };

  return (
    <div>
      <div style={{ color, fontSize: '24px', marginBottom: '10px' }}>
        Le changement : {x}
      </div>
      <Button onClick={increment} label="Incrémenter" />
      <Button onClick={decrement} label="Décrémenter" />
      <Button onClick={reset} label="Reset" />
    </div>
  );
}

export default App;




