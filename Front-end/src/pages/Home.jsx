import CreatePostComponent from "../components/CreatePostComponent";
import PostComponent from "../components/PostComponent";
import SideProfileView from "../components/SideProfileView";

const Home = () => {
  return (
    <div className="flex justify-center pt-16 md:pt-20 ">
      <SideProfileView />

      <div className="flex flex-col items-center w-full">
        
        <CreatePostComponent />
        <div className="w-[100%] pl-2 lg:pl-0 md:w-[40%] flex items-center gap-3 cursor-pointer ">
          <div className="h-[1px] w-full bg-[silver]"></div>

          <span className="pb-1 flex w-50 justify-around text-[#BBBBBB]">
            Sort by: <span className="text-black flex font-semibold">Top

            <div className="w-6 pt-0.5">
              <svg className="h-full w-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 9.5L12 14.5L17 9.5H7Z" fill="black"/>
</svg>
            </div>

            </span>
          </span>
          
        </div>
        <PostComponent />
      </div>
    </div>
  );
};

export default Home;
