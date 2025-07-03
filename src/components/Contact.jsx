import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="text-4xl text-center text-white">
        Contact
        <div className="h-1 w-full bg-gradient-to-r from-white to-yellow-400 mx-auto mt-10" />
      </h2>
      <div className="flex py-12">
        <div className=" w-full rounded-lg grid grid-cols-1 md:grid-cols-2 shadow-lg p-8">
          {/* Left side - Contact Info */}
          <div className="mb-8 md:mb-0">
            <div className="mb-4">
              <h3 className="font-semibold text-xl">Phone</h3>
              <p className="text-gray-700">6392885049</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl">Email</h3>
              <p className="text-gray-700">sonamkumari63928@gmail.com</p>
            </div>
          </div>

          {/* Right side - Form */}
          <form className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-4">
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">First Name *</label>
              <input
                type="text"
                className="border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Last Name *</label>
              <input
                type="text"
                className="border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div className="flex flex-col col-span-1 md:col-span-1">
              <label className="mb-1 text-sm font-medium">Email *</label>
              <input
                type="email"
                className="border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div className="flex flex-col col-span-1 md:col-span-1">
              <label className="mb-1 text-sm font-medium">Subject</label>
              <input
                type="text"
                className="border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="flex flex-col col-span-1 md:col-span-2">
              <label className="mb-1 text-sm font-medium">Message</label>
              <textarea
                rows="4"
                className="border border-gray-300 rounded px-3 py-2 resize-none"
              ></textarea>
            </div>
            <div className="col-span-1 md:col-span-2">
              <button
                type="submit"
                className="bg-amber-500 text-black font-bold py-2 px-4 rounded-full w-full hover:bg-amber-600 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
