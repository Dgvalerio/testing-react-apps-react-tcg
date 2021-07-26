import React, { useState } from 'react';

import Output from './Output';

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => setChangeText(true);

  return (
    <div>
      <h2>Hello Word!</h2>
      <Output
        text={changeText ? 'Changed!' : 'It & lsquo;s good to see you!'}
      />
      <button type="button" onClick={changeTextHandler}>
        Change Text
      </button>
    </div>
  );
};

export default Greeting;
