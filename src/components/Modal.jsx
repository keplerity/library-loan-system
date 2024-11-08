import React from "react";
import { X } from "react-feather";

function Modal({ Onopen, Onclose, children }) {
  return (
    <div
      onClick={Onclose}
      className={`
    fixed inset-0 flex justify-center items-center transition-colors
        ${Onopen ? "visible bg-black/20" : "invisible"}
    `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          bg-white rounded-xl shadow p-6 transition-all
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
      >
        <button
          onClick={Onclose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
        >
          <X />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
