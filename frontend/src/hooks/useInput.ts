import { ChangeEvent, useCallback } from 'react';
import { useState } from 'react';

function useInput<T>(initialState: T) {
  const [value, setValue] = useState<T | string>(initialState || '');
  const onChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      if (target && 'value' in target) {
          setValue(target.value);
      }
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
