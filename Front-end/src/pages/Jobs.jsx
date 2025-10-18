import DATA from "../../public/DATA.json";
import SideProfileView from "../components/SideProfileView";

const Jobs = () => {
  return (
    <div className="flex justify-center pt-16 md:pt-20 px-2 pb-2 ">
      <SideProfileView />
      <div className="bg-[#FFFFFF] p-3 border border-[silver] rounded-lg">
        <p className="font-bold text-[24px]">Jobs for you</p>
        {DATA.map((i,index)=>(
          <div className="border-b cursor-pointer border-[silver] flex gap-3 items-center p-3">
              
                <img src={i.image} className="w-15 h-15"/>
              
              <div>
                <p>{i.name}</p>
              <p>{i.des}</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
