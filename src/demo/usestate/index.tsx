// 组件需求：实现一个计数器，有3个按钮，点击后分别实现：恢复默认值、点击+1、点击-1
import React, { useState } from "react";

export default function UseTest() {
  const initcount = 0;
  const [coute, setCoute] = useState(initcount);
  return (
    <div>
      {coute}
      <button onClick={() => setCoute(initcount)}>init</button>
      <button onClick={() => setCoute(coute + 1)}>+1</button>
      <button onClick={() => setCoute(coute - 1)}>-1</button>
      <button
        onClick={() => {
          let num = coute;
          for (let i = 0; i < 3; i++) {
            num += 1;
          }
          setCoute(num);
        }}
      >
        -1
      </button>
    </div>
  );
}
