import { useState } from 'react';

import Output from './output';

const Greetings = () => {
  const [count, setCount] = useState(0);
  const [currentText, setCurrentText] = useState(false);
  const handleClick = () => {
    // setCount(count + 2);
    setCurrentText(true);
  };
  return (
    <>
      <p>Hi Malya!</p>
      <h4>How are you doin</h4>
      {currentText && <Output>Hey This is the changed text!</Output>}
      {!currentText && <p>No changes in the text!</p>}
      <button onClick={handleClick}>Change Text</button>
    </>
  );
};

export default Greetings;
