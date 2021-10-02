import "./App.css";
import React, { useState } from "react";
function App() {
  const [defaultValue, setDefaultValue] = useState("");
  const [label, setLabel] = useState("");
  const [choiceText, setChoiceText] = useState("");
  const handleLabelChange = (evt) => {
    setLabel(evt.target.value);
  };

  const handleDefValueChange = (evt) => {
    setDefaultValue(evt.target.value);
  };

  const handleChoiceTextChanges = (evt) => {
    setChoiceText(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(choiceText.split(/\n/));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Label:
          <input
            value={label}
            onChange={handleLabelChange}
            type="text"
            name="label"
          />
        </label>
        <label>
          Type:
          <select name="seltype">
            <option value="multi-select">multi-select</option>
            <option value="single-select">single-select</option>
          </select>
        </label>
        <label>
          Default Value:
          <input
            value={defaultValue}
            onChange={handleDefValueChange}
            type="text"
            name="defaultvalue"
          />
        </label>
        <label>
          Choices
          <textarea 
          value={choiceText} 
          onChange={handleChoiceTextChanges}
          cols={5}></textarea>
        </label>
        <label>
          Order:
          <select name="seltype">
            <option value="alphabetical">Display choices in alphabetical</option>
            <option value="whatever">whatever the fk</option>
          </select>
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default App;
