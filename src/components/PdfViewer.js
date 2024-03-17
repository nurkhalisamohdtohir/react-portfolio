import React, { useState } from 'react';
import Pdf from '../assets/portfolio.jpg';
import './PdfViewerStyles.css';

const PdfViewer = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <button onClick={openModal}>Open PDF</button>
            {modalOpen && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={closeModal}>Close</button>
                        <div className="pdf-container">
                            <iframe
                                src={`${Pdf}#toolbar=0&navpanes=0&scrollbar=0`}
                                title="PDF Viewer"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    border: 'none', // Remove iframe border
                                }}
                                frameBorder="0"
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PdfViewer;
