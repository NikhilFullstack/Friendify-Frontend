import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from "../../../services/operations/profileAPI"
import { useNavigate } from 'react-router-dom';
import '../../../assets/css/profilepage.css'
import { LoaderIcon } from 'react-hot-toast';
import Button from 'react-bootstrap/Button'
import { AiFillSetting } from 'react-icons/ai';


function ProfilePage() {
  const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userDetails,setUserDetails]=useState(null);
  useEffect(()=>{ async function fetchData () {
    try{
      console.log("token:",token);
      const res = await dispatch(getUserDetails(token, navigate));
      // .then((res)=>{
      //   console.log("set user ab hoga ",res);
      //   dispatch(setUser(res))
      // }
        // );
      
      await dispatch(getUserDetails(token, navigate)).then((res)=>{
        setUserDetails(res.data.post);
        console.log("user",userDetails);
        console.log("GetUserDetails.......",res);
      });
    }
    catch(err){
      console.log("error in fetching user details",err,err.message);
    }
  }
  fetchData();},[])
  return (
<>

  <section id="profile">
    {userDetails ?
    <div className="container pl-40 pr-40">
        <div className="row">
        <div className="col-md-3 d-flex justify-content-center">
            <div className="grey ">
              <img src={userDetails.image}></img>
            </div>
        </div>
        <div className="col-md-9 mt-4">
            <ul className="d-flex align-items-center gap-4 ">
                <li><h3 style={{fontSize:"1.8rem",fontWeight:500,}}>{userDetails.firstName }</h3></li>
                <li><a href="javscript:void(0);"><Button variant="outline-primary">Follow</Button> 
</a></li>
                {/* <li><a href="javascript:void(0);"><i className="fa-solid fa-caret-down"></i></a></li> */}
                <li style={{fontSize:"2rem"}}><b><AiFillSetting /></b></li>
            </ul>
            <ul className="d-flex align-items-center gap-4 my-4">
                <li><b>{userDetails.post.length}</b> posts</li>
                <li><b>{userDetails.friends.length}</b> Friends</li>
                {/* <li><b>22 </b>following</li> */}
            </ul>
            <ul className="d-flex align-items-center gap-4 my-4">
              <li><b>{userDetails.about}</b></li>
            </ul>
        </div>
        </div>
    </div>
        : <LoaderIcon/>
      }
</section>

<section id="posts">
  {userDetails ?
    <div className="container-fluid pl-40 pr-40">
        <div className="row g-3">
          {userDetails.post.map((element,index)=>{
            return(
              <>
              <div className="col-md-4" key={index}>
              <div className="card h-100">
                <img className='img' src={element.media[0]} style={{height:"20rem"}}></img>
              </div>
              </div>

              </>
            )
          })}
    </div>
    </div>
:<LoaderIcon/>
}
</section>
</>

  )
}

export default ProfilePage
