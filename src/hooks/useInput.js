import { useState } from 'react';

function useInput(initState) {
  const [value, setValue] = useState(initState);

  const onChange = ({ target }) => {
    setValue(target.value);
  };

  const reset = () => {
    setValue('');
  };

  return {
    value,
    reset,
    onChange,
  };
}

export default useInput;
