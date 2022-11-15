import React from "react";
import { createRoot } from "react-dom/client";
// copy below from here only for TestDome
const TodoItem = (props) => <li onClick={props.onClick}>{props.item.text}</li>;

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items, onItemClick } = this.props;
    return (
      <ul>
        {items.map((item, index) => (
          <TodoItem
            item={item}
            key={index}
            onClick={!item.done ? () => onItemClick(item, event) : null}
          />
        ))}
      </ul>
    );
  }
}

const items = [
  { text: "Buy grocery", done: true },
  { text: "Play guitar", done: false },
  { text: "Romantic dinner", done: false },
];

const App = (props) => (
  <TodoList
    items={props.items}
    onListClick={(event) => console.log("List clicked!")}
    onItemClick={(item, event) => {
      console.log(item, event);
    }}
  />
);

// copy above from here only for TestDome

const rootElement = document.getElementById("root");
createRoot(rootElement).render(<App items={items} />);
