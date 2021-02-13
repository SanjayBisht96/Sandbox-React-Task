import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

/*
  Instructions:
    Assume you're creating an app that allows the user to 
    post status updates (ala Twitter). Your UI should have a
    textarea and a button. The button should be disabled if the
    length of the textarea is 0 or greater than 240 characters.
    The document's title should inform the user on how many
    characters they have left to type before they hit the 240
    character limit - "115 characters left."
*/

function App() {
  const [textAreaVal, setTextAreaVal] = useState("");
  const [numberOfCharLeft, setInstruction] = useState(241);
  React.useEffect(() => {
    console.log(textAreaVal.length);
    if (textAreaVal.length < 241) {
      if (textAreaVal.length === 0) {
        setInstruction((numberOfCharLeft) => 241);
      } else {
        setInstruction((numberOfCharLeft) => 240 - textAreaVal.length);
      }
    }
  }, [textAreaVal]);

  return (
    <div className="App">
      <label>Enter value : </label>
      <textarea
        value={textAreaVal}
        onChange={(e) => {
          if (e.target.value.length < 241) setTextAreaVal(e.target.value);
        }}
      />
      {textAreaVal.length === 0 || numberOfCharLeft === 0 ? (
        ""
      ) : (
        <div>
          {numberOfCharLeft} characters left
          <button>Submit</button>
        </div>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
