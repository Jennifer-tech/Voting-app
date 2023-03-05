import React from "react"
import Button from "../components/button";
import { Link } from "react-router-dom";
import TextInput from "../components/textInput";

const VerifyIdentity = () => {
    const [value, setValue] = React.useState("")
    return(
            <div className="w-full h-screen flex flex-col px-6 pt-12 justify-between">
                <div>
                    <h5 className="font-semibold text-2xl mb-6">Verify Your Identity</h5>
                    <p className="font-semibold text-sm mb-4">Enter the phone No. linked to your BVN</p>
                    <TextInput value={value} handleChange={(e) => setValue(e)} placeholder="Enter Phone No." />
                    <p className="font-semibold text-sm mb-4">Enter Your Mother's Maiden Name</p>
                    <TextInput value={value} handleChange={(e) => setValue(e)} placeholder="Enter Name" />
                </div>

                <div className="mb-6">
                    <Link to={"/verifyIdentity2"} className="w-full">
                        <Button label="Verify Me" handleClick={() => { } } />
                    </Link>
                </div>
            </div>
    )
}
export default VerifyIdentity;