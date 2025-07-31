import "./App.css";
import { useState } from "react";

function App() {
  return (
    <>
      <Likebutton />
    </>
  );
}

function Likebutton() {
  const [cnt, setCount] = useState(0);
  const handleClick = () => {
    setCount(cnt + 1);
  };
  return (
    <span className="likebutton" onClick={handleClick}>
      ♥ {cnt}
    </span>
  );
}

export default App;
