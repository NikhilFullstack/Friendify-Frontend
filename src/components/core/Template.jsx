import { useSelector } from "react-redux"

import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function Template({ image, formType }) {
  const { loading } = useSelector((state) => state.auth)

  return (
    <div className="grid  min-h-[calc(100vh-3.5rem)] place-items-center z-0">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className='min-h-fit grid grid-cols-2  gap-4'>
          <div className='md:min-h-fit hidden md:block md:min-w-[40%]'>
            <img src={image} alt='logo' />
          </div>
          {formType === "signup" ? <SignupForm /> : <LoginForm />}

        </div>
      )}
    </div>
  )
}

export default Template