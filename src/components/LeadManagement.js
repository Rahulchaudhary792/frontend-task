import React from 'react';
import './LeadManagement.css';

const dummyLeads = [
  { name: "Kushal Bharadwaj", email: "kushalestari@gmail.com", status: "New" },
  { name: "Akshay", email: "akshayakki2003@gmail.com", status: "In Progress" },
  { name: "Gokul Kashyap", email: "gokulkashyap@gmail.com", status: "Closed" }
];

const LeadManagement = () => {
  return (
    <div className="lead-container">
      <table className="lead-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {dummyLeads.map((lead, index) => (
            <tr key={index}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadManagement;
