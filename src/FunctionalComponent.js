import React, { useState } from "react";

function FunctionalComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        Hello {count}, selamat belajar
      </p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default FunctionalComponent;
