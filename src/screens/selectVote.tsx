import React from "react"
import Button from "../components/button";
import { Link } from "react-router-dom";
import TextInput from "../components/textInput";

const SelectVote = () => {
    const [value, setValue] = React.useState("")
        return(
                <div className="w-full h-screen flex flex-col px-6 pt-12">
                    <div>
                        <h5 className="font-semibold text-2xl mb-6">Select a vote</h5>
                        <p className="font-normal text-sm mb-3">Click the button to vote</p>
                        
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-3 mb-6 place-items-center w-full mx-auto">
                        <div className="rounded-md border-black border-2 w-full flex flex-col items-center p-4">
                            <div className="w-full flex flex-col items-center">
                                <div className='w-10 h-10 rounded-full bg-green-600 mb-2'></div>
                            </div>
                            <p className="font-normal text-sm text-center">BB Naija</p>
                        </div>
                        <div className="rounded-md border-black border-2 w-full flex flex-col items-center p-4">
                            <div className="w-full flex flex-col items-center">
                                <div className='w-10 h-10 rounded-full bg-green-600 mb-2'></div>
                            </div>
                            <p className="font-normal text-sm text-center">BB Naija</p>
                        </div>
                        <div className="rounded-md border-black border-2 w-full flex flex-col items-center p-4">
                            <div className="w-full flex flex-col items-center">
                                <div className='w-10 h-10 rounded-full bg-green-600 mb-2'></div>
                            </div>
                            <p className="font-normal text-sm text-center">BB Naija</p>
                        </div>
                        <div className="rounded-md border-black border-2 w-full flex flex-col items-center p-4">
                            <div className="w-full flex flex-col items-center">
                                <div className='w-10 h-10 rounded-full bg-green-600 mb-2'></div>
                            </div>
                            <p className="font-normal text-sm text-center">BB Naija</p>
                        </div>
                        
                    </div>

                    <div className="mb-8">
                        <Link to={"/bbNaija"} className="w-full">
                            <Button label="See all" handleClick={() => { } } />
                        </Link>
                    </div>
                    <div className="w-full">
                        <p className="font-normal text-sm mb-6 text-center text-slate-500">OR</p>
                    </div>
                   
                    <p className="font-semibold text-sm mb-3">Enter vote code</p>
                    <TextInput value={value} handleChange={(e) => setValue(e)} placeholder="Enter vote code" />
                </div>
        )
}
export default SelectVote;