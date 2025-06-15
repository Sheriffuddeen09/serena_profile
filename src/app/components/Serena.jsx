import { useState, useEffect } from 'react';
import Service from '../components/Service'
import About from '../components/About'
import MapFaq from '../components/MapFaq'
import Contact from '../components/Contact'
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const handleVisibility = () => setShowPopup(true);
    window.addEventListener('load', handleVisibility);
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') setShowPopup(true);
    });
    return () => {
      window.removeEventListener('load', handleVisibility);
    };
  }, []);

  useEffect(() =>{
    AOS.init({duration: 2000})
}, [])

  useEffect(() => {
    if (showPopup) {
      let countdown = 100;
      const interval = setInterval(() => {
        countdown -= 2;
        setProgress(countdown);
        if (countdown <= 0) {
          clearInterval(interval);
          setShowPopup(false);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [showPopup]);



  return (
    <main className={`bg-white text-black font-sans min-h-screen transition-colors duration-300`}>
      

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white text-black rounded-lg p-6 max-w-md text-center shadow-lg relative">
            <div className="absolute top-0 left-0 h-1 bg-blue-500 transition-all duration-100" style={{ width: `${progress}%` }}></div>
            <h3 className="text-xl font-semibold mb-2">Welcome to Dr. Blake's site!</h3>
            <p className="mb-4">Feel free to explore and learn more about our services.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section data-aos="zoom-out" className="bg-black bg-back text-white flex flex-col text-center lg:pb-20 md:pb-3 px-4">
            <p className='text-sm my-4'>Maplewood Drive office or connect virtually via Zoom</p>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Welcome to Dr. Serena Blake's, Licensed Clinical PsyD !</h3>
        <h1 className="text-2xl md:text-3xl font-bold mb-4"> (Clinical Psychologist)</h1>
        <p className="font-semibold max-w-xl mt-1 mx-auto">Helping you overcome anxiety, strengthen relationships, and heal from trauma with compassionate care.</p>
        <div className="font-semibold inline-flex gap-1 my-4 items-center text-sm mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3 text-yellow-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            Top Rated
            <span className='w-1 h-1 bg-white rounded-full'></span>
            <p className='text-xs underline'>8+ Years Experience </p>
            <span className='w-1 h-1 bg-white rounded-full'></span>
            <p className='text-xs underline'>500+ sessions</p>
        </div>
        <button className='bg-gradient-to-br from-[#f1eefc] via-[#e9f1ff] to-[#f7e4ff] text-blue-600 
        font-semibold p-2 rounded-lg w-60 mx-auto text-center mt-1 text-lg inline-flex items-center justify-center gap-2'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
        </svg>
        Start Diagonis Today</button>
      </section>

      {/* About Section */}

      <About />

      {/* Services Section */}

      <Service />

      {/* Faq */}
      <MapFaq />


            {/* Contact Section */}
     <Contact />
    </main>
  );
}
