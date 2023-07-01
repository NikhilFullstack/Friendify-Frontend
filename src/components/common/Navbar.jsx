
import { useEffect, useState } from "react"
import {
  AiOutlineMenu
} from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import { Link, matchPath, useLocation, useNavigate } from "react-router-dom"

import { NavbarLinks } from "../../data/navbar-links"
import { searchUser } from "../../services/operations/profileAPI"
import { logout } from "../../services/operations/authAPI"

function Navbar() {
  const { token } = useSelector((state) => state.auth)

  const location = useLocation()
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [search,setSearch] = useState(null);
  const [data, setData ] = useState({"search":'',});
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  function changeHandler(e){
    setData((pre)=>({
      ...pre,
      [e.target.name]:[e.target.value]
    }))
  }
  function searchHandler(e){
    e.preventDefault();
    async function seArch(){
      try{
        console.log("yaha aa gye");
        await searchUser(data,token,navigate);



        await searchUser(data,token,navigate).then(
          (res)=>{
            console.log("Search in setSearch.!!!!......../",res);

            setSearch(res);
            console.log("Search in setSearch........./",res);
          }
        )
      }
      catch(err){
        console.log("searching error.....",err);
      }
    }
    seArch();

  }


  return (
    <div
      className={`flex h-14 items-center justify-center border-b-[1px] border-b-gray-700 bg-gray-800 transition-all duration-200 `}
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}

        {token === null && (<Link to='/'>
          <div className="fontLogo text-3xl hover:text-[32px] hover:font-extrabold text-green-600 hover:text-yellow-600">Friendify</div>
        </Link>)}
        {token !== null && (<Link to='/'>
          <div className="fontLogo text-3xl hover:font-bold text-yellow-100 hover:text-yellow-50">Friendify</div>
        </Link>)}
        {/* Navigation links */}
        {token !== null && <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-slate-50">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {/* {console.log("title:",link.title,link)} */}
                {link.title === "Video" ? (
                  <>
                    <div
                      className={`group relative flex cursor-pointer items-center gap-1 ${matchRoute("/catalog/:catalogName")
                        ? "text-yellow-50"
                        : "text-gray-50"
                        }`}
                    >
                      <p>{link.title}</p>
                      <BsChevronDown />
                      <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-gray-50 p-4 text-gray-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                        <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-gray-50"></div>

                      </div>
                    </div>
                  </>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${matchRoute(link?.path)
                        ? "text-yellow-50"
                        : "text-gray-50"
                        }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>}
        {token !== null && <nav className="hidden md:block">
          <div className="flex gap-x-6 text-slate-50">

            <form className="flex items-center" onSubmit={searchHandler}>
              <label for="simple-search" className="sr-only">Search</label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="search" placeholder="Search" required onChange={changeHandler} />
              </div>
              <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span className="sr-only">Search</span>
              </button>
            </form>
              <div className="" id="">
                     


              </div>
          </div>
        </nav>}
        {/* Login / Signup / Dashboard */}
        <div className="hidden items-center gap-x-4 md:flex">

          {token === null && (
            <Link to="/login">
              <button className="rounded-[8px] border border-gray-700 bg-gray-800 px-[12px] py-[8px] text-gray-100">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="rounded-[8px] border border-gray-700 bg-gray-800 px-[12px] py-[8px] text-gray-100">
                Sign up
              </button>
            </Link>
          )}
          {token !== null && <button className="fontLogo text-3xl hover:font-bold text-yellow-100 hover:text-yellow-50" onClick={async () => {
            await dispatch(logout(navigate));
          }}>Log Out</button>}
        </div>
        <button className="mr-4 md:hidden">
          <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
        </button>
      </div>
    </div>
  )
}

export default Navbar