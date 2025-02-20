import './App.css';
import React, { useState } from 'react';

function App() {
  const [text, setText] = useState("Enter Text");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const toUpperCase = () => {
    setText(text.toUpperCase());
  };

  const toLowerCase = () => {
    setText(text.toLowerCase());
  };

  const toggleBold = () => {
    setIsBold(!isBold);
  };

  const toggleItalic = () => {
    setIsItalic(!isItalic);
  };

  const toggleUnderline = () => {
    setIsUnderline(!isUnderline);
  };

  const clearText = () => {
    setText("");
  };

  return (
    <>
      <header>
        <h1>Text Editor</h1>
      </header>
      <main>
        <div className="left">
          <h3>Write Your Text</h3>
          <div className="content">
            <textarea value={text} onChange={handleChange} />
          </div>
          <div className="buttons">
            <button className="btn" onClick={toUpperCase}>Uppercase</button>
            <button className="btn" onClick={toLowerCase}>Lowercase</button>
            <button className="btn" onClick={toggleBold}>Bold</button>
            <button className="btn" onClick={toggleItalic}>Italic</button>
            <button className="btn" onClick={toggleUnderline}>Underline</button>
            <button className="btn clear" onClick={clearText}>Clear</button>
          </div>
        </div>
        <div className="right">
          <h3>Preview</h3>
          <div
            className="conPreview"
            style={{
              fontWeight: isBold ? "bold" : "normal",
              fontStyle: isItalic ? "italic" : "normal",
              textDecoration: isUnderline ? "underline" : "none",
            }}
          >
            {text}
          </div>
          <div className='Counter'>
          <h4> Words: {text.trim().split(/\s+/).length}</h4>
          <h4> Chars: {text.length}</h4>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
