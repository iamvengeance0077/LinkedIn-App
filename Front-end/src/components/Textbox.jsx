import { useState } from "react"


const Textbox = () => {
    
    

  return (
    <>
    <label htmlFor="autofocus">
        <div onClick={()=>setShow(true)} className="border h-13 flex flex-col justify-center p-3 rounded-md w-full">
            <p className={`transition-all duration-200 ${show ? "text-[14px]" : "text-[18px]"}`}>Email</p>
            <input  id="autofocus" type="text" className={`outline-none transition-all duration-300 text-[20px] ${!show ? "h-0" : "h-8" } `}/>
            
        </div>
        </label>
    </>
  )
}

export default Textbox