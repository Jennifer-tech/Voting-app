import React from 'react'
import Button from '../components/button'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full h-screen flex flex-col  items-center justify-center px-6'>
      <div className='w-32 h-32 rounded-full bg-green-600 mb-10 p-4'>
        <div className='w-full h-full rounded-full bg-white p-4'>
        <div className='w-full h-full rounded-full bg-green-400 p-4'></div>
        </div>
      </div>
      <h5 className=' font-semibold text-2xl mb-2'>Welcome User</h5>
      <p className='font-normal text-sm mb-4'>Click the button to vote</p>
      <Link to={`/auth`} className='w-full'>
      <Button label="Vote" handleClick={() => {}} />
      </Link>
    </div>
  )
}

export default Home