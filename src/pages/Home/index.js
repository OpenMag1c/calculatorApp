import React from "react";
import Display from "components/Display";
import KeyPad from "containers/KeyPad";
import History from "containers/History";
import Modal from "components/Modal";
import MessageBox from "components/MessageBox";
import {
  getHistoryFromStorage,
  saveHistoryToStorage,
} from "helpers/localStorage/history";
import solveExample from "helpers/calculation/solveExample";
import { v4 as uuidv4 } from "uuid";
import updateLine from "helpers/updateLine";
import { withTranslation } from "react-i18next";
import { Container, Wrapper } from "./components";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      example: "0",
      history: getHistoryFromStorage(),
      message: "",
      isError: false,
    };
    this.updateHistory = this.updateHistory.bind(this);
    this.onPressKey = this.onPressKey.bind(this);
    this.setIsError = this.setIsError.bind(this);
    this.setExample = this.setExample.bind(this);
  }

  onPressKey(value) {
    return () => {
      const { example, history } = this.state;
      const { t } = this.props;
      if (value === "=") {
        const result = solveExample(example);
        if (Number.isFinite(result)) {
          this.setState({ example: result.toString() });
          this.updateHistory([
            ...history,
            {
              id: uuidv4(),
              example,
            },
          ]);
        } else {
          this.setError(`${t("error.wrong")} ${result}`);
          this.setState({ example: "0" });
        }
      } else {
        const line = updateLine(example, value);
        if (line.length >= 16) {
          this.setError(`${t("error.length")}`);
        } else {
          this.setState({ example: line });
        }
      }
    };
  }

  setExample(example) {
    this.setState({ example });
  }

  setIsError(isError) {
    this.setState({ isError });
  }

  setError(message) {
    this.setIsError(true);
    this.setState({ message });
  }

  updateHistory(history) {
    this.setState({ history });
    saveHistoryToStorage(history);
  }

  render() {
    const { example, history, isError, message } = this.state;
    return (
      <Container>
        <Wrapper>
          <Display text={example} />
          <KeyPad onPressKey={this.onPressKey} />
        </Wrapper>
        <History
          history={history}
          setExample={this.setExample}
          updateHistory={this.updateHistory}
        />
        <Modal active={isError} setActive={this.setIsError}>
          <MessageBox message={message} />
        </Modal>
      </Container>
    );
  }
}

export default withTranslation()(Home);
