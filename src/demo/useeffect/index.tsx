import React, { useEffect, useState, MouseEvent } from "react";

export default function UseEff() {
  const [a, setA] = useState(1);
  useEffect(() => {
    document.title = `${a}-${Math.floor(Math.random() * 100)}`;
  });
  const handlTitle = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e);

    setA(a + 1);
  };
  return (
    <div>
      <button onClick={handlTitle}>修改title</button>
    </div>
  );
}
