import logo from './logo.svg';
import './App.css';

function Resume(props) {
  return (
    <>
    <div style={{display:'flex', flexDirection:'row',marginLeft:'10px'}}>
    <div className="resume" style={{background:"#1f1e2e", marginTop:'20px',marginLeft:'20px',padding:'5px',width:'30%'}}>

    {/* Image */}
    <img src="assets/bio-image.jpg" alt='' style={{height:'300px', width:'250px', margin:'10%',borderRadius:'10px'}}/>
      

    {/* Name div */}
      <div style={{color:'white', margin:'10%', fontSize:'14px'}}>
      <header>
        <h1 style={{marginTop:'-50px',marginBottom:'35px'}}>{props.r_name}</h1>
      </header>

    {/* Contact */}
      <section>
        <h3 style={{fontSize:'18px'}}>Contact</h3>
        {/* <h4 style={{marginTop:'-28px'}}></h4> */}
        <hr></hr>

        <h4>Address : </h4>
        <p style={{marginTop:'-20px'}}>{props.r_address}</p>

        <h4>Phone : </h4>
        <p style={{marginTop:'-20px'}}>{props.r_phone}</p>

        <h4>Email : </h4>
        <p style={{marginTop:'-20px'}}>{props.r_email}</p>

        <h4>Linkedin : </h4>
        <p style={{marginTop:'-20px'}}>{props.r_linkedin}</p>

        <h4>Website : </h4>
        <p style={{marginTop:'-20px'}}>{props.r_website}</p>
      </section>


      {/* Additional skills */}
      <section style={{marginTop:'40px'}}>
        <h3 style={{fontSize:'18px'}}>Additional Skill</h3>
        <hr></hr>

        <p style={{marginTop:'20px',whiteSpace:'pre-wrap'}}>{props.r_additionalskill}</p>

      </section>

      </div>
      

    </div>


    {/* white part */}
    <div className="resume-side" style={{background:"#c6c6cc", marginTop:'20px', marginRight:'20px', padding:'5px',width:'70%'}}>

    {/* Professional Summary */}
    <section style={{marginTop:'30px',marginLeft:'10px'}}>
        <h3 style={{fontSize:'18px'}}>Professional Summary</h3>
        <hr></hr>
        <p style={{marginTop:'20px',marginLeft:'13px', fontSize:'0.9rem',marginRight:'13px'}}>{props.r_professionalsummary}</p>
    </section>


    {/* Work Experience */}
    <section style={{marginTop:'40px',marginLeft:'10px'}}>
        <h3 style={{fontSize:'18px'}}>Work Experience</h3>
        <hr></hr>
        <h4 style={{textAlign:'right',marginTop:'0px',marginRight:'20px',marginBottom:'0px',marginLeft:'0px'}}>{props.r_workexdate}</h4>
        <b style={{marginLeft:'13px'}}>Android Application</b>
        <p style={{marginLeft:'18px', fontSize:'0.9rem'}}>
            <p style={{marginTop:'-11px'}}>{props.r_workexprience}</p>
        </p>
    </section>


    {/* Education */}
    <section style={{marginTop:'30px',marginLeft:'10px'}}>
        <h3 style={{fontSize:'18px'}}>Education Details</h3>
        <hr></hr>
        <h4 style={{textAlign:'right',marginTop:'0px',marginRight:'20px',marginBottom:'0px',marginLeft:'0px'}}>{props.r_educationdate}</h4>
        <p style={{marginLeft:'13px', fontSize:'0.9rem',marginTop:'0px'}}>
          <b>{props.r_educationdetails}</b>
          <p style={{marginTop:'0px'}}>Automotive Technology - Technical University, New York</p>
        </p>
    </section>


    {/* Language */}
    <section style={{marginTop:'40px',marginLeft:'10px'}}>
        <h3 style={{fontSize:'18px'}}>Languages</h3>
        <hr></hr>
        <p style={{marginLeft:'13px', fontSize:'0.9rem'}}>
          <p style={{marginTop:'-11px'}}>{props.r_language}</p>
        </p>
    </section>



    {/* Hobby */}
    <section style={{marginTop:'40px',marginLeft:'10px'}}>
        <h3 style={{fontSize:'18px'}}>Hobby</h3>
        <hr></hr>
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

export default Resume;
