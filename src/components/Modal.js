// src/components/Modal.js
import React from 'react';
import './Modal.css';
const Modal = ({ lead }) => {
  return (
    <div className="modal">
      <h3>{lead.name}</h3>
      <p>Email: {lead.email}</p>
      <p>Status: {lead.status}</p>
    </div>
  );
};

export default Modal;
