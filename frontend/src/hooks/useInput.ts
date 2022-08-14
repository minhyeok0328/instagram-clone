import React, { useCallback } from 'react';
import { useState } from 'react';

function useInput(initState: string) {
  const [value, setValue] = useState(initState);
  const onChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setValue(target.value);
    },
    [],
  );

  return {
    value,
    setValue,
    onChange,
  };
}

export default useInput;
