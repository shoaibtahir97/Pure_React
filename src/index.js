import React from "react";
import ReactDOM from "react-dom";

function HelloWorld() {
  return (
    <div>
      <Hello /> <World /> !
    </div>
  );
}

function Hello() {
  return <span>Hello</span>;
}

function World() {
  return <span>Shoaib</span>;
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
