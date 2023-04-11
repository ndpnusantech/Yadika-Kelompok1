import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import data from './DataFilm';

function DetailFilmButton() {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Detail
            </Button>
            {data.map((card) => (
                <Modal show={showModal} onHide={handleClose} key={card.id} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>{card.Titel}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ maxHeight: 'calc(400vh - 200px)', overflowY: 'auto', display: 'flex', alignItems: 'center' }}>
                        <img style={{ width: "200px", marginRight: '10px', }} src={card.Image} alt={card.Titel} />
                        <div>
                            <p>Harga: {card.Harga}</p>
                            <p>Genre: {card.Genre}</p>
                            <p>Sinopsis: {card.Sinopsis}</p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            ))}
        </>
    );
}

export default DetailFilmButton;
