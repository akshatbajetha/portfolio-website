import React from "react";

function Modal({ message, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background bg-opacity-50">
      <div className="bg-white-background dark:bg-background rounded-lg p-6 max-w-sm w-full text-center">
        <p className="text-lg font-medium text-black dark:text-white">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
