import React from "react";
import { createRoot } from "react-dom/client";
// copy below from here only for TestDome
const FocusableInput = (props) => {
  const ref = React.useRef();

  React.useEffect(() => {
    if (props.shouldFocus) ref.current.focus();
  }, []);

  return <input ref={ref} />;
};

// copy above from here only for TestDome

const rootElement = document.getElementById("root");
createRoot(rootElement).render(<FocusableInput />);
