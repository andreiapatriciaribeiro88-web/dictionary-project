import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "a9taa49fcab393c9d77od70f76b07b85";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}
`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      {" "}
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            onChange={handleKeywordChange}
            className="dictionary-input"
          ></input>
        </form>
        <div className="hint">
          suggested words: sunset, wine, yoga, plant...{" "}
        </div>{" "}
        <Results results={results} />
      </section>
    </div>
  );
}
