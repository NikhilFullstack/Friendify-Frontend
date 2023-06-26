import React from 'react'
import Template from "../../components/core/Template"
import signup from "../../assets/images/signup.png"
function SignupPage() {
  return (
    <div>
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

