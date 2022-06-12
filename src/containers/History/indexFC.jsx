import React from "react";
import { useTranslation } from "react-i18next";
import { HistoryButton, ScrollDiv, Title } from "./styled";

const History = ({ history, setExample, updateHistory }) => {
  const { t } = useTranslation();
  const onNoteClick = (note) => () => {
    setExample(note.example);
  };
  const clearHistory = () => {
    updateHistory([]);
  };

  return (
    <ScrollDiv>
      <Title>{t("names.history")}</Title>
      {history.map((note) => (
        <HistoryButton type="button" key={note.id} onClick={onNoteClick(note)}>
          {note.example}
        </HistoryButton>
      ))}
      {history.length > 0 && (
        <HistoryButton type="button" onClick={clearHistory}>
          {t("names.clear")}
        </HistoryButton>
      )}
    </ScrollDiv>
  );
};

export default History;
