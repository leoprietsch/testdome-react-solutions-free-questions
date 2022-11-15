import React from "react";
import { createRoot } from "react-dom/client";
// copy below from here only for TestDome
class Username extends React.Component {
  render() {
    const { value } = this.props;
    return <h1>{value}</h1>;
  }
}

function App() {
  const [value, setValue] = React.useState("");
  const ref = React.useRef();
  function clickHandler() {
    setValue(ref.current.value);
  }

  return (
    <div>
      <button onClick={clickHandler}>Change Username</button>
      <input ref={ref} type="text" />
      <Username value={value} />
    </div>
  );
}

// copy above from here only for TestDome

const rootElement = document.getElementById("root");
createRoot(rootElement).render(<App />);
