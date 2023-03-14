import React from "react"
import Button from "../components/button";
import { Link } from "react-router-dom";
import TextInput from "../components/textInput";

const LogIn = () => {
    const [value, setValue] = React.useState("")
    return(
            <div className="w-full h-screen flex flex-col px-6 pt-12">
                <div className="mb-10">
                    <h5 className="font-semibold text-2xl mb-6">Log In</h5>
                    <p className="font-semibold text-sm mb-4">Email</p>
                    <TextInput value={value} handleChange={(e) => setValue(e)} placeholder="Enter your email address" />
                    <p className="font-semibold text-sm mb-4">Password</p>
                    <TextInput value={value} handleChange={(e) => setValue(e)} placeholder="Enter your password" />
                </div>

                <div className="mb-4">
                    <Link to={"/verifyIdentity"} className="w-full">
                        <Button label="Log In" handleClick={() => { } } />
                    </Link>
                </div>
                <div className="w-full">
                <p className="font-medium text-sm mb-4 text-center">Don't have an account? <span className="text-sm font-bold">Sign up</span></p>
                </div>
            </div>
    )
}
export default LogIn;