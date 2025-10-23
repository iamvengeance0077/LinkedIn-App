import DATA from "../../public/DATA.json"
import Button from "../components/Button"

const Profile = () => {
  return (
     <div className="md:ml-7 flex justify-center pt-16 md:pt-20 px-2 pb-2 ">
      <div className="bg-[#FFFFFF] overflow-hidden border border-[silver] rounded-lg relative">
        <div className='h-[200px] min-w-200 cursor-pointer overflow-hidden'>
        <img src="src\assets\Linkedincover.jpg" className=" h-full w-full object-cover object-center"/>
        
        
        </div>

        <div className="absolute bg-white bottom-55 cursor-pointer left-8 w-35 h-35 rounded-full  flex items-center justify-center">
        <img src="src\assets\usericon.png" className="w-32 border rounded-full "/>
        </div>



        <div className='px-8 pt-14 pb-5 '>
          <div className="flex justify-between pb-3">
            <div className="w-[70%] ">
              <p className="font-semibold text-[24px]">{DATA[0].name}</p>
              <p className="text-[18px]">{DATA[0].des}</p>
              <p className="text-[14px] pt-1">Kochi, Kerala, India . <span className="font-bold text-[#0A66C2] cursor-pointer hover:underline">Contact info</span> </p>
              <p className="text-[#0A66C2] font-semibold cursor-pointer hover:underline">30 connections</p>
            </div>


            <div className="bg-blue-500 w-[30%]">
              acx
            </div>
          </div>

          <Button title="Add profile section" py="2"/>


        </div>
      </div>
    </div>
  )
}

export default Profile