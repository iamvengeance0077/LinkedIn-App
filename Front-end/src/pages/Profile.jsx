import DATA from "../../public/DATA.json"
import Button from "../components/Button"
import ReadMoreText from "../components/Extra/ReadMoreText"

const Profile = () => {

  const text=`Im NAME , a final year  student with a strong passion for technology, especially in the field of full-stack web development. I enjoy building practical and user-friendly applications that solve real-world problems.
I have hands-on experience with front-end technologies like HTML, CSS, JavaScript, React along with back-end frameworks such as Node.js and Express.js. Ive also worked with MongoDB for database management.
Im also learning additional programming languages and frameworks in my free time, constantly exploring new technologies to improve my skills. I'm currently focused on strengthening my knowledge in areas like C++ and React native.
Im actively looking for entry-level opportunities where I can apply my skills, contribute to meaningful projects, and continue growing as a developer.
 Lets connect!`


  return (
     <div className="md:ml-7 flex  justify-center pt-16 md:pt-20 px-2 pb-2 ">
     
     <div className="flex flex-col gap-2">

     <div className="bg-[#FFFFFF]  overflow-hidden border border-[silver] rounded-lg relative">
        <div className='h-[200px] min-w-200 cursor-pointer overflow-hidden'>
        <img src="src\assets\Linkedincover.jpg" className=" h-full w-full object-cover object-center"/>
        
        
        </div>

        <div className="absolute bg-white bottom-58 cursor-pointer left-8 w-35 h-35 rounded-full  flex items-center justify-center">
        <img src="src\assets\usericon.png" className="w-32 border rounded-full "/>
        </div>



          <div className="mt-5 px-8 flex justify-end">
            <button className="cursor-pointer transistion-hover duration-300 hover:bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center">
              <div className='w-6'>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z" fill="#0F0F0F"/>
</svg>
              </div>
            </button>
          </div>
        <div className='px-8 pt- pb-5'>
          <div className="flex justify-between mb-4">
            <div className="w-[70%] ">
              <p className="font-semibold text-[24px]">{DATA[0].name}</p>
              <p className="text-[18px]">{DATA[0].des}</p>
              <p className="text-[14px] pt-1">Kochi, Kerala, India • <span className="font-bold text-[#0A66C2] cursor-pointer hover:underline">Contact info</span> </p>
              <span className="text-[#0A66C2] font-semibold cursor-pointer hover:underline">30 connections</span>
            </div>


            <div className="w-[30%]">
              {/* adding company/college worked */}
            </div>
          </div>
          <Button title="Add profile section" py="2"/>
        </div>
      </div>



    <div className="bg-[#FFFFFF] w-200  border border-[silver] rounded-lg p-8">
      <div className="flex justify-between pb-3 items-center">
        <p className="font-semibold text-[24px]">About</p>
        <button className="cursor-pointer transistion-hover duration-300 hover:bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center">
              <div className='w-6'>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z" fill="#0F0F0F"/>
</svg>
              </div>
            </button>
      </div>
     <ReadMoreText text={text} maxlength={250}/>
    </div>


    <div className="bg-[#FFFFFF] border border-[silver] rounded-lg p-8">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold text-[18px]">Activity</p>
          <p className="text-[#0A66C2] font-semibold cursor-pointer hover:underline">30 followers</p>
        </div>
        <div className="flex gap-3 items-center">
          <div>
            <Button title="Create a post"/>
          </div>
          <button className="cursor-pointer transistion-hover duration-300 hover:bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center">
              <div className='w-6'>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z" fill="#0F0F0F"/>
</svg>
              </div>
            </button>
        </div>
      </div>



    </div>


    <div className="bg-[#FFFFFF] border border-[silver] rounded-lg p-8">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-[18px]">Experience</p>
        <div className="flex gap-3">
          <button className="cursor-pointer transistion-hover duration-300 hover:bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center">
              <div className='w-6'>
                <svg className="w-full h-full" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<title/>
<g id="Complete">
<g data-name="add" id="add-2">
<g>
<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="19" y2="5"/>
<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5" x2="19" y1="12" y2="12"/>
</g>
</g>
</g>
</svg>
              </div>
            </button>

          <button className="cursor-pointer transistion-hover duration-300 hover:bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center">
              <div className='w-6'>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z" fill="#0F0F0F"/>
</svg>
              </div>
            </button>
        </div>
      </div>
    </div>


    <div className="bg-[#FFFFFF] border border-[silver] rounded-lg p-8">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-[18px]">Education</p>
        <div className="flex gap-3">
          <button className="cursor-pointer transistion-hover duration-300 hover:bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center">
              <div className='w-6'>
                <svg className="w-full h-full" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<title/>
<g id="Complete">
<g data-name="add" id="add-2">
<g>
<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="19" y2="5"/>
<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5" x2="19" y1="12" y2="12"/>
</g>
</g>
</g>
</svg>
              </div>
            </button>

          <button className="cursor-pointer transistion-hover duration-300 hover:bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center">
              <div className='w-6'>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z" fill="#0F0F0F"/>
</svg>
              </div>
            </button>
        </div>
      </div>
    </div>


    <div className="bg-[#FFFFFF] border border-[silver] rounded-lg p-8">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-[18px]">Licenses & certifications</p>
        <div className="flex gap-3">
          <button className="cursor-pointer transistion-hover duration-300 hover:bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center">
              <div className='w-6'>
                <svg className="w-full h-full" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<title/>
<g id="Complete">
<g data-name="add" id="add-2">
<g>
<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="19" y2="5"/>
<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5" x2="19" y1="12" y2="12"/>
</g>
</g>
</g>
</svg>
              </div>
            </button>

          <button className="cursor-pointer transistion-hover duration-300 hover:bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center">
              <div className='w-6'>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z" fill="#0F0F0F"/>
</svg>
              </div>
            </button>
        </div>
      </div>
    </div>


    <div className="bg-[#FFFFFF] border border-[silver] rounded-lg p-8">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-[18px]">Skills</p>
        <div className="flex gap-3">
          <button className="cursor-pointer transistion-hover duration-300 hover:bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center">
              <div className='w-6'>
                <svg className="w-full h-full" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<title/>
<g id="Complete">
<g data-name="add" id="add-2">
<g>
<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="19" y2="5"/>
<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5" x2="19" y1="12" y2="12"/>
</g>
</g>
</g>
</svg>
              </div>
            </button>

          <button className="cursor-pointer transistion-hover duration-300 hover:bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center">
              <div className='w-6'>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z" fill="#0F0F0F"/>
</svg>
              </div>
            </button>
        </div>
      </div>
    </div>






     </div>

      

    </div>
  )
}

export default Profile