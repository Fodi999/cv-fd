import React from "react";
import { createPortal } from "react-dom";
import { CopyPlus } from "lucide-react";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  if (typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-lg p-4 shadow-lg relative">
        <div className="relative">
          <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500 z-10">
            <CopyPlus size={24} />
          </button>
          <div className="bg-white dark:bg-gray-800 bg-opacity-80 backdrop-blur-md p-4 rounded-lg">
            {children}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;