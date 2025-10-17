import { useState } from "react";
import DATA from "../../public/DATA.json";

const PostComponent = () => {
  const [posts, setPost] = useState(DATA);

  const toggleLike = (id) => {
    setPost((prev) => {
      return prev.map((prevPosts) => {
        return prevPosts.id === id
          ? { ...prevPosts, like: !prevPosts.like }
          : prevPosts;
      });
    });
  };

  const toggleComment = (id) => {
    setPost((prev) => {
      return prev.map((prevPost) => {
        return prevPost.id === id
          ? { ...prevPost, comment: !prevPost.comment }
          : prevPost;
      });
    });
  };

  return (
    <>
      <div className="flex flex-col gap-4 w-[40%] pb-2 pt-2 md:pt-0 w-full md:w-[40%]">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-[#FFFFFF] border border-[silver] flex flex-col gap-2 rounded-lg w-full"
          >
            <div className="p-2 flex gap-3">
              <img src={post.image} className="rounded-full w-14 h-14" />
              <div className="leading-[20px]">
                <p className="font-bold">{post.name}</p>
                <p className="text-[12px]">{post.status}</p>
                <p className="text-[12px]">{post.date}</p>
              </div>
            </div>
            <div className="p-2 text-[14px]">{post.des}</div>
            <img src={post.image} />
            <div className="p-2 flex justify-around">
              <div
                onClick={() => toggleLike(post.id)}
                className="flex gap-2 rounded-md h-10 items-center w-35 cursor-pointer hover:bg-[#F3F3F3] justify-center"
              >
                <div className="w-6">
                  {post.like ? (
                    <svg
                      fill="#000000"
                      className="h-full w-full"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 232.665 232.665"
                      xml:space="preserve"
                    >
                      <g>
                        <path
                          d="M205.428,128.634c6.81-8.589,9.181-22.092,5.294-33.304c-3.91-11.281-13.395-17.998-25.371-17.998h-48.991
		c-0.162,0-0.33-0.019-0.497-0.302c-0.161-0.276-0.086-0.42-0.007-0.563c6.795-12.183,11.35-25.426,14.908-36.767
		c3.221-10.264,1.771-20.64-3.975-28.465C141.624,4.201,133.416,0,124.832,0c-10.059,0-19.409,5.563-25.652,15.264
		c-4.906,7.623-9.152,15.453-13.258,23.025C79.539,50.06,73.511,61.177,66.974,67.518c-5.227,5.066-20.685,15.003-29.922,20.939
		c-3.313,2.13-6.256,3.968-8.368,5.386c-3.799,2.55-8.61,5.723-8.61,12.43v79.825c0,8.241,5.996,15.127,14.142,16.373l27.227,4.158
		c26.337,17.039,51.792,26.036,73.664,26.036c6.078,0,11.935-0.691,17.388-2.056c12.962-3.24,22.223-9.323,27.514-18.08
		c3.309-5.476,4.446-11.006,4.613-15.684c4.776-2.615,8.59-6.74,11.017-12.013c3.602-7.825,3.639-16.661,1.9-23.703
		C206.552,152.76,208.235,138.778,205.428,128.634z M186.674,154.263c-2.15,1.156-3.165,3.743-2.108,5.944
		c3.784,7.878,3.233,24.127-8.71,27.308c-2.242,0.598-3.699,2.704-3.405,5.006c0.909,7.13-0.509,20.861-22.857,26.447
		c-4.491,1.123-9.322,1.697-14.467,1.697c-19.089,0-42.453-7.903-68.421-24.957c-0.544-0.357-1.162-0.598-1.806-0.696l-28.871-4.403
		c-2.228-0.341-3.956-2.257-3.956-4.511v-79.825c0-1.204,33.353-20.624,43.171-30.142c12.427-12.053,21.31-34.681,33.983-54.373
		c4.405-6.845,10.201-9.759,15.584-9.759c10.103,0,18.831,10.273,14.493,24.104c-4.018,12.804-8.195,24.237-13.934,34.529
		c-4.672,8.376,1.399,18.7,10.989,18.7h48.991c18.852,0,18.321,26.313,8.552,34.01c-1.676,1.32-2.182,3.682-1.175,5.563
		C196.246,135.477,195.588,149.471,186.674,154.263z"
                        />
                      </g>
                    </svg>
                  ) : (
                    <svg
                      className="h-full w-full"
                      viewBox="-1.35 0 1504.4 1504.4"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <style>{`.st0{fill:#5e91ff}.st1{fill:#fff}`}</style>
                      <title>Like</title>
                      <ellipse
                        class="st0"
                        cx="750.8"
                        cy="752.2"
                        rx="750.8"
                        ry="752.2"
                      />
                      <path
                        class="st1"
                        d="M378.3 667.5h165.1c13 0 23.6 10.5 23.6 23.6v379.1c0 13-10.5 23.6-23.6 23.6H378.3c-13 0-23.6-10.5-23.6-23.6V691c.1-13 10.6-23.5 23.6-23.5zM624.7 1004.7V733.1c.1-66.9 18.8-132.4 54.1-189.2 21.5-34.4 69.7-89.5 96.7-118 6-6.4 27.8-25.2 27.8-35.5 0-13.2 1.5-34.5 2-74.2.3-25.2 20.8-45.9 46-45.7h1.1c44.1.8 58.2 41.6 58.2 41.6s37.7 74.4 2.5 165.4c-29.7 76.9-35.8 83.1-35.8 83.1s-9.6 13.9 20.8 13.3c0 0 185.6-.8 192-.8 13.7 0 57.4 12.5 54.9 68.2-1.8 41.2-27.4 55.6-40.5 60.3-1.7.6-2.6 2.5-1.9 4.2.3.7.8 1.3 1.5 1.7 13.4 7.8 40.8 27.5 40.2 57.7-.8 36.6-15.5 50.1-46.1 58.5-1.7.4-2.8 2.2-2.3 3.9.2.9.8 1.6 1.5 2 11.6 6.6 31.5 22.7 30.3 55.3-1.2 33.2-25.2 44.9-38.3 48.9-1.7.5-2.7 2.3-2.2 4 .2.7.7 1.4 1.3 1.8 8.3 5.7 20.6 18.6 20 45.1-.3 14-5 24.2-10.9 31.5-9.3 11.5-23.9 17.5-38.7 17.6l-411.8.8c-.1-.1-22.4 0-22.4-29.9z"
                      />
                    </svg>
                  )}
                </div>
                <p>Likes</p>
              </div>
              <div
                onClick={() => {
                  toggleComment(post.id);
                }}
                className="flex gap-2 rounded-md h-10 items-center w-35 cursor-pointer hover:bg-[#F3F3F3] justify-center"
              >
                <div className="w-6">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                  >
                    <title>comment-2</title>
                    <desc>Created with Sketch Beta.</desc>
                    <defs></defs>
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                      sketch:type="MSPage"
                    >
                      <g
                        id="Icon-Set"
                        sketch:type="MSLayerGroup"
                        transform="translate(-152.000000, -255.000000)"
                        fill="#000000"
                      >
                        <path
                          d="M168,281 C166.832,281 165.704,280.864 164.62,280.633 L159.912,283.463 L159.975,278.824 C156.366,276.654 154,273.066 154,269 C154,262.373 160.268,257 168,257 C175.732,257 182,262.373 182,269 C182,275.628 175.732,281 168,281 L168,281 Z M168,255 C159.164,255 152,261.269 152,269 C152,273.419 154.345,277.354 158,279.919 L158,287 L165.009,282.747 C165.979,282.907 166.977,283 168,283 C176.836,283 184,276.732 184,269 C184,261.269 176.836,255 168,255 L168,255 Z M175,266 L161,266 C160.448,266 160,266.448 160,267 C160,267.553 160.448,268 161,268 L175,268 C175.552,268 176,267.553 176,267 C176,266.448 175.552,266 175,266 L175,266 Z M173,272 L163,272 C162.448,272 162,272.447 162,273 C162,273.553 162.448,274 163,274 L173,274 C173.552,274 174,273.553 174,273 C174,272.447 173.552,272 173,272 L173,272 Z"
                          id="comment-2"
                          sketch:type="MSShapeGroup"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <p>Comment</p>
              </div>
              <div className="flex gap-2 rounded-md h-10 items-center cursor-pointer w-35 hover:bg-[#F3F3F3] justify-center">
                <div className="w-6">
                  <svg
                    fill="#000000"
                    className="h-full w-full"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 334.5 334.5"
                    xml:space="preserve"
                  >
                    <path
                      d="M332.797,13.699c-1.489-1.306-3.608-1.609-5.404-0.776L2.893,163.695c-1.747,0.812-2.872,2.555-2.893,4.481
	s1.067,3.693,2.797,4.542l91.833,45.068c1.684,0.827,3.692,0.64,5.196-0.484l89.287-66.734l-70.094,72.1
	c-1,1.029-1.51,2.438-1.4,3.868l6.979,90.889c0.155,2.014,1.505,3.736,3.424,4.367c0.513,0.168,1.04,0.25,1.561,0.25
	c1.429,0,2.819-0.613,3.786-1.733l48.742-56.482l60.255,28.79c1.308,0.625,2.822,0.651,4.151,0.073
	c1.329-0.579,2.341-1.705,2.775-3.087L334.27,18.956C334.864,17.066,334.285,15.005,332.797,13.699z"
                    />
                  </svg>
                </div>
                <p>Send</p>
              </div>
            </div>

            {!post.comment && (
              <div className="px-3 py-2 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/src/assets/usericon.png"
                    className="w-7 rounded-full border"
                  />
                  <div className="h-10 w-full rounded-full border border-[silver] flex">
                    <input
                      typr="text"
                      placeholder="Add a comment..."
                      className=" border-none px-4 outline-none w-full"
                    />
                    <div className="flex gap-3 items-center justify-around px-3">
                      <div className="rounded-full hover:bg-[#F3F3F3] w-10 h-10 cursor-pointer flex items-center justify-center">
                        <div className="w-6 text-[#181818]">
                          <svg
                            className="w-full h-full"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z"
                              fill="currentcolor"
                            />
                            <path
                              d="M17 9.5C17 10.3284 16.3284 11 15.5 11C14.6716 11 14 10.3284 14 9.5C14 8.67157 14.6716 8 15.5 8C16.3284 8 17 8.67157 17 9.5Z"
                              fill="currentcolor"
                            />
                            <path
                              d="M8.88875 13.5414C8.63822 13.0559 8.0431 12.8607 7.55301 13.1058C7.05903 13.3528 6.8588 13.9535 7.10579 14.4474C7.18825 14.6118 7.29326 14.7659 7.40334 14.9127C7.58615 15.1565 7.8621 15.4704 8.25052 15.7811C9.04005 16.4127 10.2573 17.0002 12.0002 17.0002C13.7431 17.0002 14.9604 16.4127 15.7499 15.7811C16.1383 15.4704 16.4143 15.1565 16.5971 14.9127C16.7076 14.7654 16.8081 14.6113 16.8941 14.4485C17.1387 13.961 16.9352 13.3497 16.4474 13.1058C15.9573 12.8607 15.3622 13.0559 15.1117 13.5414C15.0979 13.5663 14.9097 13.892 14.5005 14.2194C14.0401 14.5877 13.2573 15.0002 12.0002 15.0002C10.7431 15.0002 9.96038 14.5877 9.49991 14.2194C9.09071 13.892 8.90255 13.5663 8.88875 13.5414Z"
                              fill="currentcolor"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 20.9932C7.03321 20.9932 3.00683 16.9668 3.00683 12C3.00683 7.03321 7.03321 3.00683 12 3.00683C16.9668 3.00683 20.9932 7.03321 20.9932 12C20.9932 16.9668 16.9668 20.9932 12 20.9932Z"
                              fill="currentcolor"
                            />
                          </svg>
                        </div>
                      </div>

                      <div className="rounded-full hover:bg-[#F3F3F3] w-10 h-10 cursor-pointer flex items-center justify-center">
                        <div className="w-6 text-[#181818]">
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
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-5">
                  {DATA.map((comment) => (
                    <div className="flex flex-col">
                      <div className="flex gap-2 flex items-center">
                        <img
                          src={comment.image}
                          className="w-7 h-7 rounded-full"
                        />
                        <div className="leading-4">
                          <p>{comment.name}</p>
                          <p className="text-[12px]">{comment.status}</p>
                        </div>
                      </div>
                      <p className="pl-9">{comment.des}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default PostComponent;
