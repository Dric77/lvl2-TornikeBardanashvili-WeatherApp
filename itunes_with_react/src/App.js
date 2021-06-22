import { useState } from "react";
import "./App.scss";
import List from "./Components/List";
import Loader from "./Components/Loader";

function App() {
  const [query, setQuery] = useState("Eminem");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState();

  let inputHandler = (e) => {
    setInput(e.target.value);
    // if (e.target.value === "Enter") {
    //   console.log("entered");
    // }
  };
  let submitHandler = () => {
    setQuery(input);
  };

  return (
    <div className="App">
      <header>
        <div className="header-container">
          <input placeholder="Search" value={input} onChange={inputHandler} />
          <button onClick={submitHandler}> Search </button>
        </div>
      </header>
      <Loader loading={loading}>
        <List
          query={query}
          loadHandler={(e) => {
            setLoading(e);
          }}
        />
      </Loader>
    </div>
  );
}

export default App;
