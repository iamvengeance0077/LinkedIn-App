import { useState } from "react"


const ReadMoreText = ({text,maxlength}) => {
    const [expanded,setExpanded]=useState(false);

    const displayText = expanded ? text : text.slice(0,maxlength)

  return (
    <div className="flex flex-col">
    <p>
        {displayText}
        {!expanded && text.length ? '...' : ''}
    </p>

    
    {text.length > maxlength && (
        <button onClick={()=>setExpanded(true)} className="text-gray-500 self-end cursor-pointer hover:text-blue-500 text-[14px]">
            {expanded ? "" : "...see more"}
        </button>
    )}
    </div>
  )
}

export default ReadMoreText