import { useNavigate } from "react-router-dom";
import DATA from "../../public/DATA.json";

const SideProfileView = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed left-54 hidden xl:block">
      <div className="bg-[#FFFFFF] border border-[silver] flex flex-col justify-center gap-1  px-3 rounded-lg h-52 w-55  ">
        <img
          onClick={() => navigate("/profile")}
          src="/src/assets/usericon.png"
          className="w-16 border rounded-full cursor-pointer"
        />

        <div
          onClick={() => navigate("/profile")}
          className="text-[13px] flex flex-col gap-1 hover:cursor-pointer"
        >
          <p className="font-bold text-[20px]">{DATA[0].name}</p>
          <p>{DATA[0].des}</p>
          <p>{DATA[0].status}</p>
        </div>
      </div>

      <div className="bg-[#FFFFFF] border border-[silver] mt-2 flex flex-col justify-center gap-1  px-3 rounded-lg py-4 w-55 fixed left-54 ">
        <div
          onClick={() => navigate("/network")}
          className="text-[13px] flex hover:underline flex-col gap-1 hover:cursor-pointer"
        >
          <p className=" font-bold">Connections</p>
          <p>Grow your network</p>
        </div>
      </div>
    </div>
  );
};

export default SideProfileView;
