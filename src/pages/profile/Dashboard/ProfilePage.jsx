import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from "../../../services/operations/profileAPI"
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
  const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{ async function fetchData () {
    try{
      console.log("token:",token);
      const res = await dispatch(getUserDetails(token, navigate));
      // .then((res)=>{
      //   console.log("set user ab hoga ",res);
      //   dispatch(setUser(res))
      // }
        // );
      
    }
    catch(err){
      console.log("error in fetching user details",err,err.message);
    }
  }
  fetchData();},[])
  return (
    <div>
      profile page
    </div>
  )
}

export default ProfilePage