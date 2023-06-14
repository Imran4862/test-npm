import logo from "./logo.svg";
import "./App.css";

import CustomBtn from "./componet/CustomBtn";
import { useEffect, useState } from "react";

function App(props) {
  const [btnText, setBtnText] = useState("Hello World");

  useEffect(() => {
    setBtnText(props);
    console.log(props);
  }, [props]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <CustomBtn msg={btnText} />
    </div>
  );
}

export default App;
