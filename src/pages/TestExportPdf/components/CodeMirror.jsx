import React from "react";
import CodeMirror from "react-codemirror";
import createReactClass from "create-react-class";
import "codemirror/mode/javascript/javascript";

var App = createReactClass({
  getInitialState: function () {
    console.log("this.props", this.props);
    return {
      readOnly: true,
      height: "800px",
      code: this.props.code,
    };
  },
  updateCode: function (newCode) {
    this.setState({
      code: newCode,
    });
  },
  render: function () {
    var options = {
      lineNumbers: true,
    };
    return (
      <CodeMirror
        value={this.state.code}
        onChange={this.updateCode}
        options={options}
      />
    );
  },
});

export default App;
