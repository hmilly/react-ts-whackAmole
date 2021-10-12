import * as React from "react";
import { useState, useEffect } from "react";
const { Container } = require("../styles/Container.styled");
const { Header } = require("../styles/Header.styled");
const { Ul } = require("../styles/Ul.styled");
import Mole from "../components/Mole";

export interface IState {
  count: number;
  start: boolean;
  setCount: (count: number) => void;
}

const IndexPage = () => {
  const [start, setStart] = useState<IState["start"]>(false);
  const [count, setCount] = useState<IState["count"]>(0);

  useEffect(() => {
    if (start) setCount(0);
  }, [start]);

  return (
    <Container>
      <Header>
        <title>Main Page</title>
        <h1>Whack-a-Mole</h1>
        <p>Get him!</p>
        <button onClick={() => setStart(!start)}>
          {start ? "Stop game" : "Start game"}
        </button>
        <p>Score: {count}</p>
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
