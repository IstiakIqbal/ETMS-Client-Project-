import React from "react";
import Loader from "./components/Elements/Loader";
import Router from "./components/Router";

const App = () => {
  return (
    <div className="App">
      <Router />
      <Loader />
    </div>
  );
};

export default App;
