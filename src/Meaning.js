import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        <strong>Definition:</strong>
        {props.meaning.definition}
      </p>
      {props.meaning.example && (
        <p>
          <strong>Example:</strong>{" "}
          <em className="example">{props.meaning.example}</em>
        </p>
      )}
      {props.meaning.synonyms && props.meaning.synonyms.length > 0 && (
        <p>
          <strong>Synonyms:</strong> {props.meaning.synonyms.join(", ")}
        </p>
      )}
    </div>
  );
}
