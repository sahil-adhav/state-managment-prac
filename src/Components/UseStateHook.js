import React, { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(1611);
  return <div className="useState-hook">UseStateHook</div>;
};

export default UseStateHook;
