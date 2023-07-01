import React from 'react'

function PostCard(props) {
    const {post} = props;
  return (
    <div className="wrapper pt-10 px-8 flex flex-col items-center">

      <article className="mb-4 break-inside p-6 rounded-xl bg-white dark:bg-slate-800 flex flex-col bg-clip-border sm:w-3/6 w-full">
        <div className="flex pb-6 items-center justify-between">
          <div className="flex">
            <a className="inline-block mr-4" href="#">
              <img className="rounded-full max-w-none w-12 h-12" src={post?.userId?.image} />
            </a>
            <div className="flex flex-col">
              <div>
                <a className="inline-block text-lg font-bold dark:text-white" href="#">{post?.userId?.firstName} {post?.userId?.lastName}</a>
              </div>
              <div className="text-slate-500  dark:text-slate-400">
                {post?.userId?.createdAt}
              </div>
            </div>
          </div>
        </div>
        {/* <h2 className="text-3xl font-extrabold dark:text-white">
          Web Design templates Selection
        </h2> */}
        <div className="py-4">
          <div className="flex justify-between gap-1 mb-1">
          {post?.media.map((a,index)=>{
                       return <a className="flex" href="#" key={index}>
                       <img className="max-w-full rounded-tl-lg"
                         src={a} loading='lazy'  />
                     </a>
                    })}
            
          </div>
          
        </div>
        <p className="dark:text-slate-200">
          {post?.caption}
        </p>
        <div className="py-4">
          <a className="inline-flex items-center" href="#">
            <span className="mr-2">
              <svg className="fill-rose-600 dark:fill-rose-400 w-[24px] h-[24px]"  viewBox="0 0 24 24">
                <path
                  d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">
                </path>
              </svg>
            </span>
            <span className="text-lg font-bold">{post?.userId?.like.length}</span>
          </a>
        </div>
        <div className="relative">
          <input
            className="pt-2 pb-2 pl-3 w-full h-11 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium pr-20"
            type="text" placeholder="Write a comment" />
          <span className="flex absolute right-3 top-2/4 -mt-3 items-center">
            <svg className="mr-2 w-[26px] h-[26px]"  viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z">
              </path>
            </svg>
            <svg className="fill-blue-500 dark:fill-slate-50 w-[24px] h-[24px]"  viewBox="0 0 24 24">
              <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"></path>
            </svg>
          </span>
        </div>
        {/* <!-- Comments content --> */}
        <div className="pt-6">
          {/* <!-- Comment row --> */}
          {post?.comments.map((A,_id)=>{
            return <div className="media flex pb-4" key={_id}>

            <a className="mr-4" href="#">
              <img className="rounded-full max-w-none w-12 h-12" src={A?.userId?.image} alt='profilePhoto' />
            </a>
            <div className="media-body">
              <div>
                <a className="inline-block text-base font-bold mr-2" href="#">{A?.userId?.firstName} {A?.userId?.lastName}</a>
                <span className="text-slate-500 dark:text-slate-300">25 minutes ago</span>
              </div>
              <p>{A?.caption}</p>
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
          })}
          
          
          <div className="w-full">
            <a href="#"
              className="py-3 px-4 w-full block bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75">Show
              more comments</a>
          </div>
          
        </div>
      </article>
  </div>
  )
}

export default PostCard


// {/* <style> */}
// {/* @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap");

// .break-inside {
//   -moz-column-break-inside: avoid;
//   break-inside: avoid;
// }

// .wrapper {
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   flex-direction: column;
//   min-height: 100vh;
//   font-family: "Roboto", sans-serif;
// }
// </style> */}




  
 


