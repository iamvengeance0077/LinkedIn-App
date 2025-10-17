import DAtA from "../../public/DATA.json"

const Network = () => {
  return (
    <div className='flex flex-col lg:flex-row pt-16 lg:pt-20 gap-3 px-2 lg:justify-center overflow-hidden'>
      
      
           <div className='bg-white w-full lg:w-80  h-39 overflow-hidden sm:rounded-lg border border-[silver]'>
          <p className='p-4'>Manage my network</p>
          <hr className='border-[silver]'/>
          <div className='flex justify-between transition-hover duration-300 p-3 cursor-pointer hover:bg-[#F3F3F3]'>
            <div className="flex items-center gap-2">
              <div className="w-5">
                <svg className="h-full w-full" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 13.3V19H1.84073e-06V13.3C1.84073e-06 12.5441 0.298513 11.8192 0.829866 11.2847C1.36122 10.7503 2.08189 10.45 2.83333 10.45H5.66667C6.41811 10.45 7.13878 10.7503 7.67014 11.2847C8.20149 11.8192 8.5 12.5441 8.5 13.3ZM13.6944 10.45C14.3482 10.45 14.9873 10.255 15.5309 9.88964C16.0745 9.52429 16.4982 9.00499 16.7484 8.39743C16.9986 7.78986 17.064 7.12132 16.9365 6.47633C16.8089 5.83134 16.4941 5.23889 16.0318 4.77388C15.5695 4.30887 14.9805 3.99219 14.3393 3.8639C13.6981 3.7356 13.0335 3.80145 12.4295 4.05311C11.8255 4.30477 11.3092 4.73094 10.946 5.27774C10.5828 5.82453 10.3889 6.46738 10.3889 7.12501C10.3889 8.00685 10.7372 8.85258 11.3571 9.47614C11.977 10.0997 12.8178 10.45 13.6944 10.45ZM14.6389 12.35H12.75C12.1238 12.35 11.5232 12.6002 11.0804 13.0456C10.6376 13.491 10.3889 14.0951 10.3889 14.725V19H17V14.725C17 14.0951 16.7512 13.491 16.3084 13.0456C15.8657 12.6002 15.2651 12.35 14.6389 12.35ZM4.25 1.06036e-05C3.40943 1.06036e-05 2.58774 0.250735 1.88883 0.720478C1.18992 1.19022 0.645186 1.85788 0.323514 2.63904C0.00184144 3.42019 -0.0823227 4.27975 0.0816645 5.10902C0.245652 5.93829 0.650425 6.70002 1.2448 7.29789C1.83917 7.89576 2.59645 8.30291 3.42087 8.46786C4.24529 8.63282 5.09982 8.54816 5.87641 8.22459C6.65299 7.90103 7.31675 7.35309 7.78375 6.65007C8.25074 5.94705 8.5 5.12052 8.5 4.27501C8.50125 3.71326 8.39217 3.15679 8.17902 2.63756C7.96588 2.11832 7.65288 1.64656 7.25798 1.24934C6.86308 0.852116 6.39407 0.53727 5.87788 0.322874C5.36168 0.108479 4.80847 -0.00124191 4.25 1.06036e-05Z" fill="black" fill-opacity="0.6"/>
</svg>

              </div>
              <p className="pt-0.5">Connections</p>
            </div>
            <div>29</div>
          </div>
          <div className='p-3 cursor-pointer transition-hover duration-300 hover:bg-[#F3F3F3]'>
            <div className='flex gap-4 items-center'>
             <div className="w-[11px] ml-1">
               <svg className="w-full h-full" viewBox="0 0 9 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 13.3V19H1.83108e-06V13.3C1.83108e-06 12.5441 0.298513 11.8192 0.829866 11.2847C1.36122 10.7503 2.08189 10.45 2.83333 10.45H5.66667C6.41811 10.45 7.13878 10.7503 7.67014 11.2847C8.20149 11.8192 8.5 12.5441 8.5 13.3ZM4.25 1.06036e-05C3.40943 1.06036e-05 2.58774 0.250735 1.88883 0.720478C1.18992 1.19022 0.645186 1.85788 0.323514 2.63904C0.00184143 3.42019 -0.0823227 4.27975 0.0816645 5.10902C0.245652 5.93829 0.650425 6.70002 1.2448 7.29789C1.83917 7.89576 2.59645 8.30291 3.42087 8.46786C4.24529 8.63282 5.09982 8.54816 5.87641 8.22459C6.65299 7.90103 7.31675 7.35309 7.78375 6.65007C8.25074 5.94705 8.5 5.12052 8.5 4.27501C8.50125 3.71326 8.39217 3.15679 8.17902 2.63756C7.96588 2.11832 7.65288 1.64656 7.25798 1.24934C6.86308 0.852116 6.39407 0.53727 5.87788 0.322874C5.36168 0.108479 4.80847 -0.00124191 4.25 1.06036e-05Z" fill="black" fill-opacity="0.6"/>
</svg>

             </div>
              <p className="pt-0.5">Following & followers</p>
            </div>
          </div>
        </div>
        

        
        
            <div className='border bg-white border-[silver] sm:rounded-lg grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:mt-0 py-2 px-1 lg:px-3'>
            
              {DAtA.map((users)=>(
                <div className="border border-[silver] bg-white rounded-lg h-70 flex flex-col justify-between pt-5 pb-2">
                    <div className="flex flex-col items-center gap-3">
                      <img src={users.image} className="rounded-full w-25 h-25"/>
                      <div className="leading-5 w-50 px-4">
                        <p className="text-center font-semibold">{users.name}</p>
                      <p className="text-center text-[13px] line-clamp-2 px-2">{users.des}</p>
                      </div>
                    </div>
                    <div className="w-full flex justify-center">
                      <button className=" border-2 border-[#378FE9] font-bold text-[#378FE9] w-40  py-1 rounded-full transition-hover duration-300  cursor-pointer hover:border-[#004182] hover:text-[#004182] hover:[box-shadow:inset_0_0_0_1px] hover:bg-[#EBF4FD]">
                    <div className="flex items-center justify-center gap-1">
                        <div className="w-5">
                          <svg className="h-full w-full" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 13.3V19H1.83108e-06V13.3C1.83108e-06 12.5441 0.298513 11.8192 0.829866 11.2847C1.36122 10.7503 2.08189 10.45 2.83333 10.45H5.66667C6.41811 10.45 7.13878 10.7503 7.67014 11.2847C8.20149 11.8192 8.5 12.5441 8.5 13.3ZM4.25 1.06036e-05C3.40943 1.06036e-05 2.58774 0.250735 1.88883 0.720478C1.18992 1.19022 0.645186 1.85788 0.323514 2.63904C0.00184143 3.42019 -0.0823227 4.27975 0.0816645 5.10902C0.245652 5.93829 0.650425 6.70002 1.2448 7.29789C1.83917 7.89576 2.59645 8.30291 3.42087 8.46786C4.24529 8.63282 5.09982 8.54816 5.87641 8.22459C6.65299 7.90103 7.31675 7.35309 7.78375 6.65007C8.25074 5.94705 8.5 5.12052 8.5 4.27501C8.50125 3.71326 8.39217 3.15679 8.17902 2.63756C7.96588 2.11832 7.65288 1.64656 7.25798 1.24934C6.86308 0.852116 6.39407 0.53727 5.87788 0.322874C5.36168 0.108479 4.80847 -0.00124191 4.25 1.06036e-05Z" fill="currentcolor"/>
<path d="M12.3153 13.527V7.4929H13.8409V13.527H12.3153ZM10.0611 11.2727V9.74716H16.0952V11.2727H10.0611Z" fill="currentcolor"/>
</svg>
                        </div>  
                      <p>Connect</p>
                    </div>
                    </button>
                    </div>
                </div>
              ))}
            
          </div>
          
       
        
      
    </div>
  )
}

export default Network