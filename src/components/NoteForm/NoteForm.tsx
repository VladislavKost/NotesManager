import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import "./NoteForm.css";

let id = 0;

export const NoteForm = ({
  setLastUpdated,
}: {
  setLastUpdated: (date: Date) => void;
}) => {
  const [textInput, setTextInput] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      id: id++,
      text: textInput,
    };
    const result = await fetch("http://localhost:7070/notes", {
      headers: {
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
    if (result.ok) {
      setTextInput("");
      setLastUpdated(new Date());
    }
  };

  return (
    <div>
      <form className="form-group" onSubmit={handleSubmit}>
        <div className="form-input-group">
          <label htmlFor="note">Новая заметка</label>
          <textarea
            className="note-input"
            placeholder="Текст заметки"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
        </div>
        <button className="note-submit-button" type="submit">
          <SendIcon className="note-submit-icon" fontSize="large" />
        </button>
      </form>
    </div>
  );
};
