import { useEffect, useState } from "react";
import "./App.css";
import Pricing from "./components/Pricing";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeWidth);
    return () => window.removeEventListener("resize", resizeWidth);
  });
  return (
    <main className="App">
      <h1>Simple, traffic-based pricing </h1>
      <h2>
        Sign-up for our 30-day trial.{windowWidth < 540 && <br />} No credit
        card required.
      </h2>
      <Pricing windowWidth={windowWidth} />
    </main>
  );
};

export default App;
