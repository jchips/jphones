import React, { Component } from 'react';
import { Modal, Badge, Stack, ListGroup, ListGroupItem } from 'react-bootstrap';
import './CameraModal.scss'

class CameraModal extends Component {
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
      phoneName,
      cameraDetails,
      showCameraDetailsModal,
      handleCloseCameraDetails
    } = this.props
    const { isMobile } = this.state;
    const rearCameras = cameraDetails?.rearCameras;
    const primary = rearCameras?.primary;
    const uw = rearCameras?.ultrawide;
    const telephoto = rearCameras?.telephoto;
    const periscope = rearCameras?.periscope;
    const macro = rearCameras?.macro;
    const front = cameraDetails?.frontCameras;
    const cameraData = [
      {
        title: 'Primary',
        phone_data: primary?.mp,
        mm: primary?.mm,
        aperture: primary?.aperture,
        ois: primary?.ois,
        eis: primary?.eis,
        pdaf: primary?.pdaf,
      },
      {
        title: 'Ultra-wide',
        phone_data: uw?.mp,
        mm: uw?.mm,
        aperture: uw?.aperture,
        ois: uw?.ois,
        eis: uw?.eis,
        pdaf: uw?.pdaf,
      },
      {
        title: 'Telephoto',
        phone_data: telephoto?.mp,
        paren_data: telephoto ? `${telephoto?.opt_zoom}` : null,
        mm: telephoto?.mm,
        opt_zoom: telephoto?.opt_zoom,
        aperture: telephoto?.aperture,
        ois: telephoto?.ois,
        eis: telephoto?.eis,
        pdaf: telephoto?.pdaf,
      },
      {
        title: 'Periscope',
        phone_data: periscope?.mp,
        paren_data: periscope ? `${periscope?.opt_zoom}` : null,
        mm: periscope?.mm,
        opt_zoom: periscope?.opt_zoom,
        aperture: periscope?.aperture,
        ois: periscope?.ois,
        eis: periscope?.eis,
        pdaf: periscope?.pdaf,
      },
      {
        title: 'Macro',
        phone_data: macro?.mp,
        mm: macro?.mm,
        aperture: macro?.aperture,
        ois: macro?.ois,
        eis: macro?.eis,
        pdaf: macro?.pdaf,
      },
      {
        title: 'Selfie (front)',
        phone_data: front?.mp,
        mm: front?.mm,
        aperture: front?.aperture,
        ois: front?.ois,
        eis: front?.eis,
        pdaf: front?.pdaf,
      },
    ];
    return (
      <Modal
        show={showCameraDetailsModal}
        onHide={handleCloseCameraDetails}
        centered={isMobile}
        dialogClassName='cameras-modal'
      >
        <Modal.Header closeButton>
          <Modal.Title>{phoneName} Camera Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className='camera-details'>
          <ListGroup variant='flush'>
            {cameraData.map((item, index) =>
              item.phone_data ? (
                <ListGroupItem as={'div'} key={index} action>
                  <Stack direction='horizontal'>
                    <div className='p-2 item-title'>{item.title}:</div>
                    <div className='p-2 data'>{item.phone_data} MP</div>
                    {item.opt_zoom && (
                      <div className='p-2 black-tag'>{item.opt_zoom} optical zoom</div>
                    )}
                    <Stack className='p-2 data' direction='horizontal' gap={2}>
                      {item.mm && (
                        <span className='sub-data'>{item.mm}mm</span>
                      )}{' '}
                      {item.aperture && (
                        <span className='sub-data'>({item.aperture})</span>
                      )}{' '}
                      {item.ois && item.ois === 'yes' && (
                        <Badge bg='light' text='dark'>OIS</Badge>
                      )}{' '}
                      {item.eis && item.eis === 'yes' && (
                        <Badge bg='light' text='dark'>EIS</Badge>
                      )}{' '}
                      {item.pdaf && item.pdaf === 'yes' && (
                        <Badge bg='light' text='dark'>PDAF</Badge>
                      )}
                    </Stack>
                  </Stack>
                </ListGroupItem>
              ) : null
            )}
            {rearCameras.digi_zoom !== '' &&
              <ListGroupItem>
                <Stack direction='horizontal'>
                  <div className='p-2 item-title'>
                    Digital zoom:
                  </div>
                  <div className='p-2 data'>
                    {rearCameras.digi_zoom}
                  </div>
                </Stack>
              </ListGroupItem>
            }
            <ListGroupItem>
              <Stack direction='horizontal'>
                <div className='p-2 item-title'>
                  Video recording (rear):
                </div>
                {rearCameras.video.map((quality) => (
                  <div className='p-2 data' key={quality}>
                    {quality}
                  </div>
                ))}
              </Stack>
            </ListGroupItem>
            <ListGroupItem>
              <Stack direction='horizontal'>
                <div className='p-2 item-title'>
                  Video recording (selfie):
                </div>
                {front.video.map((quality) => (
                  <div className='p-2 data' key={quality}>
                    {quality}
                  </div>
                ))}
              </Stack>
            </ListGroupItem>
          </ListGroup>
        </Modal.Body>
      </Modal>
    );
  }
}

export default CameraModal;
