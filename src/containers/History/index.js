import React from "react";
import { withTranslation } from "react-i18next";
import { HistoryButton, ScrollDiv, Title } from "./styled";

class History extends React.Component {
  onNoteClick = (note) => () => {
    const { setExample } = this.props;
    setExample(note.example);
  };

  render() {
    const { t, history, updateHistory } = this.props;
    return (
      <ScrollDiv>
        <Title>{t("names.history")}</Title>
        {history.map((note) => (
          <HistoryButton
            type="button"
            key={note.id}
            onClick={this.onNoteClick(note)}
          >
            {note.example}
          </HistoryButton>
        ))}
        {history.length > 0 && (
          <HistoryButton type="button" onClick={() => updateHistory([])}>
            {t("names.clear")}
          </HistoryButton>
        )}
      </ScrollDiv>
    );
  }
}

export default withTranslation()(History);
