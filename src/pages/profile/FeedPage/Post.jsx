import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPost } from "../../../services/operations/PostAPI"
import PostCard from '../../../components/common/PostCard';
import {  useNavigate } from 'react-router';
import { logout } from "../../../services/operations/authAPI"

// import { useNavigate } from 'react-router-dom';

function Post() {

  const { token } = useSelector((state) => state.auth);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("token:", token);
        await dispatch(getAllPost(token)).then((res)=>{
          console.log(res,"resposne has been recived");
        });
        
      }
      catch (err) {
        console.log("error in fetching All post feed", err, err.message);
        dispatch(logout(navigate))
      }
    }
    fetchData();
  }, []);

  const { data } = useSelector((state) => state.feed)
  const { loading } = useSelector((state) => state.feed)
  console.log(data,"hello");
  return (

    <div className='flex flex-row w-full h-auto'>

      <div className='flex flex-col  mx-[1%]'>
        {loading ? (<div>Spinner</div>) : (
          <div className=''>

            {
              data?.posts
                .map((Post, _id) => (
                  <PostCard post={Post} key={_id} />
                ))
            }

          </div>

        )}
      </div>


    </div>
  )
}

export default Post
