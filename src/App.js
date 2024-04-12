import logo from "./logo.svg";
import "./App.css";
import Resume from './Resumes.js';
//import Suggestion from "./Suggestions";
// const allData = require("./data.json");
// const allData = require("./resumedata.json");
const allData = require('./resumedata.json');

function App() {
  console.log(allData);
  return (
    <>
      {
        allData.map(function (rdata){
          return <Resume 
          //r_image={rdata.image}
          r_name={rdata.name}
          r_address={rdata.address}
          r_phone={rdata.phone}
          r_email={rdata.email}
          r_linkedin={rdata.linkedin}
          r_website={rdata.website}
          r_additionalskill={rdata.additionalskill}
          r_professionalsummary={rdata.professionalsummary}
          r_workexprience={rdata.workexprience}
          r_educationdetails={rdata.educationdetails}
          r_language={rdata.language}
          r_workexdate={rdata.workexdate}
          r_educationdate={rdata.educationdate}/>
        })
        
      // allData.map(function (suggest) {
      //   return <Suggestion suggestionPic={suggest.suggestPic} suggestionName={suggest.suggestName} />
        
      // })
      // }
      
      }
    </>
  );  
}

export default App;