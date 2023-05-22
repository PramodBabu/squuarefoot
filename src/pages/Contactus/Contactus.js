import { TextField, Button } from "@mui/material"
import { useState } from "react"
import emailjs from 'emailjs-com'

const Contactus = (props) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [location, setLocation] = useState("")
    const [phone, setPhone] = useState("")

    const handleSubmit = () => {
        console.log("console", name, email, location, phone)
        if(name !== "" && email !== "" && location !== "" && phone !== "") {

            console.log("if condition")
            let data = {
                name: name,
                mail: email,
                loc: location,
                number: phone
            }

            emailjs.send('squuare_foot', 'squuareFootEmailTemplate', data, 'pHDAK23iLcsOCXQQC')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        }
    }

    return(
        <div className="contact-us">
            <h1 class='display-6'>{props.title}</h1>
            <div className="contact-us-align">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="name" placeholder="name" onChange={e => setName(e.target.value)}/>
                    <label for="name">Your Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="email" placeholder="email" onChange={e => setEmail(e.target.value)}/>
                    <label for="email">E-mail</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="location" placeholder="location" onChange={e => setLocation(e.target.value)}/>
                    <label for="location">Location/Area</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="mobile" placeholder="mobile" onChange={e => setPhone(e.target.value)}/>
                    <label for="mobile">Mobile</label>
                </div>
                <button type="button" class="btn btn-dark" onClick={handleSubmit} disabled={!(name !== "" && email !== "" && location !== "" && phone !== "")}>Submit</button>
            </div>
        </div>
    )
}

export default Contactus