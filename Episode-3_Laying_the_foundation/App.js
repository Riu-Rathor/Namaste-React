import React from "react";
import ReactDOM from "react-dom/client";

// React element
// const heading = React.createElement("h1", {id: "heading"}, "Namaste React🚀!")

const jsxHeading = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX🚀!
  </h1>
);

// React component
// Class based component - OLD
// Functional Component - NEW

const Title = () => {
  return <h1>This is title</h1>;
};
const number = 1000;
const HeadingComponent = () => {
  return (
    <div>
        {number/2}
      {Title()}
      <h1>Namaste React Functional Component 🚀</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
