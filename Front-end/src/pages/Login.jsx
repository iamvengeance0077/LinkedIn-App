import { useNavigate } from "react-router-dom"
import Textbox from "../components/Textbox";
import { useState } from "react";


const Login = () => {

    const [showEmail,setShowEmail]=useState(false)
    const[email,setEmail]=useState("")

    const [showPass,setShowPass]=useState(false)
    const[pass,setPass]=useState("")

    const [hidePass,setHidePass]=useState(false)



    const navigate=useNavigate();



  return (
    <div className="bg-[#FFFFFF] md:bg-[#F4F2EE] h-[100vh] overflow-hidden">
        {/* NOT COMPLETE */}
        <div className="pt-4 pl-3 md:">
            <p className="flex items-center grow-1 gap-0.5 text-[24px] md:text-[32px] text-[#0a66c2] font-bold">Linked<span className="w-6 md:w-8"><svg className="h-full w-full" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.375 0H2.625C1.92881 0 1.26113 0.276562 0.768845 0.768845C0.276562 1.26113 0 1.92881 0 2.625V32.375C0 33.0712 0.276562 33.7389 0.768845 34.2312C1.26113 34.7234 1.92881 35 2.625 35H32.375C33.0712 35 33.7389 34.7234 34.2312 34.2312C34.7234 33.7389 35 33.0712 35 32.375V2.625C35 1.92881 34.7234 1.26113 34.2312 0.768845C33.7389 0.276562 33.0712 0 32.375 0ZM10.5 29.75H5.25V14H10.5V29.75ZM7.875 10.9375C7.27332 10.9203 6.69005 10.7262 6.19806 10.3794C5.70608 10.0326 5.3272 9.5485 5.10877 8.98761C4.89033 8.42671 4.84203 7.81389 4.96989 7.2257C5.09776 6.63751 5.39612 6.10004 5.8277 5.68045C6.25928 5.26086 6.80493 4.97776 7.39649 4.86651C7.98804 4.75526 8.59927 4.8208 9.15379 5.05495C9.70831 5.28909 10.1815 5.68146 10.5143 6.18301C10.8471 6.68457 11.0248 7.27307 11.025 7.875C11.0112 8.69811 10.6721 9.48229 10.0818 10.0561C9.49159 10.63 8.69818 10.9469 7.875 10.9375ZM29.75 29.75H24.5V21.455C24.5 18.97 23.45 18.0775 22.085 18.0775C21.6848 18.1041 21.2938 18.2096 20.9345 18.3878C20.5751 18.566 20.2545 18.8134 19.9911 19.1159C19.7277 19.4183 19.5266 19.7699 19.3994 20.1503C19.2722 20.5306 19.2215 20.9324 19.25 21.3325C19.2413 21.4139 19.2413 21.4961 19.25 21.5775V29.75H14V14H19.075V16.275C19.5869 15.4963 20.2902 14.862 21.1176 14.433C21.9449 14.004 22.8686 13.7947 23.8 13.825C26.5125 13.825 29.68 15.33 29.68 20.23L29.75 29.75Z" fill="#0A66C2"/>
</svg></span></p>
        </div>
        <p className="text-center pt-15  md:pt-3 pb-6 text-[24px] md:text-[30px]">Make the most of your professional life</p>
<div  className="flex flex-col items-center h-full  gap-7">
    <div className="bg-[#FFFFFF] flex flex-col justify-center gap-5  h-[50%] px-6 rounded-lg w-90">
        
<div>
    <p>Email or phone number</p>
         <input type="text" className="border px-3 w-full rounded cursor-pointer hover:bg-[#F4F2EE] h-8 hover:outline-1" />
    </div>         
<div className="relative">
    <p>Password</p>
         <input value={pass} onChange={(e)=>{setPass(e.target.value)}}  type={hidePass ? "password" : "text"} className="border w-full pl-4 pr-12 rounded cursor-pointer hover:bg-[#F4F2EE] h-8 hover:outline-1" />
            <button onClick={()=>{setHidePass(!hidePass)}} className="absolute cursor-pointer top-7 right-2 text-[#0a66c2] font-semibold">{hidePass ? "Show" : "Hide"}</button>
    </div>         


        


        
        <button onClick={()=>navigate("/home")} className="text-white bg-[#0a66c2] py-3 rounded-full cursor-pointer w-full hover:bg-[#004182]">Join</button>
    <p className="text-center flex items-center justify-center">Already on LinkdIn? <span onClick={()=>{navigate("/")}} className="text-[#0a66c2] hover:underline cursor-pointer rounded-full w-19 h-8 flex items-center justify-center  hover:bg-[#D0E8FF]">Sign in</span></p>
    
    </div>
</div>
    </div>
  )
}

export default Login