//   {/* <footer className="w-full flex justify-center flex-col py-4 text-center mt-14">
//     <p className="mb-1">
//       Built by
//       <a className="font-medium underline" href="https://codepen.io/frankuxui">
//         Frank Esteban</a>
//     </p>
//     <p className="dark:text-white mb-3">
//       Contact me on the different platforms and social networks
//     </p>
//     <div className="flex items-center justify-center">
//       <a className="w-12 h-12 flex justify-center items-center rounded-full hover:bg-slate-300 transition dark:hover:bg-slate-800 dark:text-white"
//         href="https://codepen.io/frankuxui" target="__blank">
//         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" xmlns:xlink="http://www.w3.org/1999/xlink"
//           version="1.1" viewBox="0 0 24 24">
//           <path fill="currentColor"
//             d="M8.21 12L6.88 12.89V11.11L8.21 12M11.47 9.82V7.34L7.31 10.12L9.16 11.36L11.47 9.82M16.7 10.12L12.53 7.34V9.82L14.84 11.36L16.7 10.12M7.31 13.88L11.47 16.66V14.18L9.16 12.64L7.31 13.88M12.53 14.18V16.66L16.7 13.88L14.84 12.64L12.53 14.18M12 10.74L10.12 12L12 13.26L13.88 12L12 10.74M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12M18.18 10.12C18.18 10.09 18.18 10.07 18.18 10.05L18.17 10L18.17 10L18.16 9.95C18.15 9.94 18.15 9.93 18.14 9.91L18.13 9.89L18.11 9.85L18.1 9.83L18.08 9.8L18.06 9.77L18.03 9.74L18 9.72L18 9.7L17.96 9.68L17.95 9.67L12.3 5.91C12.12 5.79 11.89 5.79 11.71 5.91L6.05 9.67L6.05 9.68L6 9.7C6 9.71 6 9.72 6 9.72L5.97 9.74L5.94 9.77L5.93 9.8L5.9 9.83L5.89 9.85L5.87 9.89L5.86 9.91L5.84 9.95L5.84 10L5.83 10L5.82 10.05C5.82 10.07 5.82 10.09 5.82 10.12V13.88C5.82 13.91 5.82 13.93 5.82 13.95L5.83 14L5.84 14L5.84 14.05C5.85 14.06 5.85 14.07 5.86 14.09L5.87 14.11L5.89 14.15L5.9 14.17L5.92 14.2L5.94 14.23C5.95 14.24 5.96 14.25 5.97 14.26L6 14.28L6 14.3L6.04 14.32L6.05 14.33L11.71 18.1C11.79 18.16 11.9 18.18 12 18.18C12.1 18.18 12.21 18.15 12.3 18.1L17.95 14.33L17.96 14.32L18 14.3L18 14.28L18.03 14.26L18.06 14.23L18.08 14.2L18.1 14.17L18.11 14.15L18.13 14.11L18.14 14.09L18.16 14.05L18.16 14L18.17 14L18.18 13.95C18.18 13.93 18.18 13.91 18.18 13.88V10.12M17.12 12.89V11.11L15.79 12L17.12 12.89Z">
//           </path>
//         </svg>
//       </a>
//       <a className="w-12 h-12 flex justify-center items-center rounded-full hover:bg-slate-300 transition dark:hover:bg-slate-800 dark:text-white"
//         href="https://codesandbox.io/u/frankuxui" target="__blank">
//         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" xmlns:xlink="http://www.w3.org/1999/xlink"
//           version="1.1" viewBox="0 0 24 24">
//           <path fill="currentColor"
//             d="M2 6l10.455-6L22.91 6 23 17.95 12.455 24 2 18V6zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272L4.088 8.481zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM5.134 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L5.133 6.6z">
//           </path>
//         </svg>
//       </a>
//       <a className="w-12 h-12 flex justify-center items-center rounded-full hover:bg-slate-300 transition dark:hover:bg-slate-800 dark:text-white"
//         href="https://github.com/frankuxui" target="__blank">
//         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" xmlns:xlink="http://www.w3.org/1999/xlink"
//           version="1.1" viewBox="0 0 24 24">
//           <path fill="currentColor"
//             d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z">
//           </path>
//         </svg>
//       </a>
//       <a className="w-12 h-12 flex justify-center items-center rounded-full hover:bg-slate-300 transition dark:hover:bg-slate-800 dark:text-white"
//         href="https://twitter.com/frankuxui" target="__blank">
//         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" xmlns:xlink="http://www.w3.org/1999/xlink"
//           version="1.1" viewBox="0 0 24 24">
//           <path fill="currentColor"
//             d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z">
//           </path>
//         </svg>
//       </a>
//       <a className="w-12 h-12 flex justify-center items-center rounded-full hover:bg-slate-300 transition dark:hover:bg-slate-800 dark:text-white"
//         href="https://dribbble.com/frankuxui" target="__blank">
//         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" xmlns:xlink="http://www.w3.org/1999/xlink"
//           version="1.1" viewBox="0 0 24 24">
//           <path fill="currentColor"
//             d="M13.01 13.188c.617 1.613 1.072 3.273 1.361 4.973-2.232.861-4.635.444-6.428-.955 1.313-2.058 2.989-3.398 5.067-4.018zm-.53-1.286c-.143-.32-.291-.638-.447-.955-1.853.584-4.068.879-6.633.883l-.01.17c0 1.604.576 3.077 1.531 4.223 1.448-2.173 3.306-3.616 5.559-4.321zm-3.462-5.792c-1.698.863-2.969 2.434-3.432 4.325 2.236-.016 4.17-.261 5.791-.737-.686-1.229-1.471-2.426-2.359-3.588zm7.011.663c-1.117-.862-2.511-1.382-4.029-1.382-.561 0-1.102.078-1.621.21.873 1.174 1.648 2.384 2.326 3.625 1.412-.598 2.52-1.417 3.324-2.453zm7.971-1.773v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5zm-4 7c0-4.418-3.582-8-8-8s-8 3.582-8 8 3.582 8 8 8 8-3.582 8-8zm-6.656-1.542c.18.371.348.745.512 1.12 1.439-.248 3.018-.233 4.734.049-.084-1.478-.648-2.827-1.547-3.89-.922 1.149-2.16 2.055-3.699 2.721zm1.045 2.437c.559 1.496.988 3.03 1.279 4.598 1.5-1.005 2.561-2.61 2.854-4.467-1.506-.261-2.883-.307-4.133-.131z">
//           </path>
//         </svg>
//       </a>
//     </div>
//   </footer> */}