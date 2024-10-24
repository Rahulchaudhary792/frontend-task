// src/components/Reports.js
import React from 'react';
import { saveAs } from 'file-saver';
import { jsPDF } from 'jspdf';
import './Reports.css';

const Reports = () => {
  const exportCSV = () => {
    const csvData = "Name,Email,Status\nKushal Bharadwaj,kushalestari@gmail.com,New\nAkshay,akshayakki2003@gmail.com,Contacted";
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, "report.csv");
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.text("EzyMetrics Report", 10, 10);
    
    doc.setFontSize(16);
    doc.text("Lead Data", 10, 30);
    
    // Adding a table-like structure
    const tableColumn = ["Name", "Email", "Status"];
    const tableRows = [
      ["Kushal Bharadwaj", "kushalestari@gmail.com", "New"],
      ["Akshay", "akshayakki2003@gmail.com", "Contacted"],
    ];

    let startY = 40; // Starting position for table

    // Draw header
    doc.setFontSize(12);
    tableColumn.forEach((col, index) => {
      doc.text(col, 10 + (index * 60), startY);
    });

    // Draw rows
    tableRows.forEach((row) => {
      startY += 10; // Move down for each row
      row.forEach((cell, index) => {
        doc.text(cell, 10 + (index * 60), startY);
      });
    });

    doc.save("report.pdf");
  };

  return (
    <div className="reports">
      <h2>Reports</h2>
      <button onClick={exportCSV}>Export CSV</button>
      <button onClick={exportPDF}>Export PDF</button>
    </div>
  );
};

export default Reports;
