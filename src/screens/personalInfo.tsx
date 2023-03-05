import React from "react"
import Button from "../components/button";
import { Link } from "react-router-dom";
import TextInput from "../components/textInput";
import avatar from "../assets/images/avatar.jpg"
const PersonalInfo = () => {
    const [value, setValue] = React.useState("")
    return(
        <div className="w-full h-screen flex flex-col px-6 pt-12 justify-between">
            <div>
                <h5 className="font-semibold text-2xl mb-5">Confirm your personal Information</h5>
                <div className="w-full h-28 flex items-center justify-center">
                    <img className="w-28" src={avatar}></img>
                </div>
                <TextInput value={value} handleChange={(e) => setValue(e)} placeholder="Enter your name" />
                <TextInput value={value} handleChange={(e) => setValue(e)} placeholder="Date of Birth" />
                <TextInput value={value} handleChange={(e) => setValue(e)} placeholder="Enter phone number" />
                <TextInput value={value} handleChange={(e) => setValue(e)} placeholder="State" />
                <TextInput value={value} handleChange={(e) => setValue(e)} placeholder="Towm" />
                <TextInput value={value} handleChange={(e) => setValue(e)} placeholder="City" />
                <TextInput value={value} handleChange={(e) => setValue(e)} placeholder="Permanent Address" />
            </div>

            <div className="mb-6">
                <Link to={"/location"} className="w-full">
                    <Button label="Proceed" handleClick={() => { } } />
                </Link>
            </div>
        </div>
    )
}

export default PersonalInfo;