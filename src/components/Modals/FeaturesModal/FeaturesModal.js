import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { HiCheckCircle, HiXCircle } from 'react-icons/hi';
import features from '../../../utils/features';
import './FeaturesModal.scss';

class FeaturesModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
    };
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
    const {
      featuresCheckData,
      phoneName,
      handleCloseFeatures,
      showFeaturesModal,
    } = this.props;
    const { isMobile } = this.state;
    return (
      <Modal
        show={showFeaturesModal}
        onHide={handleCloseFeatures}
        centered={isMobile}
        dialogClassName='features-modal'
      >
        <Modal.Header closeButton>
          <Modal.Title>{phoneName} Features</Modal.Title>
        </Modal.Header>
        <Modal.Body className='features-check'>
          <div className='ul-container'>
            <ul>
              {Object.values(featuresCheckData).map((value, index) => (
                <div key={index}>
                  <p>
                    {value === 'no' ? (
                      <HiXCircle style={{ color: 'red', marginRight: '3px' }} />
                    ) : (
                      <HiCheckCircle style={{ color: 'green', marginRight: '3px' }} />
                    )}
                    <span>{features[index]}: </span>
                    {value}
                  </p>
                </div>
              ))}
            </ul>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default FeaturesModal;
