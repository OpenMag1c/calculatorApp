import React from "react";
import { CLEAR_ALL, HISTORY } from "constants/names";
import { HistoryButton, ScrollDiv, Title } from "./components";

export default React.memo(({ history, setExample, updateHistory }) => {
  const onNoteClick = (note) => {
    setExample(note.example);
  };
  const clearHistory = () => {
    updateHistory([]);
  };

  return (
    <ScrollDiv>
      <Title>{HISTORY}</Title>
      {history.map((note) => (
        <HistoryButton
          type="button"
          key={note.id}
          onClick={() => onNoteClick(note)}
        >
          {note.example}
        </HistoryButton>
      ))}
      {history.length > 0 && (
        <HistoryButton type="button" onClick={clearHistory}>
          {CLEAR_ALL}
        </HistoryButton>
      )}
    </ScrollDiv>
  );
});
