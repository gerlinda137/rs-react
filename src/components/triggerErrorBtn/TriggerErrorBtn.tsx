import { useState } from 'react';

const TriggerErrorBtn = () => {
  const [error, setError] = useState(false);

  const throwError = () => {
    setError(true);
  };

  if (error) {
    throw new Error('You have triggered an error');
  }

  return (
    <button className="error-trigger" onClick={throwError}>
      TriggerErrorBtn
    </button>
  );
};

export default TriggerErrorBtn;
