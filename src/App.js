import { useState } from "react";
import "./index.css";

export default function App() {
  const [text, setText] = useState("");
  const [listItems, setListItems] = useState([]);

  function handleSubmit(newItem) {
    setListItems((items) => [...items, newItem]);
    setText("");
  }

  function onDelete(itemToRemove) {
    const newListItems = listItems.filter((li) => li !== itemToRemove);
    setListItems(newListItems);
  }

  return (
    <div>
      <h1>Shopping List</h1>
      <div className="shopping-list">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(text);
          }}
        >
          <h2>Item To Add</h2>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button>Add</button>
        </form>
        <ul>
          <List text={text} list={listItems} onDelete={onDelete} />
        </ul>
      </div>
    </div>
  );
}

function List({ text, list, onDelete }) {
  return list.map((li, i) => (
    <li value={i}>
      {li}
      <button onClick={() => onDelete(li)} className="delete">
        X
      </button>
    </li>
  ));
}
