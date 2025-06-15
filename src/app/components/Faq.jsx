import { useState } from "react"


function Faq ({fa}) {
  
const [accordion, setAccordion] = useState(false)

const handleChange = () =>{
  setAccordion(!accordion)
}
  return (
    <div>

      {/* FAQ Section */}
      
          <div className="sm:px-4  border-r-0 border-l-0 border border-black">
            <div onClick={ handleChange}  className="cursor-pointer font-semibold px-4 pt-4 text-2xl font-bold flex flex-row justify-between items-center">
            <h4 className="p-2 mb-3 -mt-2">{fa.title}</h4>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`size-6 sm:translate-y-0 -translate-y-2 ${accordion ? "rotate-180" : "rotate-360"}`}>
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
            </div>
            <p className={` p-4 -mt-6 mb-2 text-xl ${accordion ? "block" : "hidden"}`}>{fa.body}</p>
          </div>
        </div>
  )
} 

export default Faq