import React from 'react'
import Template from '../../components/core/Template'
import login from '../../assets/images/signup.png'
import bglogin from '../../assets/images/logbag.jpg'

function LoginPage() {
  return (
    <div >
      <img alt='bg-login' src={bglogin} className='object-cover z-[-10] absolute'/>
            <Template


      image={login}
      formType="login"
    />
    </div>
  )
}

export default LoginPage
