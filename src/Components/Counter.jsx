import { useEffect, useState } from "react";
import { Child } from "./Child";

export const Counter = () => {
  let [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect( () => {
    console.log("I will be executed first of all")
  }, [])

  console.log("I'm first");
  console.log("I'm second");
  return (
    <div>
      <div>{count}</div>
      <button onClick={handleClick}>Increment</button>
      <Child gift={"toffee"}/>
    </div>
  );
};
