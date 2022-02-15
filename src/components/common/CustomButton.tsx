import React, { useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

if (typeof window !== "undefined") {
  injectStyle();
}

const CustomButton: React.FC<{
  message: string;
  buttonName: string;
  className?: string;
  status?: boolean;
}> = ({ message, buttonName, className }) => {
  const notify = useCallback(
    () =>
      toast.dark(message, {
        position: "top-right",
        type: "info",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    [message]
  );
  return (
    <div className={className}>
      <button
        className="contact-button border border-[#03c5a9] px-6 py-2 text-[#03c5a9] text-base font-normal"
        onClick={notify}
        id="animate.css"
      >
        {buttonName}
      </button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default CustomButton;
