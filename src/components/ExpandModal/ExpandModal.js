import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import './ExpandModal.scss';

class ExpandModal extends Component {
  render() {
    const { expandData, bubble, handleCloseExpand, showExpandModal } = this.props;
    return (
      <Modal show={showExpandModal} onHide={handleCloseExpand}>
        <Modal.Header closeButton>
          <Modal.Title>{bubble}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='ul-container'>
            <ul>
              {expandData.map((li, index) => (
                <li key={index}>{li}</li>
              ))}
            </ul>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default ExpandModal;
