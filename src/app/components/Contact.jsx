import { useState, useEffect } from 'react';
import axios from 'axios'

const category = [{title:"Select preferred method"}, {title:"Phone Call"}, 
  {title:"WhatsApp Call"}, {title:"Email"}]

export default function Contact() {
  const [showMessage, setShowMessage] = useState(false);
  const [progress, setProgress] = useState(100);
  const [formData, setFormData] = useState({
        name:"",
        message:"",
        time:"",
        email: '',
        phone:"",
        type:"",
    })
 
     const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    

  useEffect(() => {
    if (showMessage || error) {
      let countdown = 100;
      const interval = setInterval(() => {
        countdown -= 2;
        setProgress(countdown);
        if (countdown <= 0) {
          clearInterval(interval);
          setShowMessage(false);
          setError(false);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [showMessage, error]);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

 
   const handleSub = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await axios.post(
      "https://backend-contact-ku2s.onrender.com/api/product",
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        time: formData.time,
        type: formData.type
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    );

    if (response.data?.message) {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 4000);
    }

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      time: "",
      type: "",
    });

  } catch (err) {
    console.error("Error Response:", err.response);
    if (!err?.response) {
      setError("No server Response");
    } else if (err.response?.status === 409) {
      setError("Information already exists.");
    } else if (err.response?.status === 400) {
      setError("Information is invalid");
    } else if (err.response?.status === 401) {
      setError("Unauthorized");
    } else {
      setError("Failed to add Information");
    }
    setTimeout(() => setError(false), 4000);
  } finally {
    setLoading(false);
  }
};

  return (
    <main data-aos="fade-up" className={`bg-white text-black font-sans min-h-screen transition-colors duration-300`}>
      

     
            {/* Contact Section */}
      <section className="bg-gray-100 py-16 px-6 flex flex-row m-auto flex-wrap justify-evenly items-center">
        <div>
        <h2 className="text-4xl text-green-900 font-bold mb-2">Our Office</h2>
        <div className="max-w-xl mx-auto">
          <p className="mx-auto mb-4 text-green-900 font-semibold">1287 Maplewood <br/>Drive, <br/>Los Angeles,<br/> CA 90026</p>
          <button className='bg-green-900 rounded p-2 -mt-6 text-white text-sm'>Google Maps</button> 
          <p className="text-center mb-6"> , </p>
        </div>
         <h2 className="text-4xl text-green-900 font-bold mb-2">Hours</h2>
          <p className="mx-auto mb-4 text-green-900 font-semibold">In-person (Tue & Thu: 10AM–6PM)<br/>Zoom (Mon, Wed & Fri: 1PM–5PM)</p>
        <h2 className="text-4xl text-green-900 font-bold mb-2">Contact</h2>
          <p className="mx-auto mb-4 text-green-900 font-semibold">
            (323) 555-0192 <br/> <a className="text-blue-800" href="mailto:serena@blakepsychology.com">serena@blakepsychology.com</a>
          </p>
        </div>
        <div>
          {showMessage && (
            <div className="bg-green-600 text-white rounded-lg font-semibold text-xs p-2 fixed top-2 mx-auto
                 w-64  mt-0  text-center">
              Message sent successfully!
            </div>
          )}
        </div>
{/* Loading reCAPTCHA... */}
    <div>
          <form onSubmit={handleSub} className="bg-white border-2 border border-gray-700 flex-col flex shadow rounded-md px-6 py-3 space-y-4">
            <h1 className='text-center font-bold text-2xl -mb-3'>Get In Touch</h1>
            <p className='text-xs text-black text-center -my-4 mx-auto w-64 sm:w-80 font-semibold'>simply fill out the brief field below and Dr Serena Blake will be in touch with you soon, usually 
              within one business day. This form is safe, private and completely free </p>
            <div className='flex flex-col'>
              <label className='mb-1 -mt-3 text-sm'>Name</label>
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="sm:w-96 w-72 text-black border-gray-600 border-2 border p-2 rounded-lg text-sm  text-black dark:bg-gray-100" required />
            </div>
            <div className='flex flex-col'>
              <label className='mb-1 -mt-2 text-sm'>Email</label>
            <input name="email" value={formData.email} onChange={handleChange} placeholder="you@gmail.com" className="sm:w-96 w-72 text-black border-gray-600 border-2 border p-2 rounded-lg text-sm  text-black dark:bg-gray-100" required />
            </div>
            <div className='flex flex-col'>
              <label className='mb-1 -mt-2 text-sm'>Phone</label>
            <input name="phone" value={formData.phone} onChange={handleChange} placeholder="(555) 234-5678" className="sm:w-96 w-72 text-black border-gray-600 border-2 border p-2 rounded-lg text-sm  text-black dark:bg-gray-100" required />
            </div>
             <div className='flex flex-col'>
              <label className='mb-1 -mt-2 text-sm'>Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="How can I help you ?" className="sm:w-96 w-72 text-black border-gray-600 h-14 border-2 border p-2 rounded-lg text-sm  text-black dark:bg-gray-100" required />
            </div>
            <div className='flex flex-col'>
              <label className='mb-1 -mt-2 text-sm'>Preferred Contact Time</label>
            <input name="time" value={formData.time} onChange={handleChange} placeholder="e.g Mornings, Afternoons, Evenings, Weekends" className="sm:w-96 w-72 border-gray-600 border-2 border p-2 rounded-lg text-sm  text-black dark:bg-gray-100" required />
            <p className='text-xs font-semibold'>Let us know when you&apos;re typically available for a call or consultation</p>
            </div>
            <div className='flex flex-col'>
              <label className='mb-1 -mt-2 text-sm'>Preferred Contact Time</label>
            <select name="type" value={formData.type} onChange={handleChange} className="sm:w-96 w-72 border-gray-600 border-2 border p-2 rounded-lg text-sm  
            text-black  dark:bg-gray-100" required >
            
                    {
                      category.map(cate =>(
                        <option key={cate.id}>
                          {cate.title}
                       </option>
                      ))
                    }
            </select>
            </div>
            <label className="flex items-center space-x-2">
              <input type="checkbox" name="robot" onChange={handleChange} className="h-4 w-4" />
              <span>I&apos;m not a robot</span>
            </label>
            <button type="submit" className="bg-green-900  text-white px-4 py-2 rounded-md"
            disabled={!formData.name || !formData.phone || !formData.type 
            || !formData.message || !formData.time || !formData.email}>
                {loading ? <p className="loading"></p> : "Sumbit"}
              </button>
          <p className='text-xs text-black w-72 sm:w-96 font-semibold'>By clicking submit you consent 
            to receive texts and emails from Dr. Maria T. Norman
          </p>
          <div className={` flex justify-center hidden items-center ${showMessage ? 'block' : 'hidden'}`}>
                <p className="bg-green-600 text-white rounded-lg font-semibold text-xs p-2 fixed top-2 mx-auto
                 w-64  mt-0  text-center ">{showMessage}</p>
            </div>
          <div className={` flex justify-center items-center fixed top-2 ${error ? 'block' : 'hidden'}`}>
                <p className="bg-red-600 text-white rounded-lg flex justify-center items-center font-semibold text-xs p-2 fixed top-2 mx-auto
                 w-64  mt-0  text-center ">{error}</p>
            </div>
          </form>
    </div>
      </section>
    </main>
  );
}
