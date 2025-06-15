import Image from 'next/image'
import anxiety from '../image/anxienty.jpeg'
import counselling from '../image/counselling.jpeg'
import trauma from '../image/trauma.jpeg'


function Service () {
  

  return (
    <div>
<section className="bg-gray-100 py-4 lg:px-10 md:px-4 text-center">
        <h2 data-aos="fade-up" className="text-2xl sm:text-4xl font-bold mb-2">Services</h2>
        <div className='block flex justify-center items-center w-28 mx-auto mb-5 h-1 bg-black'></div>
        <div className="grid md:grid-cols-3 gap-6 items-center justify-items-center scale-0.5">
          <div data-aos="fade-right" className="p-3 text-white lg:w-96 md:w-60 w-72 dark:bg-gray-700 shadow rounded-lg">
            <Image src={anxiety} className='lg:w-96 md:w-60 w-72 mx-auto rounded-lg h-60' width={200} height={200} alt='pictures'  />
            <h3 className="font-semibold text-lg md:text-sm md:mt-1 lg:text-2xl mb-2">Anxiety & Stress Management</h3>
            <p className="text-sm">Build tools to manage worry, panic, and life stressors using proven therapeutic methods.</p>
          <button className="lg:w-64 w-64 md:w-56 rounded-lg p-2 border border-white my-5 transition duration-500 hover:bg-black
          hover:text-white font-bold hover:border-black">Learn More</button>
          </div>
          <div data-aos="fade-up" className="p-3 text-white lg:w-96 md:w-60 w-72 dark:bg-gray-700 shadow rounded-lg">
            <Image src={counselling} className='lg:w-96 md:w-60 w-72 mx-auto rounded-lg h-60' width={200} height={200} alt='pictures'  />
            <h3 className="font-semibold text-lg md:text-lg lg:text-2xl mb-2">Relationship Counseling</h3>
            <p className="text-sm"> Improve communication, rebuild trust, and navigate challenges in personal relationships.</p>
          <button className="lg:w-64 w-64 md:w-56 rounded-lg p-2 border border-white my-5 transition duration-500 hover:bg-black
          hover:text-white font-bold hover:border-black">Learn More</button>
          </div>
          <div data-aos="fade-left" className="p-3 text-white lg:w-96 md:w-60 w-72 dark:bg-gray-700 shadow rounded-lg">
            <Image src={trauma} className='lg:w-96 md:w-60 w-72 mx-auto rounded-lg h-60' width={200} height={200} alt='pictures'  />
            <h3 className="font-semibold text-lg md:text-lg lg:text-2xl mb-2">Trauma Recovery</h3>
            <p className="text-sm">Work through past experiences in a safe environment to move toward healing and growth.</p>
          <button className="lg:w-64 w-64 md:w-56 rounded-lg p-2 border border-white my-5 transition duration-500 hover:bg-black
          hover:text-white font-bold hover:border-black">Learn More</button>
          </div>
        </div>
        <p data-aos="fade-up" className="mt-6 text-black font-bold">Fees: $200 individual / $240 couples</p>
      </section>


    </div>
  )
} 

export default Service