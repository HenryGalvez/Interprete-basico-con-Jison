import React from 'react';
import { Modal, Table, OverlayTrigger, Tooltip } from 'react-bootstrap';

function ModalErrorsTable({ errorsTable }) {
    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="">
            <OverlayTrigger placement='left' overlay={<Tooltip id="tooltip-disabled">Errors Table</Tooltip>}>
                <span className="d-inline-block">
                    <span class="badge rounded-pill bg-dark notify">{errorsTable.length}</span>
                    <button className="btn btn-outline-danger btn-lg rounded-pill shadow" onClick={showModal}>
                        <span className="fa fa-exclamation-circle"></span>
                    </button>
                </span>
            </OverlayTrigger>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header>Errors in system</Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Type</th>
                                <th>Message</th>
                                <th>Row</th>
                                <th>Col</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                errorsTable.map((err, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{key + 1}</td>
                                            <td>{err.type}</td>
                                            <td>{err.message}</td>
                                            <td>{err.row}</td>
                                            <td>{err.column}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </Table>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ModalErrorsTable;