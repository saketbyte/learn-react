// The name of custom hook must start with "use", it tells react that it is going to be used as a custom hook which is eligible to use inbuilt hooks.

import { useEffect, useState } from "react";

const useCounter = (backwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!backwards) setCounter((prevCounter) => prevCounter + 1);
      else setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [backwards]);
  return counter;
};

export default useCounter;
