import logo from './logo.svg';
import './App.css';

// Filename - App.js
// It contains the Form, its Structure
// and Basic Form Functionalities

import "./App.css";
import { React, useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    
    //Add
    const [linkedin, setLinkedin] = useState("");
    const [website, setWebsite] = useState("");

    const [gender, setGender] = useState("male");
    const [subjects, setSubjects] = useState({
        english: true,
        maths: false,
        physics: false,
    });
    const [resume, setResume] = useState("");
    const [url, setUrl] = useState();
    const [selectedOption, setSelectedOption] =
        useState("");
    const [professionalsummary, setProfessionalSummary] = useState("");
    const [workexprience, setWorkExprience] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            name,
            address,
            email,
            contact,

            //Add
            linkedin,
            website,
            
            gender,
            selectedOption,
            subjects,
            resume,
            url,
            professionalsummary,
            workexprience
        );
        // Add your form submission logic here
    };

    const handleSubjectChange = (sub) => {
        setSubjects((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }));
    };
    const handleReset = () => {
        // Reset all state variables here
        setName("");
        setAddress("");
        setEmail("");
        setContact("");
        setLinkedin("");
        setWebsite("");
        setGender("male");
        setSubjects({
            english: true,
            maths: false,
            physics: false,
        });
        setResume("");
        setUrl("");
        setSelectedOption("");
        setProfessionalSummary("");
        setWorkExprience("");
    };

    return (
        <div className="App">
            <h1><u>Form in React</u></h1>
            <fieldset>
                <form action="#" method="get">
                    <label for="name">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                        placeholder="Enter Name"
                        required
                    />
                    <label for="address">Address</label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        value={address}
                        onChange={(e) =>
                            setAddress(e.target.value)
                        }
                        placeholder="Enter Address"
                        required
                    />
                    <label for="email"> Email </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        placeholder="Enter email"
                        required
                    />
                    <label for="tel">Contact</label>
                    <input
                        type="tel"
                        name="contact"
                        id="contact"
                        value={contact}
                        onChange={(e) =>
                            setContact(e.target.value)
                        }
                        placeholder="Enter Mobile number"
                        required
                    />

                    {/* //Add */}
                    <label for="tel">Linkedin</label>
                    <input
                        type="text"
                        name="linkedin"
                        id="linkedin"
                        value={linkedin}
                        onChange={(e) =>
                            setLinkedin(e.target.value)
                        }
                        placeholder="Enter Linkedin"
                        required
                    />

                    <label for="tel">Website</label>
                    <input
                        type="text"
                        name="website"
                        id="website"
                        value={website}
                        onChange={(e) =>
                            setWebsite(e.target.value)
                        }
                        placeholder="Enter website"
                        required
                    />


                    {/* <label for="gender">Gender</label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        id="male"
                        checked={gender === "male"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    />
                    Male
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        id="female"
                        checked={gender === "female"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    />
                    Female
                    <input
                        type="radio"
                        name="gender"
                        value="other"
                        id="other"
                        checked={gender === "other"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    />
                    Other */}
                    
                    {/* <label for="file">Upload Resume*</label>
                    <input
                        type="file"
                        name="file"
                        id="file"
                        onChange={(e) =>
                            setResume(e.target.files[0])
                        }
                        placeholder="Enter Upload File"
                        required
                    /> */}
                    {/* <label for="url">Enter URL*</label>
                    <input
                        type="url"
                        name="url"
                        id="url"
                        onChange={(e) =>
                            setUrl(e.target.value)
                        }
                        placeholder="Enter url"
                        required
                    /> */}
                    {/* <label>Select your choice</label>
                    <select
                        name="select"
                        id="select"
                        value={selectedOption}
                        onChange={(e) =>
                            setSelectedOption(
                                e.target.value
                            )
                        }
                    >
                        <option
                            value=""
                            disabled
                            selected={selectedOption === ""}
                        >
                            Select your Ans
                        </option>
                        <optgroup label="Beginers">
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3">
                                JavaScript
                            </option>
                        </optgroup>
                        <optgroup label="Advance">
                            <option value="4">React</option>
                            <option value="5">Node</option>
                            <option value="6">
                                Express
                            </option>
                            <option value="t">
                                MongoDB
                            </option>
                        </optgroup>
                    </select> */}
                    <label for="professionalsummary">Professional Summary</label>
                    <textarea
                        name="professionalsummary"
                        id="professionalsummary"
                        cols="30"
                        rows="10"
                        onChange={(e) =>
                            setProfessionalSummary(e.target.value)
                        }
                        placeholder="About your self"
                        required
                    ></textarea>
                     <label for="workexprience">Work Exprience</label>
                    <textarea
                        name="workexprience"
                        id="workexprience"
                        cols="30"
                        rows="10"
                        onChange={(e) =>
                            setWorkExprience(e.target.value)
                        }
                        placeholder="About your self"
                        required
                    ></textarea>
                    <label for="lang">
                        Your best Subject
                    </label>
                    <input
                        type="checkbox"
                        name="lang"
                        id="english"
                        checked={subjects.english === true}
                        onChange={(e) =>
                            handleSubjectChange("english")
                        }
                    />
                    English
                    <input
                        type="checkbox"
                        name="lang"
                        id="maths"
                        checked={subjects.maths === true}
                        onChange={(e) =>
                            handleSubjectChange("maths")
                        }
                    />
                    Maths
                    <input
                        type="checkbox"
                        name="lang"
                        id="physics"
                        checked={subjects.physics === true}
                        onChange={(e) =>
                            handleSubjectChange("physics")
                        }
                    />
                    Physics
                    <button
                        type="reset"
                        value="reset"
                        onClick={() => handleReset()}
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        value="Submit"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Submit
                    </button>
                </form>
            </fieldset>
        </div>
    );
}

export default App;
