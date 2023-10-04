import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [pname, setPname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_rk0egut";
    const templateId = "template_jqoencp";
    const userId = "yr6L2LTUA9vbCnCK0";

    const templateParams = {
      to_name: pname,
      from_email: email,
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log("Email is successfully sent", response);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });

    setPname("");
    setEmail("");
    setMessage("");
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center p-4"
    >
      <div className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8 flex flex-col justify-center w-full h-full items-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-gray-300">
            CONTACT
          </p>
          <p className="text-gray-300 text-[16px] font-[500] py-4">
            Fill the details to contact
          </p>
        </div>
        <input
          className="bg-white p-2 rounded-[5px] pl-4 text-black text-[16px] font-[500]"
          type="text"
          placeholder="Enter Your Name"
          value={pname}
          name="name"
          onChange={(e) => setPname(e.target.value)}
        />
        <input
          className="my-4 p-2 bg-white rounded-[5px] pl-4 text-black text-[16px] font-[500]"
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
        <textarea
          className="bg-white p-2 rounded-[5px] pl-4 text-black text-[16px] font-[500]"
          name="message"
          rows="10"
          value={message}
          placeholder="Enter the message"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          className="text-white border-2 rounded-[10px] font-[700] text-[18px] hover:bg-red-300 hover:text-black hover:border-red-300 px-4 py-3 my-8 mx-auto flex items-center"
          onClick={handleSubmit}
        >
          Let's Collaborate
        </button>
      </div>
      <div className="text-white flex flex-col items-center font-[500]">
        You can use it as a referral in case you use it give credits
        <div>© All Rights Reserved - Sachin Chavan</div>
      </div>
    </div>
  );
};

export default Contact;
