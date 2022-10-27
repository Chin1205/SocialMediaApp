import React, {useState} from "react";

function RegisterForm() {

    const [name, setName] = useState(null)
    const [userName, setUserName] = useState(null)
    const [userEmail, setEmail] = useState(null)
    const [userPassword, setPassword] = useState(null)
    const [userConfirmPassword, setConfirmPassword] = useState(null)

    const handleInputChange = (e) => {
        const {id, value} = e.target
        if(id === "name"){
            setName(value)
        }
        if(id === "userName"){
            setUserName(value)
        }
        if(id === "userEmail"){
            setEmail(value)
        }
        if(id === "userPassword"){
            setPassword(value)
        }
        if(id === "userConfirmPassword"){
            setConfirmPassword(value)
        }
    }

    const handleSubmit = () => {
        console.log(name, userName, userEmail, userPassword, userConfirmPassword)
    }

    return(
        <div className="form">
            <h2>Register</h2>
            <div className="form-body">
                <div className="form-group">
                    <label className="form-label">Name</label>
                    <input className="form-input" type="text" id="name" 
                        value={name} onChange={(e) => handleInputChange(e)} placeholder="Name"/>
                </div>

                <div className="form-group">
                    <label className="form-label">Username</label>
                    <input className="form-input" type="text" id="userName"
                        value={userName} onChange={(e) => handleInputChange(e)} placeholder="Username"/>
                </div>

                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input className="form-input" type="email" id="userEmail"
                        value={userEmail} onChange={(e) => handleInputChange(e)} placeholder="Email"/>
                </div>

                <div className="form-group">
                    <label className="form-label">Password</label>
                    <input className="form-input" type="password" id="userPassword"
                        value={userPassword} onChange={(e) => handleInputChange(e)} placeholder="Password"/>
                </div>

                <div className="form-group">
                    <label className="form-label">Confirm Password</label>
                    <input className="form-input" type="password" id="userConfirmPassword"
                        value={userConfirmPassword} onChange={(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                </div>
            </div>
            <div className="form-button">
                <button className="button" type="submit" onClick={() => handleSubmit()}>Register</button>
            </div>
        </div>
    )
}

export default RegisterForm;