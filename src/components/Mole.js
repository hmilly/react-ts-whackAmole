import React from "react";
import { useEffect, useState } from "react";
import mole from "../images/mole.png";

const Mole = ({ count, setCount, start }) => {
  const [t, setT] = useState(0);

  const timeout = () => Math.round(Math.random() * (2000 - 200) + 500);

  useEffect(() => {
    if (start && t === 0) {
      const time = timeout();
      setTimeout(() => {
        setT(time);
      }, [time + 2000]);
    } else if (start) {
      const time = timeout();
      setTimeout(() => {
        setT(0);
      }, time);
    } else {
      return;
    }
  }, [t, start]);

  const setScore = () => {
    setT(0);
    if (start) setCount((count += 5));
  };

  return (
    <li>
      {start && t > 0 ? (
        <img src={mole} onClick={() => setScore()} alt="mole" />
      ) : (
        ""
      )}
      <span>🕳️</span>
    </li>
  );
};

export default Mole;
