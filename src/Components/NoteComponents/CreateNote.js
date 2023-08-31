import React from "react";
import LinearProgress from "@mui/material/LinearProgress";

const CreateNote = ({ textHandler, saveHandler, inputText }) => {
  const charLimit = 100;
  const charLeft = charLimit - inputText.length;

  return (
    <div className="note" style={{ background: "rgba(255,255,255,0)" }}>
      <textarea
        cols="10"
        rows="5"
        placeholder="Type..."
        maxLength="100"
        onChange={textHandler}
        value={inputText}
      ></textarea>
      <div className="note_footer">
        <span className="label">{charLeft} left</span>
        <button className="note_save" onClick={saveHandler}>
          save
        </button>
      </div>
      <LinearProgress
        className="char_progress"
        variant="determinate"
        value={charLeft}
      />
    </div>
  );
};

export default CreateNote;
