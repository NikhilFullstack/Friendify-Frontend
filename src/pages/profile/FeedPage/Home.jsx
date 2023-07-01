import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../services/operations/authAPI'
import { useDispatch } from 'react-redux';
import Post from './Post'
import AddPost from './AddPost';
function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(token===null) 
            dispatch(logout(navigate))
},[]);
  return (
    <div>
      <AddPost/>
      <Post />

    </div>
  )
}

export default Home
