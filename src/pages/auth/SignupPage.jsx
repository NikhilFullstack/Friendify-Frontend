import React from 'react'
import Template from "../../components/core/Template"
import signup from "../../assets/images/signup.png"
import bgsignup from '../../assets/images/signupbg.jpg'
function SignupPage() {
  return (
    <div>
      <img alt='bg-login' src={bgsignup} className='bg-no-repeat  bg-center bg-cover z-[-10] absolute'/>
      <Template
      // title="Join Friendify to connect with world wide"
      // description1="Let's connect together and explore opportunities."
      // description2="Happy connecting!"

      image={signup}
      formType="signup"
    />
    </div>
  )
}

export default SignupPage

