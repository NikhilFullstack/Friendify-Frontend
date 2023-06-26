import { FcGoogle } from "react-icons/fc"
import { useSelector } from "react-redux"

import frameImg from "../../assets/images/frame.png"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function Template({  image, formType }) {
  const { loading } = useSelector((state) => state.auth)

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className='min-h-fit flex felx-row mx-[10%] gap-4'>
        <div className='md:min-h-fit hidden md:block md:min-w-[50%]'>
            <img src={image} alt='logo' />
        </div>
        {formType === "signup" ? <SignupForm /> : <LoginForm />}
        {/* <form onSubmit={()=>submitHandler()} className='min-h-fit flex flex-col pt-4 border-gray-700 p-8 border-2
         my-8 w-[60%]'>
            <span className='fontLogo text-5xl text-center my-4 mb-20'>Friendify</span>
                <input type='email' placeholder='enter your email'name='email' 
                className='min-w-max text-center mb-10
                px-8 py-2 border-2 border-gray-400'></input>
                <button type='submit' className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 flex gap-4'>Get OTP <BsFillArrowRightCircleFill /></button>


        </form> */}
    </div>
      )}
    </div>
  )
}

export default Template