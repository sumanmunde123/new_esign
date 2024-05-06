import React, { createContext, useContext, useState } from 'react';

const PdfDataContext = createContext();

export const usePdfData = () => {
  return useContext(PdfDataContext);
};

export const PdfDataProvider = ({ children }) => {
  const [pdfData, setPdfData] = useState('');

  return (
    <PdfDataContext.Provider value={{ pdfData, setPdfData }}>
      {children}
    </PdfDataContext.Provider>
  );
};
