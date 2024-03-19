import React from 'react'
import TabComponent from './Tab'
import loginBG from '../../images/loginBG.png'



const Login = () => {
  
  return (
    <div className='h-[80vh] border relative'>
      <TabComponent/>
      <img src={loginBG} className='absolute bottom-0 left-0'  />
    </div>
  )
}

export default Login
