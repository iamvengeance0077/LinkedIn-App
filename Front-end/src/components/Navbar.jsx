import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import DATA from "../../public/DATA.json"

const Navbar = () => {
  const [searchbar,setSearchBar]=useState(false);
  
  const navigate = useNavigate();
  
  //profile container states
  const [show, setShow] = useState(false);
  const profileDivRef=useRef();
  useEffect(()=>{
    const handleProfileDivToggle=(e)=>{
      if(profileDivRef.current && !profileDivRef.current.contains(e.target)){
        setShow(false);
      }
    }
    document.addEventListener("mousedown",handleProfileDivToggle);
    return ()=>document.removeEventListener("mousedown",handleProfileDivToggle);
  },[])
  

  return (
    <div
      className="bg-[#FFFFFF] border-b border-[silver]  flex lg:items-center lg:justify-center lg:gap-5 h-14 fixed w-full z-100"
    >
      <div className="flex pl-2 lg:gap-2 w-15 lg:w-118  items-center h-full">
        <Link to="/home">
        <img src="/linkedin1.svg" />
        </Link>
        
        <div className="hidden lg:flex relative flex items-center">
          <img
            src="src/assets/icons/search1.svg"
            className="absolute w-4 top-3 left-3"
          />
          <input
            onClick={() => setShow(false)}
            type="text"
            placeholder="Search"
            className="transition-[width] duration-300 border border-[silver] focus:border-2 focus:border-black w-54 focus:w-[420px] pl-9 pr-3 h-9 outline-none rounded-full "
          />
        </div>
      </div>


      <div className="flex  items-center w-full justify-around lg:justify-between lg:w-115 h-full lg:pt-3">
        
         
      <img 
      
       onClick={()=>{setSearchBar(!searchbar)}}
            src="src/assets/icons/search1.svg"
            className="w-5 lg:hidden"
          />
           {searchbar && (
            <div className="absolute">
            <div className="relative">
              <input
           autoFocus="true"
            type="text"
            placeholder="Search"
            className="transition-[width] bg-white duration-300 border-2 w-76  pl-8 pr-3 h-9 outline-3 outline-[#EEC168] rounded-full "
          />
          <img 
      
       
            src="src/assets/icons/search1.svg"
            className="w-5 absolute top-2 left-2 "
          />
            
            </div>
            </div>
          
          
           )}
        
        
        <NavLink to="/home">
          {({ isActive }) => (
            <div
              onClick={() => setShow(false)}
              className={` hover:text-[rgb(0,0,0)] text-[#666666] w-6 lg:w-7 cursor-pointer flex flex-col items-center  ${
                isActive ? "text-black" : ""
              }`}
            >
              <svg
                className="w-full h-full"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 7V9H20V16C20 16.7956 19.6839 17.5587 19.1213 18.1213C18.5587 18.6839 17.7956 19 17 19H13V13H9V19H5C4.20435 19 3.44129 18.6839 2.87868 18.1213C2.31607 17.5587 2 16.7956 2 16V9H0V7L11 0L22 7Z"
                  fill="currentcolor"
                />
              </svg>
              <p className={`text-[13px] hidden lg:block`}>Home</p>
              <div
                className={`w-20 h-[2px] hidden lg:block bg-black transform scale-x-0 origin-center transition-transform duration-300  ${
                  isActive ? "scale-x-100" : ""
                }`}
              ></div>
            </div>
          )}
        </NavLink>

        <NavLink to="/network">
          {({ isActive }) => (
            <div
              onClick={() => setShow(false)}
              className={`lg:w-6 w-5  cursor-pointer hover:text-[rgb(0,0,0)] text-[#666666] flex flex-col items-center ${
                isActive ? "text-black" : ""
              }`}
            >
              <svg
                className="w-full h-full"
                viewBox="0 0 17 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 13.3V19H1.84073e-06V13.3C1.84073e-06 12.5441 0.298513 11.8192 0.829866 11.2847C1.36122 10.7503 2.08189 10.45 2.83333 10.45H5.66667C6.41811 10.45 7.13878 10.7503 7.67014 11.2847C8.20149 11.8192 8.5 12.5441 8.5 13.3ZM13.6944 10.45C14.3482 10.45 14.9873 10.255 15.5309 9.88964C16.0745 9.52429 16.4982 9.00499 16.7484 8.39743C16.9986 7.78986 17.064 7.12132 16.9365 6.47633C16.8089 5.83134 16.4941 5.23889 16.0318 4.77388C15.5695 4.30887 14.9805 3.99219 14.3393 3.8639C13.6981 3.7356 13.0335 3.80145 12.4295 4.05311C11.8255 4.30477 11.3092 4.73094 10.946 5.27774C10.5828 5.82453 10.3889 6.46738 10.3889 7.12501C10.3889 8.00685 10.7372 8.85258 11.3571 9.47614C11.977 10.0997 12.8178 10.45 13.6944 10.45ZM14.6389 12.35H12.75C12.1238 12.35 11.5232 12.6002 11.0804 13.0456C10.6376 13.491 10.3889 14.0951 10.3889 14.725V19H17V14.725C17 14.0951 16.7512 13.491 16.3084 13.0456C15.8657 12.6002 15.2651 12.35 14.6389 12.35ZM4.25 1.06036e-05C3.40943 1.06036e-05 2.58774 0.250735 1.88883 0.720478C1.18992 1.19022 0.645186 1.85788 0.323514 2.63904C0.00184144 3.42019 -0.0823227 4.27975 0.0816645 5.10902C0.245652 5.93829 0.650425 6.70002 1.2448 7.29789C1.83917 7.89576 2.59645 8.30291 3.42087 8.46786C4.24529 8.63282 5.09982 8.54816 5.87641 8.22459C6.65299 7.90103 7.31675 7.35309 7.78375 6.65007C8.25074 5.94705 8.5 5.12052 8.5 4.27501C8.50125 3.71326 8.39217 3.15679 8.17902 2.63756C7.96588 2.11832 7.65288 1.64656 7.25798 1.24934C6.86308 0.852116 6.39407 0.53727 5.87788 0.322874C5.36168 0.108479 4.80847 -0.00124191 4.25 1.06036e-05Z"
                  fill="currentcolor"
                />
              </svg>
              <p className={`text-[13px] hidden lg:block`}>Network</p>
              <div
                className={`hidden lg:block w-20 h-[2px] bg-black transform scale-x-0 origin-center transition-transform duration-300  ${
                  isActive ? "scale-x-100" : ""
                }`}
              ></div>
            </div>
          )}
        </NavLink>

        <NavLink to="/jobs">
          {({ isActive }) => (
            <div
              onClick={() => setShow(false)}
              className={`w-6 lg:w-7 cursor-pointer hover:text-[rgb(0,0,0)] text-[#666666] flex flex-col items-center ${
                isActive ? "text-black" : ""
              }`}
            >
              <svg
                className="w-full h-full"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 4V3C15 2.20435 14.6839 1.44129 14.1213 0.87868C13.5587 0.316071 12.7956 0 12 0H8C7.20435 0 6.44129 0.316071 5.87868 0.87868C5.31607 1.44129 5 2.20435 5 3V4H0V8C0 8.79565 0.316071 9.55871 0.87868 10.1213C1.44129 10.6839 2.20435 11 3 11H17C17.7956 11 18.5587 10.6839 19.1213 10.1213C19.6839 9.55871 20 8.79565 20 8V4H15ZM7 3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H12C12.2652 2 12.5196 2.10536 12.7071 2.29289C12.8946 2.48043 13 2.73478 13 3V4H7V3ZM17 12C17.5695 11.9968 18.1317 11.872 18.6491 11.634C19.1664 11.396 19.627 11.0503 20 10.62V15C20 15.7956 19.6839 16.5587 19.1213 17.1213C18.5587 17.6839 17.7956 18 17 18H3C2.20435 18 1.44129 17.6839 0.87868 17.1213C0.316071 16.5587 0 15.7956 0 15V10.62C0.372999 11.0503 0.833583 11.396 1.35095 11.634C1.86831 11.872 2.43053 11.9968 3 12H17Z"
                  fill="currentcolor"
                />
              </svg>
              <p className="text-[13px] hidden lg:block">Jobs</p>
              <div
                className={`hidden lg:block w-20 h-[2px] bg-black transform scale-x-0 origin-center transition-transform duration-300  ${
                  isActive ? "scale-x-100" : ""
                }`}
              ></div>
            </div>
          )}
        </NavLink>

        <NavLink to="/messaging">
          {({ isActive }) => (
            <div
              onClick={() => setShow(false)}
              className={` lg:w-7 w-6  cursor-pointer hover:text-[rgb(0,0,0)] text-[#666666] flex flex-col items-center ${
                isActive ? "text-black" : ""
              }`}
            >
              <svg
                className="w-full h-full"
                viewBox="0 0 22 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 0H7C5.14348 2.76642e-08 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 8.85652 0.737498 10.637 2.05025 11.9497C3.36301 13.2625 5.14348 14 7 14H11V18L19.16 12.61C20.0512 11.9738 20.7751 11.1311 21.2697 10.1541C21.7643 9.17716 22.0148 8.09493 22 7C22 5.14348 21.2625 3.36301 19.9497 2.05025C18.637 0.737498 16.8565 0 15 0ZM7 8.25C6.75277 8.25 6.5111 8.17669 6.30554 8.03934C6.09998 7.90199 5.93976 7.70676 5.84515 7.47835C5.75054 7.24995 5.72579 6.99861 5.77402 6.75614C5.82225 6.51366 5.9413 6.29093 6.11612 6.11612C6.29093 5.9413 6.51366 5.82225 6.75614 5.77402C6.99861 5.72579 7.24995 5.75054 7.47835 5.84515C7.70676 5.93976 7.90199 6.09998 8.03934 6.30554C8.17669 6.5111 8.25 6.75277 8.25 7C8.25 7.33152 8.1183 7.64946 7.88388 7.88388C7.64946 8.1183 7.33152 8.25 7 8.25ZM11 8.25C10.7528 8.25 10.5111 8.17669 10.3055 8.03934C10.1 7.90199 9.93976 7.70676 9.84515 7.47835C9.75054 7.24995 9.72579 6.99861 9.77402 6.75614C9.82225 6.51366 9.9413 6.29093 10.1161 6.11612C10.2909 5.9413 10.5137 5.82225 10.7561 5.77402C10.9986 5.72579 11.2499 5.75054 11.4784 5.84515C11.7068 5.93976 11.902 6.09998 12.0393 6.30554C12.1767 6.5111 12.25 6.75277 12.25 7C12.25 7.33152 12.1183 7.64946 11.8839 7.88388C11.6495 8.1183 11.3315 8.25 11 8.25ZM15 8.25C14.7528 8.25 14.5111 8.17669 14.3055 8.03934C14.1 7.90199 13.9398 7.70676 13.8452 7.47835C13.7505 7.24995 13.7258 6.99861 13.774 6.75614C13.8222 6.51366 13.9413 6.29093 14.1161 6.11612C14.2909 5.9413 14.5137 5.82225 14.7561 5.77402C14.9986 5.72579 15.2499 5.75054 15.4784 5.84515C15.7068 5.93976 15.902 6.09998 16.0393 6.30554C16.1767 6.5111 16.25 6.75277 16.25 7C16.25 7.33152 16.1183 7.64946 15.8839 7.88388C15.6495 8.1183 15.3315 8.25 15 8.25Z"
                  fill="currentcolor"
                />
              </svg>
              <p className="text-[13px] hidden lg:block">Messaging</p>
              <div
                className={`hidden lg:block w-20 h-[2px] bg-black transform scale-x-0 origin-center transition-transform duration-300  ${
                  isActive ? "scale-x-100" : ""
                }`}
              ></div>
            </div>
          )}
        </NavLink>

        <NavLink to="/notifications">
          {({ isActive }) => (
            <div
              onClick={() => setShow(false)}
              className={`lg:w-6 w-5 cursor-pointer hover:text-[rgb(0,0,0)] text-[#666666] flex flex-col items-center ${
                isActive ? "text-black" : ""
              }`}
            >
              <svg
                className="h-full w-full"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 16.1334H11.134C11.3052 16.4216 11.3969 16.7499 11.3999 17.085C11.4029 17.4201 11.3171 17.75 11.1511 18.0412C10.9851 18.3324 10.7449 18.5745 10.4549 18.7429C10.1649 18.9113 9.83544 19 9.5 19C9.16456 19 8.8351 18.9113 8.5451 18.7429C8.2551 18.5745 8.0149 18.3324 7.84892 18.0412C7.68293 17.75 7.59707 17.4201 7.60008 17.085C7.60308 16.7499 7.69483 16.4216 7.866 16.1334H0V15.1844C0.0463874 14.1872 0.43946 13.2374 1.1115 12.4986L2.0615 11.3883H16.9765L17.9265 12.4986C18.5917 13.2385 18.9722 14.1903 19 15.1844V16.1334ZM15.3995 5.16269C15.2086 3.73446 14.5053 2.42396 13.4204 1.47449C12.3354 0.525029 10.9424 0.00110797 9.5 0C8.05761 0.00110797 6.66461 0.525029 5.57964 1.47449C4.49467 2.42396 3.79144 3.73446 3.6005 5.16269L2.85 10.4393H16.15L15.3995 5.16269Z"
                  fill="currentcolor"
                />
              </svg>
              <p className="text-[13px] hidden lg:block">Notifications</p>
              <div
                className={`hidden lg:block w-20 h-[2px] bg-black transform scale-x-0 origin-center transition-transform duration-300  ${
                  isActive ? "scale-x-100" : ""
                }`}
              ></div>
            </div>
          )}
        </NavLink>

        <div
          
          className={`flex cursor-pointer flex flex-col items-center  pb-1 w-7 h-13 ${!searchbar ? "relative" : ""}`}
          onClick={() => setShow(!show)}
        >
          <div className="h-7 ">
            <img
              src="/src/assets/usericon.png"
              className="w-7 border rounded-full mt-3 lg:mt-0 transition-active duration-300 active:w-6"
            />
          </div>

          <div className="flex hidden lg:flex items-center">
            <p className="text-[13px]">Me</p>
            <div className="text-[#666666] hover:text-black">
              <svg
                className="w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 9.5L12 14.5L17 9.5H7Z" fill="currentcolor" />
              </svg>
            </div>
          </div>

          <div
            ref={profileDivRef}
            className={`bg-[#FFFFFF] shadow-xl lg:shadow-none mr-5 lg:mr-0 absolute top-16 lg:top-14 w-70 right-[-24px] p-2 rounded-tl-xl rounded-bl-xl rounded-br-xl transition-all  ${
              show
                ? "opacity-100 duration-100"
                : "opacity-0 duration-300 pointer-events-none"
            }`}
          >
            <NavLink to="/profile">
              <div className="p-2"  >
                <div className="flex gap-2">
                  <img
                    src="/src/assets/usericon.png"
                    className="w-13 h-13 border rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{DATA[0].name}</p>
                    <p className="text-[14px]">{DATA[0].des}</p>
                  </div>
                </div>
              </div>
            </NavLink>
            <div className="flex justify-center mt-4 ">
              <button
                className="border-2 rounded-full px-22 text-[#378FE9] transition-hover duration-300  cursor-pointer hover:border-[#004182] hover:[box-shadow:inset_0_0_0_1px] hover:bg-[#EBF4FD]"
                onClick={() => navigate("/profile")}
              >
                View Profile
              </button>
            </div>
            <hr className="mt-2 text-[#BBBBBB]"></hr>
            <p onClick={()=>navigate("/")} className="text-[#BBBBBB] hover:underline cursor-pointer px-4 py-2">
              Sign Out
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
