function App() {
  return (
    <div>
      <h1 className="text-3xl text-center py-3 bg-gray-100">Contact Us</h1>

      <div className="mx-auto lg:w-1/2 px-3 mb-3">
        <Form />
      </div>
    </div>
  );
}

function Form() {
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
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Your message" className="w-full bg-gray-200 rounded-md p-2 focus:outline-none"></textarea>
      </div>

      <button className="px-3 py-2 rounded-md text-white font-semibold bg-ekc-b1 hover:bg-ekc-b2 duration-300">Submit</button>
    </form>
  );
}
export default App;
