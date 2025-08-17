import React, { Component } from 'react';
import { Modal, Badge, Stack, ListGroup, ListGroupItem } from 'react-bootstrap';
import './CameraModal.scss'

class CameraModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      theme: 'light'
    };
  }

  setTheme = (getTheme) => {
    this.setState({ theme: getTheme.matches ? 'dark' : 'light' })
  }

  componentDidMount() {
    const handleResize = () => {
      this.setState({ isMobile: window.innerWidth <= 640 });
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    const getTheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Fetch color scheme
    getTheme.addEventListener('change', () => this.setTheme(getTheme)); // watch for changes
    this.setTheme(getTheme);

    return () => {
      getTheme.removeEventListener('change', () => this.setTheme(getTheme));
      window.removeEventListener('resize', handleResize);
    }
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
    const frontCameras = cameraDetails?.frontCameras;
    const frontPrimary = frontCameras?.primary;
    const frontSecondary = frontCameras?.secondary;
    const cameraData = [
      {
        title: 'Primary',
        phone_data: primary?.mp,
        mm: primary?.mm,
        sensor_size: primary?.sensor_size,
        aperture: primary?.aperture,
        ois: primary?.ois,
        eis: primary?.eis,
        pdaf: primary?.pdaf,
      },
      {
        title: 'Ultra-wide',
        phone_data: uw?.mp,
        mm: uw?.mm,
        sensor_size: uw?.sensor_size,
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
        sensor_size: telephoto?.sensor_size,
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
        sensor_size: periscope?.sensor_size,
        aperture: periscope?.aperture,
        ois: periscope?.ois,
        eis: periscope?.eis,
        pdaf: periscope?.pdaf,
      },
      {
        title: 'Macro',
        phone_data: macro?.mp,
        mm: macro?.mm,
        sensor_size: macro?.sensor_size,
        aperture: macro?.aperture,
        ois: macro?.ois,
        eis: macro?.eis,
        pdaf: macro?.pdaf,
      },
      {
        title: 'Selfie (front)',
        phone_data: frontPrimary?.mp,
        mm: frontPrimary?.mm,
        sensor_size: frontPrimary?.sensor_size,
        aperture: frontPrimary?.aperture,
        ois: frontPrimary?.ois,
        eis: frontPrimary?.eis,
        pdaf: frontPrimary?.pdaf,
      },
      {
        title: 'Secondary Selfie (front)',
        phone_data: frontSecondary?.mp,
        mm: frontSecondary?.mm,
        sensor_size: frontSecondary?.sensor_size,
        aperture: frontSecondary?.aperture,
        ois: frontSecondary?.ois,
        eis: frontSecondary?.eis,
        pdaf: frontSecondary?.pdaf,
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
        <Modal.Body>
          <div className="camera-modal__container">
            <ListGroup variant='flush'>
              {cameraData.map((item, index) =>
                item.phone_data ? (
                  <ListGroupItem as={'div'} key={index} action>
                    <Stack direction='horizontal'>
                      <div className='p-2 list-item-title-text'>{item.title}:</div>
                      <div className='p-2 data-text'>{item.phone_data} MP</div>
                      {item.opt_zoom && (
                        <div className='p-2 data-text--black'>{item.opt_zoom} optical zoom</div>
                      )}
                      <Stack className='p-2 data-text' direction='horizontal' gap={2}>
                        {item.mm && (
                          <span className='data-text--gray'>{item.mm}mm</span>
                        )}{' '}
                        {item.sensor_size && (
                          <span className='data-text--gray'>{item.sensor_size}"</span>
                        )}{' '}
                        {item.aperture && (
                          <span className='data-text--gray'>({item.aperture})</span>
                        )}{' '}
                        {item.ois && item.ois === 'yes' && (
                          <Badge bg={this.state.theme === 'light' ? 'light' : 'dark'}
                            text={this.state.theme === 'light' ? 'dark' : 'light'}>OIS</Badge>
                        )}{' '}
                        {item.eis && item.eis === 'yes' && (
                          <Badge bg={this.state.theme === 'light' ? 'light' : 'dark'}
                            text={this.state.theme === 'light' ? 'dark' : 'light'}>EIS</Badge>
                        )}{' '}
                        {item.pdaf && item.pdaf === 'yes' && (
                          <Badge bg={this.state.theme === 'light' ? 'light' : 'dark'}
                            text={this.state.theme === 'light' ? 'dark' : 'light'}>PDAF</Badge>
                        )}
                      </Stack>
                    </Stack>
                  </ListGroupItem>
                ) : null
              )}
              {/* Digital zoom */}
              {rearCameras.digi_zoom !== '' &&
                <ListGroupItem as={'div'} action>
                  <Stack direction='horizontal'>
                    <div className='p-2 list-item-title-text'>
                      Digital zoom:
                    </div>
                    <div className='p-2 data-text'>
                      {rearCameras.digi_zoom}
                    </div>
                  </Stack>
                </ListGroupItem>
              }
              {/* Video recording details */}
              <ListGroupItem as={'div'} action>
                <Stack direction='horizontal'>
                  <div className='p-2 list-item-title-text'>
                    Video recording (rear):
                  </div>
                  {rearCameras.video.map((quality) => (
                    <div className='p-2 data-text' key={quality}>
                      {quality}
                    </div>
                  ))}
                </Stack>
              </ListGroupItem>
              <ListGroupItem as={'div'} action>
                <Stack direction='horizontal'>
                  <div className='p-2 list-item-title-text'>
                    Video recording (selfie):
                  </div>
                  {frontCameras.video.map((quality) => (
                    <div className='p-2 data-text' key={quality}>
                      {quality}
                    </div>
                  ))}
                </Stack>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default CameraModal;
