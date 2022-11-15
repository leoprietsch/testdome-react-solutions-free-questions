import React from "react";
import { createRoot } from "react-dom/client";
// copy below from here only for TestDome
class Message extends React.Component {
  constructor() {
    super();
    this.state = {
      visibility: false,
    };
  }

  render() {
    return (
      <React.Fragment>
        <a
          onClick={() => this.setState({ visibility: !this.state.visibility })}
          href="#"
        >
          Want to buy a new car?
        </a>
        {this.state.visibility ? <p>Call +11 22 33 44 now!</p> : null}
      </React.Fragment>
    );
  }
}

// copy above from here only for TestDome

const rootElement = document.getElementById("root");
createRoot(rootElement).render(<App />);
