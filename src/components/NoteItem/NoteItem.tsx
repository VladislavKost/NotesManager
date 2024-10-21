import "./NoteItem.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export const NoteItem = ({
  data,
  setLastUpdated,
}: {
  data: { id: string; text: string };
  setLastUpdated: (date: Date) => void;
}) => {
  const handleDeleteNoteItemClick = async (id: string) => {
    const result = await fetch(`http://localhost:7070/notes/${id}`, {
      method: "DELETE",
    });
    if (result.ok) {
      console.log("Note deleted");
      setLastUpdated(new Date());
    } else {
      console.log("Note not deleted");
    }
  };
  return (
    <div className="note-item-container">
      <button className="note-item-delete-button">
        <HighlightOffIcon
          className="note-item-delete"
          fontSize="large"
          onClick={() => handleDeleteNoteItemClick(data.id)}
        />
      </button>
      <div className="note-item">
        <div>{data.text}</div>
      </div>
    </div>
  );
};
