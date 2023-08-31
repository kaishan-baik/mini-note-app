import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
const Note = ({ id, text, deleteNote }) => {
  return (
    <div className="note">
      <div className="note_body">{text}</div>
      <div className="note_footer" style={{ justifyContent: "flex-end" }}>
        <DeleteForeverIcon
          className="note_delete"
          onClick={() => deleteNote(id)}
        />
      </div>
    </div>
  );
};

export default Note;
