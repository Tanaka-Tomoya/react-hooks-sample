import React, { useState, useEffect } from "react";

const useNumberStatus = number => {
  const [isAho, setAho] = useState(null);
  useEffect(() => {
    function hoge(number) {
      if (number % 3 === 0) {
        setAho(true);
      } else {
        setAho(false);
      }
      return () => {
        setAho(null);
      };
    }
    hoge(number);
    return () => {
      setAho(null);
    };
  }, [isAho, number]);
  return isAho;
};

function App() {
  const [count, setCount] = useState(() => {
    const num = 1;
    return num;
  });
  const isAho = useNumberStatus(count);
  console.log(isAho);
  return (
    <div>
      <p>{count}</p>
      {isAho ? "アホ" : ""}
      <br />
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App;
