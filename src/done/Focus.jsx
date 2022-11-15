import React from "react";
import { createRoot } from "react-dom/client";
// copy below from here only for TestDome
class Input extends React.PureComponent {
  render() {
    let { forwardedRef, ...otherProps } = this.props;
    return <input {...otherProps} ref={forwardedRef} />;
  }
}

const TextInput = React.forwardRef((props, ref) => {
  return <Input {...props} forwardedRef={ref} />;
});

class FocusableInput extends React.Component {
  constructor(props) {
    super(props);
  }
  ref = React.createRef();

  render() {
    return <TextInput ref={this.ref} />;
  }

  // When the focused prop is changed from false to true,
  // and the input is not focused, it should receive focus.
  // If focused prop is true, the input should receive the focus.
  // Implement your solution below:
  componentDidUpdate(prevProps) {
    if (!prevProps.focused && this.props.focused) this.ref.current.focus();
  }

  componentDidMount() {
    if (this.props.focused) this.ref.current.focus();
  }
}

FocusableInput.defaultProps = {
  focused: false,
};

const App = (props) => <FocusableInput focused={props.focused} />;

// copy above from here only for TestDome

const rootElement = document.getElementById("root");
createRoot(rootElement).render(<App focused={true} />);
