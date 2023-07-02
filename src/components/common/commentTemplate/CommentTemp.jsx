import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BiEdit } from 'react-icons/bi';
import {IoIosSend} from 'react-icons/io';
import {MdCancel, MdAutoDelete} from 'react-icons/md';
import { deleteComment, updateComment } from '../../../services/operations/commentAPI';
import { getAllPost } from '../../../services/operations/PostAPI';
const useInputMode = () => {
    const [mode, setMode] = useState('editable');

    const toggleMode = () => {
      mode === 'editable' ? setMode('read only') : setMode('editable');
    };
    
    return {
      mode,
      toggleMode,
    };
  };


function CommentTemp(props) {
    const { A, _id } = props;
    const [comment,setComment]=useState(null);

    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);


      const { mode, toggleMode } = useInputMode();
      const input = useRef(null);
      async function deleteCom(){
        console.log("id",A._id)
        await dispatch(deleteComment({commentId:A._id},token));
        await dispatch(getAllPost(token));
      }
      const UserId = localStorage.getItem("userId").split('"')[1];

      async function editComment(){
        await dispatch(updateComment({commentId:A._id,caption:comment},token));
        await dispatch(getAllPost(token));
      }
  return (
    <div className="media flex pb-4" key={_id}>

            <a className="mr-4" href="#">
              <img className="rounded-full max-w-none w-12 h-12" src={A?.userId?.image} alt='profilePhoto' />
            </a>
            <div className="media-body">
              <div>
                <a className="inline-block text-base font-bold mr-2" href="#">{A?.userId?.firstName} {A?.userId?.lastName} </a>
                <span className="text-slate-500 dark:text-slate-300">25 minutes ago</span>
                {(mode!=='read only' && A?.userId?._id === UserId)?(
                    <div onClick={()=>{
                        toggleMode();
                        
                        }}
                     className='inline-block ml-10 cursor-pointer'> <BiEdit/> </div>
                ):(<></>)}
                {(mode==='read only' && A?.userId?._id === UserId)?(
                    <div onClick={()=>toggleMode()} className='inline-block ml-10 cursor-pointer'> <MdCancel/> </div>
                ):(<></>)}
                
                {(mode!=='read only' && A?.userId?._id === UserId)?(
                    <div onClick={()=>deleteCom()} className='inline-block ml-10 cursor-pointer'> <MdAutoDelete/> </div>
                ):(<></>)}
                
              </div>
              {/* {setComment(A?.caption)} */}
              <input ref={input} type="text" readOnly={mode !== 'read only'} 
                placeholder={A?.caption}  
               onChange={(e) => {setComment(e.target.value)}}
               className={`${mode!== 'read only'? '': 'border-2 border-gray-600'}`}
               />
               {mode==='read only'? (
                <div className='inline-block  ml-5 text-2xl translate-y-1/4 cursor-pointer' onClick={editComment}><IoIosSend/></div>
               ):(<></>)}
               
              {/* <p>{A?.caption}</p> */}
              <div className="mt-2 flex items-center">
                <a className="inline-flex items-center py-2 mr-3" href="#">
                  <span className="mr-2">
                    <svg className="fill-rose-600 dark:fill-rose-400 w-[22px] h-[22px]" 
                      viewBox="0 0 24 24">
                      <path
                        d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">
                      </path>
                    </svg>
                  </span>
                  <span className="text-base font-bold"></span>
                </a>
                <button className="py-2 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg">
                  Repply
                </button>
              </div>
            </div>
          </div>
  )
}

export default CommentTemp
