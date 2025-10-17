import { useNavigate } from "react-router-dom";

const CreatePostComponent = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-[#FFFFFF] border border-[silver] flex flex-col gap-4 rounded-lg p-3 w-full md:w-[40%]">
        <div className="flex gap-3 flex justify-between ">
          <img
            src="/src/assets/usericon.png"
            className="w-11 rounded-full border cursor-pointer"
            onClick={() => navigate("/profile")}
          />
          <input
            type="text"
            placeholder="Start a post"
            className="border border-[silver] placeholder:text-black rounded-full px-3 w-full hover:bg-[#F3F3F3] outline-none"
          />
        </div>

        <div className="flex items-center justify-around">
          <div className="h-13 hover:bg-[#F3F3F3] lg:w-25 flex items-center gap-1 lg:gap-3 flex items-center justify-center rounded-lg cursor-pointer">
            <div className="w-7 text-[#5F9B41]">
              <svg
                className="w-full h-full"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 2H0V14H16V2ZM6.5 5V11H7.5L11 8L7.5 5H6.5Z"
                  fill="currentcolor"
                />
              </svg>
            </div>

            <p>Video</p>
          </div>
          <label htmlFor="image-input">
            <div className="h-13 hover:bg-[#F3F3F3] lg:w-25 flex items-center gap-1 lg:gap-3  flex items-center justify-center rounded-lg cursor-pointer">
              <div className="w-7 text-[#378FE9]">
                <svg
                  className="w-full h-full"
                  viewBox="0 -2 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <title>image_picture [#971]</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-420.000000, -3881.000000)"
                      fill="currentcolor"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M376.083,3725.667 C376.083,3724.562 376.978,3723.667 378.083,3723.667 C379.188,3723.667 380.083,3724.562 380.083,3725.667 C380.083,3726.772 379.188,3727.667 378.083,3727.667 C376.978,3727.667 376.083,3726.772 376.083,3725.667 L376.083,3725.667 Z M382,3733.086 L377.987,3729.074 L377.971,3729.089 L377.955,3729.074 L376.525,3730.504 L371.896,3725.876 L371.881,3725.892 L371.865,3725.876 L366,3731.741 L366,3723 L382,3723 L382,3733.086 Z M364,3737 L384,3737 L384,3721 L364,3721 L364,3737 Z"
                          id="image_picture-[#971]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <input
                id="image-input"
                type="file"
                accept="image/*"
                className="hidden"
              />
              <p>Photo</p>
            </div>
          </label>

          <div className="h-13 hover:bg-[#F3F3F3] lg:w-37 flex items-center gap-1 lg:gap-3  flex items-center justify-center rounded-lg cursor-pointer">
            <div className="w-7 text-[#E06847]">
              <svg
                fill="currentcolor"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                className="w-full h-full"
                viewBox="0 0 986.8 986.8"
                xml:space="preserve"
              >
                <g>
                  <path
                    d="M399.8,164.649H110.5c-22.1,0-40,17.9-40,40c0,22.1,17.9,40,40,40h289.3c22.101,0,40-17.9,40-40
		C439.8,182.55,421.9,164.649,399.8,164.649z"
                  />
                  <path
                    d="M399.8,450.85H206.5c-22.1,0-40,17.9-40,40c0,22.099,17.9,40,40,40h193.3c22.101,0,40-17.9,40-40
		C439.8,468.75,421.9,450.85,399.8,450.85z"
                  />
                  <path d="M399.8,307.75H40c-22.1,0-40,17.9-40,40s17.9,40,40,40h359.8c22.101,0,40-17.9,40-40S421.9,307.75,399.8,307.75z" />
                  <path
                    d="M399.8,594.05H40c-22.1,0-40,17.898-40,40c0,22.1,17.9,40,40,40h359.8c22.101,0,40-17.9,40-40
		C439.8,611.949,421.9,594.05,399.8,594.05z"
                  />
                  <path d="M399.8,737.15H40c-22.1,0-40,17.9-40,40s17.9,40,40,40h359.8c22.101,0,40-17.9,40-40S421.9,737.15,399.8,737.15z" />
                  <path
                    d="M926.8,160.25H572.4c-33.101,0-60,26.9-60,60V766.55c0,33.1,26.899,60,60,60H926.8c33.101,0,60-26.9,60-60V220.25
		C986.8,187.05,960,160.25,926.8,160.25z"
                  />
                </g>
              </svg>
            </div>

            <p>Write article</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePostComponent;
