import DATA from "../../public/DATA.json"
import SideProfileView from "../components/SideProfileView";
import Button from "../components/Button"

const Notifications = () => {
  return (
    <div className="md:ml-7 flex justify-center pt-16 md:pt-20 px-2 pb-2 ">
      <SideProfileView />
      <div className="bg-[#FFFFFF] overflow-hidden  border border-[silver] rounded-lg">
        {DATA.map((i,index)=>(
        
            <div className="cursor-pointer border-b p-5 hover:bg-[#EBEBEB] border-[silver] flex gap-5 items-center">
              
                <img src={i.image} className="w-10 h-10"/>
              
              <div className="w-full">
                <p className="pb-2">{i.des}</p>
                
                  <Button title="View jobs" px={12} />
               
              </div>
              <button className="cursor-pointer hover:bg-[#E1E1E1] rounded-full w-9 h-8 flex items-center justify-center">
                <div className="w-6">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#1C274C"/>
<path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#1C274C"/>
<path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#1C274C"/>
</svg>
              </div>
              </button>
          </div>
        
          
        ))}
      </div>
    </div>
  )
}

export default Notifications