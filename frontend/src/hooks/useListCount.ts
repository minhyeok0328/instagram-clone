import { useCallback } from 'react';
import { useState } from 'react';

function useListCount(initState: number) {
  const [Count, setCount] = useState(initState);
  const onChange = useCallback((Count: number) => {
    setCount(Count);
    return Count;
  }, []);
  return {
    Count,
    setCount,
    onChange,
  };
}

export default useListCount;
