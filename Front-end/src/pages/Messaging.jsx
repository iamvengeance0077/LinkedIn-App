import { useEffect, useRef, useState } from "react"
import DATA from "../../public/DATA.json"
import MDATA from "../../public/MESSAGE_DATA.json"

const Messaging = () => {

  const [selectedUser,setSelectedUser]=useState(DATA[0]);

  const [searchBar,setSearchBar]=useState("");
  

  const [message,setMessage]=useState("");

  //border style animation states
  const [borderShow,setBorderShow]=useState(false);
  const textAreaRef=useRef();
  useEffect(()=>{
    const handleBorderStyle=(e)=>{
      if(textAreaRef.current && !textAreaRef.current.contains(e.target)){
        setBorderShow(false);
      }
    };
    document.addEventListener("mousedown",handleBorderStyle);
    return ()=> document.removeEventListener("mousedown",handleBorderStyle);
  },[])


  const UserList=()=>{
    return DATA.filter((user)=>{
      return (user.name + user.skill).toLowerCase().includes(searchBar.toLowerCase());
    })
  }


  return (
    <div className='pt-16 flex justify-center pb-2'>
        <div className='bg-[#FFFFFF] h-[90vh] border overflow-hidden border-[silver] rounded-lg min-w-200'>
          <div className='p-3'>
            <div className='flex justify-between items-center'>
            <div className='flex gap-3 items-center h-8'>
              <p className='text-[18px]'>Messaging</p>
            <div className='relative h-full'>
              <input type="text" value={searchBar} onChange={(e)=>{setSearchBar(e.target.value)}} placeholder='Search messages' className='bg-[#EDF3F8] border-none hover:outline-3 focus:outline-3 h-full pl-7 pr-2 rounded active:bg-[#F4F2EE] active:outline-2'/>
              <img src="src/assets/icons/search1.svg" className='absolute top-2.5 left-2'/>
            </div>
            </div>
          <div>
            <button className='cursor-pointer rounded-full hover:bg-gray-100 h-10 w-10 flex items-center justify-center'>
              <div className='w-7'>
                <svg className='w-full h-full' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.1213 2.70705C19.9497 1.53548 18.0503 1.53547 16.8787 2.70705L15.1989 4.38685L7.29289 12.2928C7.16473 12.421 7.07382 12.5816 7.02986 12.7574L6.02986 16.7574C5.94466 17.0982 6.04451 17.4587 6.29289 17.707C6.54127 17.9554 6.90176 18.0553 7.24254 17.9701L11.2425 16.9701C11.4184 16.9261 11.5789 16.8352 11.7071 16.707L19.5556 8.85857L21.2929 7.12126C22.4645 5.94969 22.4645 4.05019 21.2929 2.87862L21.1213 2.70705ZM18.2929 4.12126C18.6834 3.73074 19.3166 3.73074 19.7071 4.12126L19.8787 4.29283C20.2692 4.68336 20.2692 5.31653 19.8787 5.70705L18.8622 6.72357L17.3068 5.10738L18.2929 4.12126ZM15.8923 6.52185L17.4477 8.13804L10.4888 15.097L8.37437 15.6256L8.90296 13.5112L15.8923 6.52185ZM4 7.99994C4 7.44766 4.44772 6.99994 5 6.99994H10C10.5523 6.99994 11 6.55223 11 5.99994C11 5.44766 10.5523 4.99994 10 4.99994H5C3.34315 4.99994 2 6.34309 2 7.99994V18.9999C2 20.6568 3.34315 21.9999 5 21.9999H16C17.6569 21.9999 19 20.6568 19 18.9999V13.9999C19 13.4477 18.5523 12.9999 18 12.9999C17.4477 12.9999 17 13.4477 17 13.9999V18.9999C17 19.5522 16.5523 19.9999 16 19.9999H5C4.44772 19.9999 4 19.5522 4 18.9999V7.99994Z" fill="#000000"/>
</svg>
              </div>
            </button>
          </div>
          </div>
          </div>
          <hr className='text-[silver]'/>


          <div className="flex">
            <div className="h-[calc(90vh-64px)] overflow-y-auto w-[40%] border-r border-[silver] [&::-webkit-scrollbar]:hidden">
              {UserList().length>0 ? (
                UserList().map((user,index)=>(
                <div key={index} onClick={()=>{setSelectedUser(user)}} className={`relative border-b border-[silver] cursor-pointer  p-3 flex gap-3 items-center  ${selectedUser.id === user.id ? "bg-[#EDF3F8]" : "hover:bg-[#EBEBEB] "}`}>
                  <div className={`w-[5px] bg-[#01754f] h-full absolute top-0 left-0 ${selectedUser.id === user.id ? "" : "hidden"}`}></div>
                  <img src={user.image} className="w-15 h-15 rounded-full"/>
                  <div>
                    <p className="font-bold">{user.name}</p>
                    <p className="truncate w-50">{user.des}</p>
                  </div>
                </div>
              ))
              ) : (
                <div className="h-full flex items-center justify-center text-center">
                  <div className="w-70 flex flex-col items-center">
                    <img src="src\assets\NoResult.png"/>
                    <p className="font-semibold text-[24px]">We didn't find anything with "{searchBar}"</p>
                  <p>Search by recipient name, message content, or conversation name</p>
                  </div>
                </div>
              ) }
            </div>



            <div className="w-[60%]">
              {selectedUser && (
                  <div className="h-full">
                      <div className="pl-3 border-b border-[silver] py-2">
                        <p className="font-bold text-[14px]">{selectedUser.name}</p>
                        <p>{selectedUser.skill}</p>
                      </div>

                      <div className="overflow-y-auto h-[35%] py-2 [&::-webkit-scrollbar]:hidden">
                        <div className="border-b border-[silver] pl-3">
                         <img src= {selectedUser.image} className="rounded-full h-18 w-18"/>
                         <div className="py-2">
                          <p className="font-bold">{selectedUser.name}</p>
                          <p>{selectedUser.skill}</p>
                         </div>
                        </div>
                        <div className="pl-3 pt-2 flex gap-2 items-center">
                          <img src={selectedUser.image} className="rounded-full w-12 h-12"/>
                          <p className="font-bold text-[13px]">{selectedUser.name}</p>
                        </div>
                        <div className="pl-3">
                          {MDATA.map((ms)=>(
                            <p>{ms.message}</p>
                          ))}
                        </div>
                      </div>


                      <div className="border-t-3  border-[#E8E8E8] relative">
                        <div className={`bg-[#01754f] absolute w-full h-0.5 bottom-full transition-transform duration-400 transform origin-left scale-x-0 ${ borderShow ? " scale-x-100  " : ""} `}></div>
                            <div className="p-2">
                            <textarea ref={textAreaRef} onClick={()=>{setBorderShow(true)}} placeholder="Write a message..." value={message} onChange={(e)=>{setMessage(e.target.value)}} className="outline-none min-h-25 bg-[#F4F2EE] h-full w-full rounded-lg px-3 py-1 [&::-webkit-scrollbar]:hidden resize-none"/>

                          </div>
                          
                      </div>
                      <div className="border-t border-[silver] flex items-center justify-between p-3">
                            <div className="flex gap-2">
                              <button className="hover:bg-[#F4F2EE] cursor-pointer transition-hover duration-300 h-9 w-9 rounded-full flex items-center justify-center">
                              <div className="w-5 text-[#666666] hover:text-[#000000]">
                              <svg className="w-full h-full" viewBox="0 -2 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    
    <title>image_picture [#971]</title>
    <desc>Created with Sketch.</desc>
    <defs>

</defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-420.000000, -3881.000000)" fill="currentcolor">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M376.083,3725.667 C376.083,3724.562 376.978,3723.667 378.083,3723.667 C379.188,3723.667 380.083,3724.562 380.083,3725.667 C380.083,3726.772 379.188,3727.667 378.083,3727.667 C376.978,3727.667 376.083,3726.772 376.083,3725.667 L376.083,3725.667 Z M382,3733.086 L377.987,3729.074 L377.971,3729.089 L377.955,3729.074 L376.525,3730.504 L371.896,3725.876 L371.881,3725.892 L371.865,3725.876 L366,3731.741 L366,3723 L382,3723 L382,3733.086 Z M364,3737 L384,3737 L384,3721 L364,3721 L364,3737 Z" id="image_picture-[#971]">

</path>
            </g>
        </g>
    </g>
</svg>
                            </div>
                            </button>
                            <button className="hover:bg-[#F4F2EE] cursor-pointer transition-hover duration-300 h-9 w-9 rounded-full flex items-center justify-center">
                              <div className="w-6 text-[#666666] hover:text-[#000000]">
                              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="style=stroke">
<g id="attach">
<path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M17.3656 4.70536C16.2916 3.63142 14.5504 3.63142 13.4765 4.70536L5.34477 12.8371C3.68504 14.4968 3.68504 17.1878 5.34477 18.8475C7.0045 20.5072 9.69545 20.5072 11.3552 18.8475L20.1172 10.0855C20.41 9.79263 20.8849 9.79263 21.1778 10.0855C21.4707 10.3784 21.4707 10.8533 21.1778 11.1462L12.4158 19.9082C10.1703 22.1537 6.52963 22.1537 4.28411 19.9082C2.0386 17.6626 2.0386 14.0219 4.28411 11.7764L12.4158 3.6447C14.0756 1.98497 16.7665 1.98497 18.4262 3.6447C20.086 5.30443 20.086 7.99538 18.4262 9.65511L10.6327 17.4487C9.55876 18.5226 7.81756 18.5226 6.74361 17.4487C5.66967 16.3747 5.66967 14.6335 6.74361 13.5596L13.9377 6.36552C14.2305 6.07263 14.7054 6.07263 14.9983 6.36552C15.2912 6.65842 15.2912 7.13329 14.9983 7.42618L7.80427 14.6202C7.31612 15.1084 7.31612 15.8998 7.80427 16.388C8.29243 16.8761 9.08389 16.8761 9.57204 16.388L17.3656 8.59445C18.4395 7.5205 18.4395 5.7793 17.3656 4.70536Z" fill="currentcolor"/>
</g>
</g>
</svg>
                            </div>
                            </button>
                            <button className="hover:bg-[#F4F2EE] cursor-pointer transition-hover duration-300 h-9 w-9 rounded-full flex items-center justify-center">
                              <div className="w-6 text-[#666666] hover:text-[#000000]">
                              <svg className="h-full w-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="currentcolor"/>
<path d="M17 9.5C17 10.3284 16.3284 11 15.5 11C14.6716 11 14 10.3284 14 9.5C14 8.67157 14.6716 8 15.5 8C16.3284 8 17 8.67157 17 9.5Z" fill="currentcolor"/>
<path d="M8.88875 13.5414C8.63822 13.0559 8.0431 12.8607 7.55301 13.1058C7.05903 13.3528 6.8588 13.9535 7.10579 14.4474C7.18825 14.6118 7.29326 14.7659 7.40334 14.9127C7.58615 15.1565 7.8621 15.4704 8.25052 15.7811C9.04005 16.4127 10.2573 17.0002 12.0002 17.0002C13.7431 17.0002 14.9604 16.4127 15.7499 15.7811C16.1383 15.4704 16.4143 15.1565 16.5971 14.9127C16.7076 14.7654 16.8081 14.6113 16.8941 14.4485C17.1387 13.961 16.9352 13.3497 16.4474 13.1058C15.9573 12.8607 15.3622 13.0559 15.1117 13.5414C15.0979 13.5663 14.9097 13.892 14.5005 14.2194C14.0401 14.5877 13.2573 15.0002 12.0002 15.0002C10.7431 15.0002 9.96038 14.5877 9.49991 14.2194C9.09071 13.892 8.90255 13.5663 8.88875 13.5414Z" fill="currentcolor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 20.9932C7.03321 20.9932 3.00683 16.9668 3.00683 12C3.00683 7.03321 7.03321 3.00683 12 3.00683C16.9668 3.00683 20.9932 7.03321 20.9932 12C20.9932 16.9668 16.9668 20.9932 12 20.9932Z" fill="currentcolor"/>
</svg>
                            </div>
                            </button>
                            </div>
                          <button className={`rounded-full px-6 py-1 transition-all duration-300 font-semibold ${message ? "bg-blue-500  cursor-pointer text-white hover:bg-[#004182]" : "cursor-not-allowed bg-[#E8E8E8] text-[#A2A2A2]"}`}>Send</button>
                      </div>
                  </div>
                  
              
              )}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Messaging