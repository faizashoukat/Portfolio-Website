
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
const Contact = () => {

  return (
    <div id='contact' className="flex flex-col items-center justify-center min-h-screen lg:pb-100 bg-black">
         
      <h1 className=" text-white text-4xl font-bold mb-6 mt-10">Contact Me</h1>
      <form className="bg-black p-6 rounded shadow-md w-full max-w-md" data-aos="flip-up">
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Your Message"
             required
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Send
        </button>
      </form>
      
      <div className="mt-14 " data-aos="fade-right">
        <h2 className=" text-white text-4xl font-bold pb-10 text-center" >Get In Touch</h2>
        <p className='text-white text-xl text-center pt-0'>Do You have a new project for me?<br /> Or Just want to share a chat, feel free to contact </p>
        <div className="flex space-x-4 mt-6 mb-20 justify-center">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-blue-600 hover:text-blue-800" size={30} />
          </a>
          <a href="https://instagram.com/faizajamal31" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-400 hover:text-pink-600" size={30} />
          </a>
          <a href="https://linkedin.com/in/faiza-shoukat-58011a2b6" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-700 hover:text-blue-900" size={30} />
          </a>
          <a href="https://github.com/faizashoukat" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white hover:text-white-400" size={30} />
          </a>
          <a href="https://twitter.com/faizashoukat" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-blue-400 hover:text-blue-600" size={30} />
            </a>
            
        </div>
      </div>
     
    </div>
    
  );
};

export default Contact;