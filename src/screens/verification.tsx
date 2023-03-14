import React from "react"
import Button from "../components/button";
import { Link } from "react-router-dom";
import TextInput from "../components/textInput";

const Verification = () => {
    const [value, setValue] = React.useState("")
    return(
            <div className="w-full h-screen flex flex-col px-6 pt-12">
                <div>
                    <h5 className="font-semibold text-2xl mb-6">Verification</h5>
                    <p className="font-normal text-sm mb-4">Enter OTP  sent to your number</p>
                    <TextInput value={value} handleChange={(e) => setValue(e)} placeholder="Enter OTP" />
                </div>

                <div className="mb-6">
                    <Link to={"/confirmCandidate"} className="w-full">
                        <Button label="Submit" handleClick={() => { } } />
                    </Link>
                </div>
            </div>
    )
}

export default Verification;