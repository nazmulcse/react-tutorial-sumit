import ReactDOM from "react-dom";

const index = 0;
function Clock({local}) {
  return (
    <h1 className="heading" tabIndex={index}>
      <span className="text">Hello {new Date().toLocaleDateString(local)}</span>
    </h1>
  );
}
ReactDOM.render(<Clock local="bn-BD"/>, document.getElementById("root"));
