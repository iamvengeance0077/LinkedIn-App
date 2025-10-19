

const Button = ({title,onClick,px=22}) => {
  return (
    <>
         <button
                className={`border-2 rounded-full px-${px} text-[#378FE9] transition-hover duration-300  cursor-pointer hover:border-[#004182] hover:[box-shadow:inset_0_0_0_1px] hover:bg-[#EBF4FD]`}
                onClick={onClick}
              >
                {title}
              </button>
    </>
  )
}

export default Button