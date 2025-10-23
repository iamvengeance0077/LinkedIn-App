

const Button = ({title,onClick,px=22,py=0}) => {
  return (
    <>
         <button
                className={`border-2 rounded-full  text-[#378FE9] transition-hover duration-300  cursor-pointer hover:border-[#004182] hover:[box-shadow:inset_0_0_0_1px] hover:bg-[#EBF4FD]`}
                onClick={onClick}
                style={{ paddingLeft: `${px}px`, paddingRight: `${px}px`,paddingBottom:`${py}px`,paddingTop:`${py}px` }}
              >
                {title}
              </button>
    </>
  )
}

export default Button