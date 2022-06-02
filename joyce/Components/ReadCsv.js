import { useState } from "react";
import fs from "fs";
export default function ReadCSV() {
  const [file, setFile] = useState();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(file.name);
    const content = fs.readFile(file.name);
    console.log(content);
  };
  const handleOnChnage = (e) => {
    console.log(e.target.files);
    setFile(e.target.files[0]);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>REACTJS CSV IMPORT EXAMPLE </h1>
      <form>
        <input type={"file"} accept={".csv"} onChange={handleOnChnage} />
        <button
          onClick={(e) => {
            handleOnSubmit(e);
          }}
        >
          IMPORT CSV
        </button>
      </form>
    </div>
  );
}
