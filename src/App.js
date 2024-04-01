import logo from "./logo.svg";
import "./App.css";
import Resume from './Resumes.js';
//import Suggestion from "./Suggestions";
const allData = require("./data.json");

function App() {
  console.log(allData);
  return (
    <>
      // {
      // allData.map(function (suggest) {
      //   return <Suggestion suggestionPic={suggest.suggestPic} suggestionName={suggest.suggestName} />
        
      // })
      // }
      <Resume />
  }
    </>
  );  
}

export default App;
