import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function Contact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleContact(e) {
    const { value, name } = e.target;
    setContact((prev) => {
      return { ...prev, [name]: value };
    });
  }

  async function submitContact(e) {
    e.preventDefault();
    const res = await axios.post("http://localhost:8000/contact", contact);
    if (res.data) {
      toast.success("Our team you contact us soon");
      setContact({ name: "", email: "", phone: "", message: "" });
    }
  }

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-8 md:my-16">
        <div className="w-full md:w-1/2 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224356.85922847473!2d77.23700828459395!3d28.522404038147872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1718112091297!5m2!1sen!2sin"
            className="w-full h-full border-[2px] font-bold"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-full md:w-1/2 p-6">
          <h1 className="text-2xl md:text-4xl text-center font-semibold underline mb-6 ">
            Contact Us
          </h1>
          <form onSubmit={submitContact}>
            <div className="mb-3">
              <label>Name</label> <br />
              <input
                onChange={handleContact}
                value={contact.name}
                className="mt-2 p-2 w-full outline-none rounded-lg dark:text-black border-[2px] border-gray-200"
                type="text"
                name="name"
                placeholder="Enter your name.."
                required
              />
            </div>
            <div className="mb-3">
              <label>Email</label> <br />
              <input
                onChange={handleContact}
                value={contact.email}
                className="mt-2 p-2 w-full outline-none rounded-lg dark:text-black border-[2px] border-gray-200"
                type="email"
                name="email"
                placeholder="Enter your Email.."
                required
              />
            </div>
            <div className="mb-3">
              <label>Phone</label> <br />
              <input
                onChange={handleContact}
                value={contact.phone}
                className="mt-2 p-2 w-full outline-none rounded-lg dark:text-black border-[2px] border-gray-200"
                type="text"
                name="phone"
                placeholder="Enter your phone.."
                required
              />
            </div>
            <div className="mb-3">
              <label>Message</label>
              <br />
              <textarea
                onChange={handleContact}
                value={contact.message}
                name="message"
                className="mt-2 p-2 w-full outline-none rounded-lg dark:text-black border-[2px] border-gray-200"
                rows={5}
                placeholder="Your Message.."
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button className="py-2 w-full md:w-1/2 bg-pink-500 text-white rounded-xl hover:bg-pink-700 duration-300">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
