import React, { useState } from 'react';

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => setChangeText(true);

  return (
    <div>
      <h2>Hello Word!</h2>
      <p>{changeText ? 'Changed!' : 'It & lsquo;s good to see you!'}</p>
      <button type="button" onClick={changeTextHandler}>
        Change Text
      </button>
    </div>
  );
};

export default Greeting;
