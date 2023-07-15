import { useState } from "react";
import "./App.css";

const cssClass = "dynamic-css";

function App() {
  const [customCss, setCustomCss] = useState("");

  const handleDownloadClick = () => {
    const element = document.createElement("a");
    const file = new Blob([`.${cssClass}{${customCss}}`], { type: "text/css" });
    element.href = URL.createObjectURL(file);
    element.download = "dynamic-styles.css";
    element.click();
  };

  const createDynamicStyle = () => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `.${cssClass} {${customCss}}`;
    console.log("css", styleTag);
    document.head.appendChild(styleTag);
  };

  return (
    <div className="mainContainer">
      <div className="boxContainer">
        <div className="textAreaContainer">
          <textarea
            className="textArea"
            cols="70"
            rows="25"
            value={customCss}
            onChange={(e) => {
              setCustomCss(e.target.value);
            }}
          />
          <div className="buttonContainer">
            <button className="button" onClick={createDynamicStyle}>
              Preview
            </button>
            <button className="button" onClick={handleDownloadClick}>
              Download CSS
            </button>
          </div>
        </div>

        <div className="cardContainer">
          <h3>Apply and test CSS classes:</h3>
          <button className={cssClass}>Apply Styles</button>
        </div>
      </div>
    </div>
  );
}

export default App;
