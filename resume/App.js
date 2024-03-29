import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
    <div className="resume" style={{background:"#1f1e2e", marginTop:'20px',marginLeft:'20px',padding:'5px',width:'20%'}}>

    {/* Image */}
    <img src="assets/bio-image.jpg" alt='' style={{height:'300px', width:'250px', margin:'10%',borderRadius:'10px'}}/>
      

    {/* Name div */}
      <div style={{color:'white', margin:'10%', fontSize:'14px'}}>
      <header>
        <h1 style={{marginTop:'-50px',marginBottom:'35px'}}>Darshan Maraviya</h1>
      </header>

    {/* Contact */}
      <section>
        <h3 style={{fontSize:'18px'}}>Contact</h3>
        <h4 style={{marginTop:'-28px'}}>_____________________________________________</h4>

        <h4>Address : </h4>
        <p style={{marginTop:'-20px'}}>177 Great Portalnd Street, London W5W6PQ</p>

        <h4>Phone : </h4>
        <p style={{marginTop:'-20px'}}>+1 (970) 333-3833</p>

        <h4>Email : </h4>
        <p style={{marginTop:'-20px'}}>susan.willams@gmail.com</p>

        <h4>Linkedin : </h4>
        <p style={{marginTop:'-20px'}}>linkedin.com/susan.willams</p>

        <h4>Website : </h4>
        <p style={{marginTop:'-20px'}}>https://www.coolfreecv.com</p>
      </section>


      {/* Additional skills */}
      <section style={{marginTop:'40px'}}>
        <h3 style={{fontSize:'18px'}}>Additional Skill</h3>
        <h4 style={{marginTop:'-28px'}}>_____________________________________________</h4>

        <p style={{marginTop:'20px'}}> - Results-oriented</p>
        <p style={{marginTop:'-11px'}}> - Origanisational capacity</p>
        <p style={{marginTop:'-11px'}}> - Revenue generation</p>
        <p style={{marginTop:'-11px'}}> - Business development</p>
        <p style={{marginTop:'-11px'}}> - Effective marketing</p>
        <p style={{marginTop:'-11px'}}> - Organisational capacity</p>
        <p style={{marginTop:'-11px'}}> - Operability and commitment</p>
        <p style={{marginTop:'-11px'}}> - Ability to motivate staff</p>
        <p style={{marginTop:'-11px'}}> - Maintain good relations</p>
        <p style={{marginTop:'-11px'}}> - Good manners</p>

        
      </section>

      </div>
      

    </div>


    {/* white part */}
    <div className="resume-side" style={{background:"#c6c6cc", marginTop:'20px', marginRight:'20px', padding:'5px',width:'50%'}}>

    {/* Professional Summary */}
    <section style={{marginTop:'30px',marginLeft:'10px'}}>
        <h3 style={{fontSize:'18px'}}>Professional Summary</h3>
        <h4 style={{marginTop:'-28px'}}>_______________________________________________________________________________________________________</h4>
        <p style={{marginTop:'-20px',marginLeft:'13px', fontSize:'0.9rem',marginRight:'13px'}}> Hiring managers skim through resumes before deciding to read them, so candidates who grab their attention from the start stand a better chance of grabbing their attention. This is why you should always include a brief paragraph in your resume header that summarizes your strengths as a candidate.Depending on your experience level, you can choose between a resume summary or a resume objective.Resume objectives focus on professional goals, skills, and motivation for applying for the job, so they’re perfect for students, recent graduates, and other entry-level workers.A resume summary, on the other hand, is perfect for seasoned professionals, as it focuses more on your past work experience and how it relates to the job you’re applying for. So, if you already have some work experience, we recommend sticking to a resume summary.If you’re embarking on a career change, on the other hand, you can choose between a or a resume objective, depending on how your previous skills and work experience relate to the job. </p>
    </section>


    {/* Work Experience */}
    <section style={{marginTop:'40px',marginLeft:'10px'}}>
        <h3 style={{fontSize:'18px'}}>Work Experience</h3>
        <h4 style={{marginTop:'-28px'}}>_______________________________________________________________________________________________________</h4>
        <h4 style={{textAlign:'right',marginTop:'0px',marginRight:'20px',marginBottom:'0px',marginLeft:'0px'}}>5/2020 to 3/2023</h4>
        <b style={{marginLeft:'13px'}}>Store Manage LUXURY CAR CENTER, New York</b>
        <p style={{marginLeft:'18px', fontSize:'0.9rem'}}>
            <p style={{marginTop:'-11px'}}>- Motivate and coach employees to meet service, sales, and repair goals.</p>
            <p style={{marginTop:'-11px'}}>- Create and modify employee schedules with service levels in mind.</p>
            <p style={{marginTop:'-11px'}}>- Recruit and hire top mechanics, service adviors, and sales people.</p>
            <p style={{marginTop:'-11px'}}>- Maintain detailed logs and reports of services performed, profit, and budget information.</p>
            <p style={{marginTop:'-11px'}}>- Help out in sales and repair areas as needed and maintain comprehensive current knowledge of operations.</p>
        </p>

        <h4 style={{textAlign:'right',marginTop:'0px',marginRight:'20px',marginBottom:'0px',marginLeft:'0px'}}>5/2020 to 3/2023</h4>
        <b style={{marginLeft:'13px'}}>Store Manage LUXURY CAR CENTER, New York</b>
        <p style={{marginLeft:'18px', fontSize:'0.9rem'}}>
            <p style={{marginTop:'-11px'}}>- Create and modify employee schedules with service levels in mind.</p>
            <p style={{marginTop:'-11px'}}>- Maintain detailed logs and reports of services performed, profit, and budget information.</p>
            <p style={{marginTop:'-11px'}}>- Motivate and coach employees to meet service, sales, and repair goals.</p>
            <p style={{marginTop:'-11px'}}>- Recruit and hire top mechanics, service adviors, and sales people.</p>
            <p style={{marginTop:'-11px'}}>- Help out in sales and repair areas as needed and maintain comprehensive current knowledge of operations.</p>
        </p>
    </section>


    {/* Education */}
    <section style={{marginTop:'30px',marginLeft:'10px'}}>
        <h3 style={{fontSize:'18px'}}>Education Details</h3>
        <h4 style={{marginTop:'-28px'}}>_______________________________________________________________________________________________________</h4>
        <h4 style={{textAlign:'right',marginTop:'0px',marginRight:'20px',marginBottom:'0px',marginLeft:'0px'}}>2019 - 2021</h4>
        <p style={{marginLeft:'13px', fontSize:'0.9rem',marginTop:'0px'}}>
          <b>Bachelor of Science</b>
          <p style={{marginTop:'0px'}}>Automotive Technology - Technical University, New York</p>
        </p>

        <h4 style={{textAlign:'right',marginTop:'0px',marginRight:'20px',marginBottom:'0px',marginLeft:'0px'}}>2021 - 2023</h4>
        <p style={{marginLeft:'13px', fontSize:'0.9rem',marginTop:'0px'}}>
          <b>Master of Science</b>
          <p style={{marginTop:'0px'}}>Automotive Technology - Technical University, New York</p>
        </p>
    </section>


    {/* Language */}
    <section style={{marginTop:'40px',marginLeft:'10px'}}>
        <h3 style={{fontSize:'18px'}}>Languages</h3>
        <h4 style={{marginTop:'-28px'}}>_______________________________________________________________________________________________________</h4>
        <p style={{marginLeft:'13px', fontSize:'0.9rem'}}>
          <p style={{marginTop:'-11px'}}> - Spanish</p>
          <p style={{marginTop:'-11px'}}> - English</p>
          <p style={{marginTop:'-11px'}}> - Hindi</p>
        </p>
    </section>



    {/* Hobby */}
    <section style={{marginTop:'40px',marginLeft:'10px'}}>
        <h3 style={{fontSize:'18px'}}>Hobby</h3>
        <h4 style={{marginTop:'-28px'}}>_______________________________________________________________________________________________________</h4>
        <p style={{marginLeft:'13px', fontSize:'0.9rem'}}>
          <p style={{marginTop:'-11px'}}> - Cricket</p>
          <p style={{marginTop:'-11px'}}> - Travelling</p>
          <p style={{marginTop:'-11px'}}> - Designing</p>
        </p>
    </section>


    
    
    </div>
    </div>
    </>
  );
}

export default App;
