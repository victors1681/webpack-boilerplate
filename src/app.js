import React, { useState } from "react";
import { hot } from "react-hot-loader";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2> Initial App </h2>
      <p>Count is {count}</p>
      <button onClick={() => setCount(count + 1)}>Press Me</button>
    </div>
  );
};
export default hot(module)(App);
