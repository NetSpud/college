"use client";
import { useState } from "react";
function App() {
  return (
    <div>
      <h1 className="text-4xl text-bold bg-ekc-b4 text-white font-bold text-center p-3 uppercase">Contact</h1>
      <div className="text-center text-xl mb-12">
        <p>Have a question?</p>
        <p>or need to get in touch?</p>
        <p>Send us a message!</p>
        <p>We will get back to you as soon as possible!</p>
      </div>
      <div className="mx-auto lg:w-1/2 px-3 mb-3">
        <Form />
      </div>
    </div>
  );
}

function Spinner() {
  return (
    <svg className="animate-spin h-8 w-8 block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );
}

function Form() {
  const [loading, setLoading] = useState(false);

  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name" className="w-full bg-gray-200 rounded-md p-2 focus:outline-none" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your email" className="w-full bg-gray-200 rounded-md p-2 focus:outline-none" />
      </div>
      <div>
        <label htmlFor="studentID">Student ID</label>
        <input type="text" id="studentID" name="student_ID" placeholder="Your student ID" className="w-full bg-gray-200 rounded-md p-2 focus:outline-none" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" rows={6} name="message" placeholder="Your message" className="w-full bg-gray-200 rounded-md p-2 focus:outline-none"></textarea>
      </div>
      <button type="button" onClick={() => setLoading(!loading)} className="px-3 py-2 rounded-md text-white flex gap-3 items-center font-semibold bg-ekc-b1 hover:bg-ekc-b2 duration-300">
        {loading && <Spinner />}
        <span className="inline-block">Send</span>
      </button>
    </form>
  );
}
export default App;
