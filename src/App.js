import logo from "./logo.svg";
import "./App.css";
import Suggestion from "./Suggestions";
const allData = require("./data.json");

function App() {
  console.log(allData);
  return (
    <>
      {
      allData.map(function (suggest) {
        return <Suggestion suggestionPic={suggest.suggestPic} suggestionName={suggest.suggestName} />
        
      })
      }
    </>
  );
}

export default App;
