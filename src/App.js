import React, { useState } from "react";
import counterContext from "./CounterContext";
import Parent from "./Parent";
const App = () => {
  const num = useState(0); // curr , fun
  console.log("num===>", num);

  return (
    <counterContext.Provider value={num[0]}>
      <div style={{ textAlign: "center" }}>
        <Parent num={num} />
      </div>
    </counterContext.Provider>
  );
};

export default App;
