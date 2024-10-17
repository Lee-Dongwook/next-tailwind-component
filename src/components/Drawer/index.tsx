/**
 * Drawer 컴포넌트
 *
 * @component
 * @example
 *
 * const [isOpen, setIsOpen] = useState<boolean>(false);
 *
 * return (
 *  <>
 *      <button onClick={() => setIsOpen(true)}>Open Drawer</button>
 *        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
 *          <p>Content</p>
 *        </Drawer>
 *  </>
 * )
 */

import React from "react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed top-0 right-0 w-100 h-full bg-white shadow-lg z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-1/2"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="p-4">{children}</div>
      </div>
    </>
  );
};

export default Drawer;
