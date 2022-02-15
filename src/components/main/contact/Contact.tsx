import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import CustomButton from "../../common/CustomButton";

const SERVICE_ID = "service_sslzwco";
const TEMPLATE_ID = "template_i5kecna";
const USER_ID = "user_TcFFfrRDCEvqrrUP9e4n2";

type NotifyType = {
  isShow: boolean;
  message: string;
};

const initialState: NotifyType = {
  isShow: false,
  message: "Thanks for your contacting me",
};

const Contact: React.FC<{ title: string }> = ({ title = "Contact me" }) => {
  const form =
    useRef<HTMLFormElement>() as React.MutableRefObject<HTMLFormElement>;
  const [notify, setNotify] = useState<NotifyType>(initialState);

  const sendMail = (event: any) => {
    event.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then((result) => {
        if (result.status === 200) {
          setNotify((prevState) => ({
            ...prevState,
            isShow: true,
            message: "Thanks for your contacting me",
          }));
        }
      })
      .catch((error) => {
        setNotify((prevState) => ({
          ...prevState,
          isShow: true,
          message: "Sent message failed",
        }));
      });
  };

  return (
    <div className="main contact text-white flex flex-row space-x-4 lg:flex-col h-full">
      <div className="left-section w-1/2 mt-14 ml-14 lg:w-full lg:ml-0">
        <div className="main-title">
          {title.split("").map((char, ind) => (
            <span
              key={ind}
              className="text-6xl md:text-2xl lg:text-4xl font-extrabold"
            >
              {char}
            </span>
          ))}
        </div>
        <p className="text-xl sm:text-base leading-8 mt-8 break-all">
          I’m interested in freelance opportunities – especially ambitious or
          large projects. <br />
          However, if you have other request or question, don’t hesitate to use
          the form.
        </p>
        <div className="contact-form mt-28">
          <form ref={form} onSubmit={sendMail} autoComplete="off">
            <div className="flex flex-row lg:flex-col">
              <input
                className="border-none outline-none rounded w-1/2 mx-1 mb-4 lg:w-full py-3 px-3 text-white bg-[#2B2B2B]"
                id="name"
                name="name"
                type="text"
                placeholder="Name"
              />
              <input
                className="border-none outline-none rounded w-1/2 mx-1 mb-4 lg:w-full py-3 px-3 text-white bg-[#2B2B2B]"
                id="email"
                type="text"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <input
                className="border-none outline-none rounded w-full py-3 px-3 text-white bg-[#2B2B2B]"
                id="subject"
                type="text"
                name="subject"
                placeholder="Subject"
              />
            </div>
            <div className="mt-4 mb-4">
              <textarea
                className="border-none h-48 outline-none rounded w-full text-white bg-[#2B2B2B]"
                id="subject"
                name="message"
                placeholder="Message"
              />
            </div>
            {/* <div className="float-right">
              <button className="contact-button border border-[#03c5a9] px-6 py-2 text-[#03c5a9] text-base font-normal">
                Send message
              </button>
            </div> */}
            <CustomButton
              className="float-right"
              message={notify.message}
              buttonName="Send message"
              status={notify.isShow}
            />
          </form>
        </div>
      </div>
      <div className="right-section w-1/2 lg:w-full h-screen lg:mt-14">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25929.832177714216!2d139.75837717683083!3d35.671362396150485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889608cc89ac9%3A0xa8d1dde2f4ba71a2!2sChuo%20City%2C%20Tokyo!5e0!3m2!1sen!2sjp!4v1644239584995!5m2!1sen!2sjp"
          className="w-full h-full border-none"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
