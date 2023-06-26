import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPost } from "../../../services/operations/PostAPI"
import Post_Card from '../../../components/common/Post_Card';
// import { useNavigate } from 'react-router-dom';

function Post() {

  const { token } = useSelector((state) => state.auth)

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("token:", token);
        const res = await dispatch(getAllPost(token, dispatch));
        // .then((res)=>{
        //   console.log("set user ab hoga ",res);
        //   dispatch(setUser(res))
        // }
        // );

      }
      catch (err) {
        console.log("error in fetching All post feed", err, err.message);
      }
    }
    fetchData();
  }, [])
  const { data } = useSelector((state) => state.feed)
  const { loading } = useSelector((state) => state.feed)
  return (

    <div className='flex flex-row w-full h-auto'>

      <div className='flex flex-col w-[23%] mx-[1%]'></div>
      <div className='flex flex-col w-[48%] mx-[1%]'>
        {loading ? (<div>Spinner</div>) : (

          <div className=''>
            {
              data?.posts
                .map((Post, index) => (
                  <Post_Card post={Post} key={index} />
                ))
            }

          </div>

        )}
      </div>
      <div className='flex flex-col w-[23%] mx-[1%]'></div>


    </div>
  )
}

export default Post
