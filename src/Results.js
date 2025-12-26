import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <p>
          <em>{props.results.phonetic}</em>
        </p>
        <Meaning meaning={props.results.meanings[0]} />
      </div>
    );
  } else {
    return null;
  }
}
