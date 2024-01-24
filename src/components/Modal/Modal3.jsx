import React from "react";
import "./Modal.css";
import { motion } from "framer-motion";

import { FaAngleRight } from "react-icons/fa6";

const dropIn = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.25,
    },
  },
  exit: {
    x: "100vw",
    opacity: 0,
  },
};

const Modal3 = ({ children, isOpen, onClose }) => {
  return (
    isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="modal-bg"
        onClick={onClose}
      >
        <motion.div
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="modal-container"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content modal3">
            {children}
            <button type="button" onClick={onClose}>
              Close <FaAngleRight />
            </button>
          </div>
        </motion.div>
      </motion.div>
    )
  );
};

export default Modal3;
