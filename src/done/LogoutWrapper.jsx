/* Acceptable answers
1) context.username in the LogoutWrapper will have "James" as its value.
3) The value of context.username will be "" when LogoutWrapper is not a descendant of SecurityContext.Provider.
5) ControlsComponent can declare multiple instances of SecurityContext.Provider.
*/

import React from "react";
import { createRoot } from "react-dom/client";

const SecurityContext = React.createContext({ username: "", permissions: [] });

const ControlsComponent = (props) => {
  return (
    <SecurityContext.Provider value={{ username: props.username }}>
      <LogoutWrapper></LogoutWrapper>
    </SecurityContext.Provider>
  );
};

const LogoutWrapper = (props) => {
  var context = React.useContext(SecurityContext);

  return (
    <div>
      <p>{context.username}</p>
      <button>Click here to logout</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
createRoot(rootElement).render(<ControlsComponent username="James" />);
