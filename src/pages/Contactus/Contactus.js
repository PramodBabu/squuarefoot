import { TextField, Button } from "@mui/material"
import { useState } from "react"
import emailjs from 'emailjs-com'

const Contactus = (props) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [location, setLocation] = useState("")
    const [phone, setPhone] = useState("")

    const handleSubmit = () => {
        if(name !== "" && email !== "" && location !== "" && phone !== "") {

            let data = {
                name: name,
                mail: email,
                loc: location,
                number: phone
            }

            emailjs.send('SFserviceID', 'SFTemplate', data, 'iK0LHdEqxElH10LrG')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        }
    }

    return(
        <div className="contact-us">
            <div className="contact-us-align">
                <span>{props.title}</span>
                <div style={{padding: `20px`, display: `flex`, flexDirection: `column`}}>
                    <TextField 
                        id="standard-basic" 
                        label="Your Name" 
                        variant="standard"  
                        style={{padding: `10px 0`}} 
                        onChange={(e) => {setName(e.target.value)}}
                    />
                    <TextField 
                        id="standard-basic" 
                        label="E-Mail ID" 
                        variant="standard"  
                        style={{padding: `10px 0`}}
                        onChange={(e) => {setEmail(e.target.value)}}
                    />
                    <TextField 
                        id="standard-basic" 
                        label="Location" 
                        variant="standard"  
                        style={{padding: `10px 0`}}
                        onChange={(e) => {setLocation(e.target.value)}}
                    />
                    <TextField 
                        id="standard-basic" 
                        label="Phone Number" 
                        variant="standard"  
                        style={{padding: `10px 0`}}
                        onChange={(e) => {setPhone(e.target.value)}}
                    />
                    <Button 
                        variant="contained" 
                        style={{width: `30%`, margin: `20px 0`}}
                        onClick={handleSubmit}
                    >Submit</Button>
                </div>
            </div>
        </div>
    )
}

export default Contactus