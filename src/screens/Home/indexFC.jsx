import React from "react";
import useErrorMessage from "hooks/useErrorMessage";
import useCalculation from "hooks/useCalculation";
import Display from "components/Display";
import KeyPad from "containers/KeyPad/indexFC";
import History from "containers/History/indexFC";
import Modal from "components/Modal";
import MessageBox from "components/MessageBox";
import { Container, Wrapper } from "./styled";

const Home = () => {
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
};

export default Home;
