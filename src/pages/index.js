import * as React from "react";
import { useState } from "react";
import { Container } from "../styles/Container.styled";
import { Header } from "../styles/Header.styled";
import { Ul } from "../styles/Ul.styled";
import Mole from "../components/Mole";
import { useEffect } from "react";

const IndexPage = () => {
  const [start, setStart] = useState(false);
  const [count, setCount] = useState(0);

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
