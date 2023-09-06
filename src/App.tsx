import React from "react";
import UseEff from "./demo/useeffect";
import UseTest from "./demo/usestate";

const App: React.FC = () => {
  return (
    <div>
      <UseTest />
      <UseEff />
    </div>
  );
};

export default App;
