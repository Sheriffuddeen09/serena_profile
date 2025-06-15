import { useState } from "react"

const faq = [{
  title:"",
  body:""
}]
function Faq () {
  
const [accordion, setAccordion] = useState(null)

const handleChange = (id) =>{
  setAccordion(id ? null : id)
}
  return (
    <div>

      {/* FAQ Section */}
      <section className="py-6 px-6 mx-auto">
        <h2 className="sm:text-4xl my-3 text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4 mt-2 mb-10">
          <div className="px-4  border-r-0 border-l-0 border">
            <div onClick={handleChange} className="cursor-pointer font-semibold px-4 pt-4 text-2xl font-bold flex flex-row justify-between items-center">
            <h4 className="">Do you accept insurance?</h4>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
            </div>
            <p className={`p-4 text-xl ${accordion ? "height" : "none"}`}>No, but a <span className='font-bold'>superbill</span> is provided for <span className='font-bold'>
              self-submission</span>.</p>
          </div>

          {/* section two */}

          <div className="px-4  border-r-0 border-l-0 border-t-0 -mt-5 border">
            <div onClick={() => handleChange(1)} className="cursor-pointer font-semibold px-4 pt-4 text-2xl font-bold flex flex-row justify-between items-center">
            <h4 className="">Are online sessions available?</h4>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
            </div>
            <p className={`p-4 text-xl ${accordion === 1 ? "height" : "none"}`}>Yes—all virtual <span className='font-bold'>sessions</span> are <span className='font-bold'>
              conducted</span> via Zoom.</p>
          </div>

           {/* section three */}

          <div className="px-4  border-r-0 border-l-0 border-t-0 -mt-5 border">
            <div onClick={handleChange} className="cursor-pointer font-semibold px-4 pt-4 text-2xl font-bold flex flex-row justify-between items-center">
            <h4 className="">What is your cancellation policy?</h4>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
            </div>
            <p className={`p-4 text-xl ${accordion ? "height" : "none"}`}>24-hour notice is required for <span className='font-bold'>cancellations</span>.</p>
          </div>
        </div>
      </section>


    </div>
  )
} 

export default Faq