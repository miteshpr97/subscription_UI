import React from 'react'
import '../App.css';
import Lockup from '../components/Lockup'
import SubscriptionTemplate from '../components/SubscriptionTemplate';

const Home = () => {
  return (
    <div className = "HomeContainer">
      <div className='lockup'>
      <Lockup/>
      </div>
      <div className='subscription'>
      <SubscriptionTemplate />
      </div>
    </div>
  )
}

export default Home
