import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import parse from 'html-react-parser';
import './ExpandModal.scss';

class ExpandModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false
    }
  }
  componentDidMount() {
    const handleResize = () => {
      this.setState({ isMobile: window.innerWidth <= 640 });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }
  render() {
    const { expandData, bubble, handleCloseExpand, showExpandModal } = this.props;
    return (
      <Modal show={showExpandModal} onHide={handleCloseExpand} centered={this.state.isMobile}>
        <Modal.Header closeButton>
          <Modal.Title>{bubble}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='ul-container'>
            <ul>
              {expandData.map((li, index) => (
                <li key={index}>{parse(li)}</li>
              ))}
            </ul>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default ExpandModal;
