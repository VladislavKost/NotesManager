import { useEffect, useState } from "react";
import "./NotesList.css";
import { NoteItem } from "../NoteItem";

export const NotesList = ({
  lastUpdated,
  setLastUpdated,
}: {
  lastUpdated: Date;
  setLastUpdated: (date: Date) => void;
}) => {
  const [notes, setNotes] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch("http://localhost:7070/notes");
      const data = await response.json();
      setNotes(data);
    };

    fetchNotes();
  }, [lastUpdated]);

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} data={note} setLastUpdated={setLastUpdated} />
      ))}
    </div>
  );
};
