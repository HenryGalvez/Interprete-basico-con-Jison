import React from 'react';
import { Modal, Table, OverlayTrigger, Tooltip } from 'react-bootstrap';

function ModalSymbolsTable({ symbolsTable }) {
    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="realtive">
            <OverlayTrigger placement='left' overlay={<Tooltip id="tooltip-disabled">Symbols Table</Tooltip>}>
                <span className="d-inline-block">
                    <span class="badge rounded-pill bg-dark notify">{symbolsTable.length}</span>
                    <button className="btn btn-outline-warning btn-lg rounded-pill shadow" onClick={showModal}>
                        <span className="fa fa-table"></span>
                    </button>
                </span>
            </OverlayTrigger>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header>Symbols in system</Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Id</th>
                                <th>Value</th>
                                <th>Data Type</th>
                                <th>Structure Type</th>
                                <th>Scope Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                symbolsTable.map((symbol, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{key + 1}</td>
                                            <td>{symbol.id}</td>
                                            <td>{symbol.value}</td>
                                            <td>{symbol.dataType}</td>
                                            <td>{symbol.structureType}</td>
                                            <td>{symbol.scopeType}</td>
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

export default ModalSymbolsTable;