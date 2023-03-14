import React from "react"
import Button from "../components/button";
import { Link } from "react-router-dom";
import TextInput from "../components/textInput";

const VerifyIdentity = () => {
    const [value, setValue] = React.useState("")
    return(
            <div className="w-full h-screen flex flex-col px-6 pt-12">
                <div>
                    <h5 className="font-semibold text-2xl mb-6">Verify Your Identity</h5>
                    <p className="font-semibold text-sm mb-4">Enter the 6-digit that was sent to your email address</p>
                    <TextInput value={value} handleChange={(e) => setValue(e)} placeholder=" " />
                    <div className="w-full flex justify-between mb-8">
                        <p className="font-normal text-sm">OTP not sent?</p>
                        <p className="font-semibold text-sm ">Resend</p>
                    </div>
                    
                </div>

                <div className="mb-6">
                    <Link to={"/home"} className="w-full">
                        <Button label="Proceed" handleClick={() => { } } />
                    </Link>
                </div>
                <div className="w-full flex flex-col text-center">
                    <p className="font-normal text-base">Want to try another method of verification?</p>
                    <p className="font-semibold text-lg ">Click here</p>
                </div>
            </div>
    )
}
export default VerifyIdentity;