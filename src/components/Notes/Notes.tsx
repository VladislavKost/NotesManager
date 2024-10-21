import { useState } from "react";

import { NoteForm } from "../NoteForm";
import { NotesList } from "../NotesList";
import UpdateIcon from "@mui/icons-material/Update";

import "./Notes.css";

export const Notes = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const onHandleUpdateClick = () => {
    setLastUpdated(new Date());
  };

  return (
    <div>
      <div className="notes-title">
        <h1>Notes</h1>
        <button
          className="notes-update-button"
          type="button"
          onClick={onHandleUpdateClick}
        >
          <UpdateIcon className="notes-update-icon" fontSize="large" />
        </button>
        <div className="notes-last-updated">
          Обновлено: {lastUpdated.toLocaleString("ru")}
        </div>
      </div>
      <NotesList setLastUpdated={setLastUpdated} lastUpdated={lastUpdated} />
      <NoteForm setLastUpdated={setLastUpdated} />
    </div>
  );
};
