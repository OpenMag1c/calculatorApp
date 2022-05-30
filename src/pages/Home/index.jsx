import React from "react";
import Display from "components/Display";
import KeyPad from "containers/KeyPad";
import History from "containers/History";
import useCalculation from "hooks/useCalculation";
import Modal from "components/Modal";
import MessageBox from "components/MessageBox";
import useErrorMessage from "hooks/useErrorMessage";
import { Container, Wrapper } from "./components";

function Home() {
  const { message, setError, setIsError, isError } = useErrorMessage();
  const { example, setExample, history, updateHistory, onPressKey } =
    useCalculation(setError);

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
      <Modal active={isError} setActive={setIsError}>
        <MessageBox message={message} />
      </Modal>
    </Container>
  );
}

export default Home;
