import React from "react";
import Display from "components/Display";
import KeyPad from "containers/KeyPad";
import History from "containers/History";
import { Container, Wrapper } from "./components";
import useCalculation from "./useCalculation";

export default function Home() {
  const { example, setExample, history, updateHistory, onPressKey } =
    useCalculation();

  return (
    <Container>
      <Wrapper>
        <Display text={example} />
        <KeyPad onPressKey={onPressKey} />
      </Wrapper>
      <History
        history={history}
        setExample={setExample}
        updateHistory={updateHistory}
      />
    </Container>
  );
}
