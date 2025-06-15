
import Image from 'next/image'
import serena from '../image/serene.webp'
function About (){

    return(
        <div>
        <section className="py-10 px-6 mx-auto bg-blue-100 text-gray-800">
        <div data-aos="fade-up" className="flex flex-col md:flex-row flex-wrap justify-center gap-6 items-center ">
          <div className='rounded-xl p-2 relative border-none bg-blue-50'>
          <Image src={serena} width={300} height={300} alt="Dr. Blake" 
          className="rounded-xl h-96 sm:w-80 w-72 border-none bg-blue-50" />
          <div className='absolute bg-trans p-2 text-black rounded-bl-lg rounded-br-lg rounded-tr-lg bottom-2 '>
            <p className='text-xs font-semibold'>Dr Serena Blake</p>
            <p className='font-semibold text-xs'>PsyD</p>
            <div className="font-semibold inline-flex gap-1 items-center text-xs mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3 text-yellow-500">
            <path stroke-linecap="round" stroke-linejoin="round" 
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            Top Rated
            <span className='text-sw-1 h-1 bg-white rounded-full'></span>
            <p className='text-xs underline'>8+ Years Experience </p>
        </div>
          </div>
          </div>
          <div className='sm:w-5/12 w-72'>
          <p className='text-sm bg-yellow-100 px-2 rounded py-1 '>About Serena Blake, PsyD - Experienced cognitive-behavioral therapy and mindfulness</p>
            <h2 className="text-3xl sm:text-5xl font-bold mb-2 my-4">Hi I&apos;m Dr <br/> Serena Blake</h2>
            <p className="text-sm sm:text-2xl mb-2 mt-10">Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with <span className='font-bold'>eight years of experience</span> and over 500 client sessions. </p>
            <p className='text-sm sm:text-2xl mb-2 mt-6'>She blends evidence-based approaches—like <span className='font-bold'>cognitive-behavioral therapy and mindfulness 
              </span> with compassionate, personalized care. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, 
              <span className='font-bold'>Dr. Blake</span> is committed to creating a safe, supportive space for you to thrive.</p>
         

          </div>
        </div>
      </section>
        </div>
    )
}

export default About