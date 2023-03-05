import React from "react"
import Button from "../components/button";
import { Link } from "react-router-dom";
import TextInput from "../components/textInput";


const Register = () => {
    const [value, setValue] = React.useState("")
    return(
            <div className="w-full h-screen flex flex-col px-6 pt-12 justify-between">
                <div>
                    <h5 className="font-semibold text-2xl mb-3">Register</h5>
                    <p className="font-semibold text-sm mb-6">Choose an ID and enter number</p>
                    <TextInput value={value} handleChange={(e) => setValue(e)} placeholder="Choose ID type" />
                    <TextInput value={value} handleChange={(e) => setValue(e)} placeholder="Enter ID No." />
                </div>

                <div className="mb-6">
                    <Link to={"/verifyIdentity"} className="w-full">
                        <Button label="Proceed" handleClick={() => { } } />
                    </Link>
                </div>
            </div>
    )
}

export default Register;