import * as React from "react";
import { useState, useEffect } from "react";
const { Container } = require("../styles/Container.styled");
const { Header } = require("../styles/Header.styled");
const { Ul } = require("../styles/Ul.styled");
import Mole from "../components/Mole";

export interface IStates {
  count: number;
  start: boolean;
  setCount: (count: number) => void;
}
interface IState {
  countdown: number;
}

const IndexPage = () => {
  const [start, setStart] = useState<IStates["start"]>(false);
  const [count, setCount] = useState<IStates["count"]>(0);
  const [countdown, setCountdown] = useState<IState["countdown"]>(60);

  useEffect(() => {
    if (start && countdown > 0) {
      setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (!start || countdown === 0) {
      setCountdown(60);
      setStart(false);
    }
  });

  useEffect(() => {
    if (start) setCount(0);
  }, [start]);

  return (
    <Container>
      <Header btnCol={start ? "red" : "green"}>
        <title>Main Page</title>
        <h1>Whack-a-Mole</h1>
        <p>Get him!</p>
        <button onClick={() => setStart(!start)}>
          {start ? "Stop game" : "Start game"}
        </button>
        <div>
          <p>Count:</p>
          <p>{countdown}</p>
          <p>Score:</p>
          <p>{count}</p>
        </div>
      </Header>
      <Ul>
        <Mole count={count} setCount={setCount} start={start} />
        <Mole count={count} setCount={setCount} start={start} />
        <Mole count={count} setCount={setCount} start={start} />
        <Mole count={count} setCount={setCount} start={start} />
        <Mole count={count} setCount={setCount} start={start} />
        <Mole count={count} setCount={setCount} start={start} />
        <Mole count={count} setCount={setCount} start={start} />
        <Mole count={count} setCount={setCount} start={start} />
        <Mole count={count} setCount={setCount} start={start} />
      </Ul>
    </Container>
  );
};

export default IndexPage;
