import { useState } from "react";
import "./App.css";
import LandingPage from "./components/Landing-Page";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default App;
