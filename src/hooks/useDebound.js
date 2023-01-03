import { useEffect, useState } from "react";

const useDebounds = (value, delay) => {
  const [valueDebound, setValueDebound] = useState(value);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setValueDebound(value);
    }, delay);
    return () => {
      clearTimeout(timeOut);
    };
  }, [value]);
  return valueDebound;
};
export default useDebounds;
