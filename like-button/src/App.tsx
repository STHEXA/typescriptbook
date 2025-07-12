import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <LikeButton />
    </>
  );
}

function LikeButton() {
  const [count, setCount] = useState(999);
  return (
    <span className="likeButton" onClick={() => setCount(count + 1)}>
      ♥{count}
    </span>
  );
}

export default App;
