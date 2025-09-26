"use client";

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Modal from 'react-modal';

const CompanyDocuments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<{ id: number; title: string; file: string } | null>(null);
  const [mathQuiz, setMathQuiz] = useState({ question: '', answer: 0 });
  const [userAnswer, setUserAnswer] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const documents = [
    { id: 1, title: "Certificate of Incorporation", file: "/NgaatecPvtLtdCertificateofIncorporation.pdf" },
    { id: 2, title: "Tax Clearance Certificate", file: "/ITF263_ngaatec.pdf" },
    { id: 3, title: "Company Profile", file: "/Ngaatec-Private-Limited-Company-Profile.pdf" },
  ];

  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  const generateMathQuiz = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const question = `${num1} ${operator} ${num2}`;
    const answer = eval(question);
    setMathQuiz({ question, answer });
  };

  const handleDocumentClick = (document: { id: number; title: string; file: string }) => {
    setSelectedDocument(document);
    setIsModalOpen(true);
    generateMathQuiz();
    setIsVerified(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDocument(null);
    setUserAnswer('');
    setIsVerified(false);
  };

  const verifyAnswer = () => {
    if (parseInt(userAnswer) === mathQuiz.answer) {
      setIsVerified(true);
    } else {
      alert("Incorrect answer. Please try again.");
      setUserAnswer('');
      generateMathQuiz();
    }
  };

  const handleDownload = () => {
    if (selectedDocument && isVerified) {
      window.open(selectedDocument.file, "_blank");
      closeModal();
    }
  };

  return (
    <div className="bg-gray-50 text-white min-h-screen">
      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center h-[50vh] text-center"
        style={{ backgroundImage: "url('/company_docs.webp')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <motion.h1
            className="text-white ml-1 mr-1 text-4xl sm:text-5xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Company Documents
          </motion.h1>
        </div>
      </header>

      {/* Documents Section */}
      <div className="bg-black  mx-auto px-4 py-12">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white bg-opacity-5 border border-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6">Available Documents</h2>
          <p className="mb-6">
            Below is a list of legal and compliance documents available for download. Please note that access to these documents is restricted to authorized users only. Click on a document to proceed.
          </p>

          {/* Document List */}
          <div className="space-y-4">
            {documents.map((doc) => (
              <motion.div
                key={doc.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="p-4 bg-white rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
                onClick={() => handleDocumentClick(doc)}
              >
                <h3 className="text-lg font-semibold text-gray-800">{doc.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Download Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Download Document"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(5px)',
            zIndex: 1000,
            overflow: 'hidden',
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            borderRadius: '12px',
            padding: '2rem',
            border: 'none',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            maxWidth: '90%',
            width: '400px',
            backgroundColor: '#212121',
          },
        }}
      >
        {/* Close Icon */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-white hover:text-wheat"
          aria-label="Close Modal"
        >
          &#10005; {/* Unicode for "X" */}
        </button>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-black bg-opacity-10 text-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Download Document</h2>
          <p className="mb-6">
            You are about to download: <strong>{selectedDocument?.title}</strong>. To ensure security, please verify that you are not a robot.
          </p>

          {!isVerified && (
            <div className="mb-6">
              <p className="mb-2">Solve the following math problem:</p>
              <p className="text-lg font-semibold mb-4">{mathQuiz.question} = ?</p>
              <input
                type="number"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="w-full p-2 bg-black bg-opacity-10 border border-white rounded-lg"
                placeholder="Your answer"
              />
              <button
                onClick={verifyAnswer}
                className="mt-4 px-4 py-2 bg-white text-black hover:bg-[#212121] hover:text-white border hover-border-white rounded-lg transition-colors"
              >
                Verify
              </button>
            </div>
          )}

          {isVerified && (
            <div className="flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 text-white border border-white hover:bg-white hover:text-black rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDownload}
                className="px-4 py-2 bg-white text-black hover:bg-[#212121] hover:text-white border hover-border-white rounded-lg transition-colors"
              >
                Download
              </button>
            </div>
          )}
        </motion.div>
      </Modal>
    </div>
  );
};

export default CompanyDocuments;
