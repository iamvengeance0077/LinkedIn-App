import { useState } from "react"
import DATA from "../../public/DATA.json"

const Messaging = () => {

  const [selectedUser,setSelectedUser]=useState("")


  return (
    <div className='pt-16 flex justify-center pb-2'>
        <div className='bg-[#FFFFFF] h-[90vh] border overflow-hidden border-[silver] rounded-lg min-w-200'>
          <div className='p-3'>
            <div className='flex justify-between items-center'>
            <div className='flex gap-3 items-center h-8'>
              <p className='text-[18px]'>Messaging</p>
            <div className='relative h-full'>
              <input type="text" placeholder='Search messages' className='bg-[#EDF3F8] border-none hover:outline-3 focus:outline-3 h-full pl-7 pr-2 rounded active:bg-[#F4F2EE] active:outline-2'/>
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
              {DATA.map((user,index)=>(
                <div key={index} onClick={()=>{setSelectedUser(user)}} className={`relative border-b border-[silver] cursor-pointer  p-3 flex gap-3 items-center  ${selectedUser.id === user.id ? "bg-[#EDF3F8]" : "hover:bg-[#EBEBEB] "}`}>
                  <div className={`w-[5px] bg-[#01754f] h-full absolute top-0 left-0 ${selectedUser.id === user.id ? "" : "hidden"}`}></div>
                  <img src={user.image} className="w-15 h-15 rounded-full"/>
                  <div>
                    <p className="font-bold">{user.name}</p>
                    <p className="truncate w-50">{user.des}</p>
                  </div>
                </div>
              ))}
            </div>



            <div className="w-[60%]">
              {selectedUser && (
                  <div className="h-full flex flex-col">
                      <div className=" pl-3 h-[10%] border-b border-[silver]">
                        <p className="font-bold">{selectedUser.name}</p>
                        <p>{selectedUser.skill}</p>
                      </div>
                      <div className="h-[60%] overflow-y-auto border-b border-[silver] pl-3 [&::-webkit-scrollbar]:hidden">
                        {DATA.map((user)=>(
                          <div>
                            <p>{user.name}</p>
                            
                          </div>
                        ))}
                      </div>
                      <div>

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