import React, { Component } from 'react';
import {
  Accordion,
  Button,
  Container,
  ListGroup,
  ListGroupItem,
  Stack,
  Badge,
} from 'react-bootstrap';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

class CompareCameras extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCameraDetails: false,
      theme: 'light'
    };
  }

  toggleShowCameraDetails = () => {
    this.setState({ showCameraDetails: !this.state.showCameraDetails });
  };

  setTheme = (getTheme) => {
    this.setState({ theme: getTheme.matches ? 'dark' : 'light' })
  }

  componentDidMount() {
    // Fetch color scheme
    const getTheme = window.matchMedia('(prefers-color-scheme: dark)');
    this.setTheme(getTheme);
    getTheme.addEventListener('change', () => this.setTheme(getTheme)); // watch for changes
    return () => getTheme.removeEventListener('change', () => this.setTheme(getTheme));
  }

  render() {
    const { phone } = this.props;
    const { showCameraDetails } = this.state;
    const title = 'Camera';
    const rearCameras = phone?.cameraDetails?.rearCameras;
    const primary = rearCameras?.primary;
    const uw = rearCameras?.ultrawide;
    const telephoto = rearCameras?.telephoto;
    const periscope = rearCameras?.periscope;
    const macro = rearCameras?.macro;
    const frontCameras = phone?.cameraDetails?.frontCameras;
    const frontPrimary = frontCameras?.primary;
    const frontSecondary = frontCameras?.secondary;
    const cameraFeatures = phone.cameraFeatures;
    const cameraData = [
      {
        title: 'Primary',
        phone_data: phone.rearCameras.primary,
        mm: primary?.mm,
        sensor_size: primary?.sensor_size,
        aperture: primary?.aperture,
        ois: primary?.ois,
        eis: primary?.eis,
        pdaf: primary?.pdaf,
      },
      {
        title: 'Ultra-wide',
        phone_data: phone.rearCameras?.ultrawide,
        mm: uw?.mm,
        sensor_size: uw?.sensor_size,
        aperture: uw?.aperture,
        ois: uw?.ois,
        eis: uw?.eis,
        pdaf: uw?.pdaf,
      },
      {
        title: 'Telephoto',
        phone_data: phone.rearCameras?.telephoto,
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
        phone_data: phone.rearCameras?.periscope,
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
        phone_data: phone.rearCameras?.macro,
        mm: macro?.mm,
        sensor_size: macro?.sensor_size,
        aperture: macro?.aperture,
        ois: macro?.ois,
        eis: macro?.eis,
        pdaf: macro?.pdaf,
      },
      {
        title: 'Selfie (front)',
        phone_data: frontPrimary?.mp && frontPrimary?.mp + ' MP',
        mm: frontPrimary?.mm,
        sensor_size: frontPrimary?.sensor_size,
        aperture: frontPrimary?.aperture,
        ois: frontPrimary?.ois,
        eis: frontPrimary?.eis,
        pdaf: frontPrimary?.pdaf,
      },
      {
        title: 'Secondary Selfie (front)',
        phone_data: frontSecondary?.mp && frontSecondary?.mp + ' MP',
        mm: frontSecondary?.mm,
        sensor_size: frontSecondary?.sensor_size,
        aperture: frontSecondary?.aperture,
        ois: frontSecondary?.ois,
        eis: frontSecondary?.eis,
        pdaf: frontSecondary?.pdaf,
      },
    ];

    return (
      <Accordion.Item eventKey={title}>
        <Accordion.Header>
          {phone.offName} {title}
        </Accordion.Header>
        <Accordion.Body>
          {phone.cameraDetails ? (
            <>
              <Container>
                <Button
                  className='ddBtn'
                  variant={this.state.theme}
                  onClick={() => this.toggleShowCameraDetails()}
                >
                  {showCameraDetails
                    ? `Hide camera details`
                    : `Compare camera details`}
                  <div>
                    {showCameraDetails ? (
                      <HiChevronUp size={20} color={this.state.theme === 'light' ? '#424242' : '#969696'} />
                    ) : (
                      <HiChevronDown size={20} color={this.state.theme === 'light' ? '#424242' : '#969696'} />
                    )}
                  </div>
                </Button>

                {/* Camera details dropdown */}
                {showCameraDetails ? (
                  <div className='light-gray-bg'>
                    {cameraData.map((item, index) =>
                      item.phone_data ? (
                        <ListGroupItem as={'div'} key={index} action>
                          <Stack direction='horizontal'>
                            <div className='p-2 item-title'>{item.title}:</div>
                            <div className='p-2 data'>{item.phone_data}</div>
                            {item.opt_zoom && (
                              <div className='p-2 data'>{item.opt_zoom} optical zoom</div>
                            )}
                            <Stack className='p-2 data' direction='horizontal' gap={2}>
                              {item.mm && (
                                <span className='orange-text'>{`${item.mm}mm`}</span>
                              )}{' '}
                              {item.sensor_size && (
                                <span className='orange-text'>{item.sensor_size}"</span>
                              )}{' '}
                              {item.aperture && (
                                <span className='orange-text'>{`(${item.aperture})`}</span>
                              )}{' '}
                              {item.ois && item.ois === 'yes' && (
                                <Badge bg='' className='black'>OIS</Badge>
                              )}{' '}
                              {item.eis && item.eis === 'yes' && (
                                <Badge bg='' className='black'>EIS</Badge>
                              )}{' '}
                              {item.pdaf && item.pdaf === 'yes' && (
                                <Badge bg='' className='black'>PDAF</Badge>
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
                    {/* Video recording details */}
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
                        {frontCameras.video.map((quality) => (
                          <div className='p-2 data' key={quality}>
                            {quality}
                          </div>
                        ))}
                      </Stack>
                    </ListGroupItem>
                  </div>
                ) : null}
              </Container>
            </>
          ) : null}

          {/* Basic camera data */}
          {cameraData ? (
            <ListGroup variant='flush' className='camera-details'>
              {cameraData.map((item, index) =>
                item.phone_data ? (
                  <ListGroupItem as={'div'} key={index} action>
                    <Stack direction='horizontal'>
                      <div className='p-2 item-title'>{item.title}:</div>
                      <div className='p-2 data'>
                        {item.phone_data}{' '}
                        {item.opt_zoom && (
                          <span className='black-text'>{item.opt_zoom} optical zoom</span>
                        )}
                        {item.mm && (
                          <span className='p-2 sub-data'>{`${item.mm}mm`}</span>
                        )}{' '}
                        {item.sensor_size && (
                          <span className='p-1 sub-data'>{item.sensor_size}"</span>
                        )}{' '}
                        {item.aperture && (
                          <span className='p-1 sub-data'>{`(${item.aperture})`}</span>
                        )}{' '}
                        {item.ois && item.ois === 'yes' && (
                          <Badge
                            bg={this.state.theme === 'light' ? 'light' : 'dark'}
                            text={this.state.theme === 'light' ? 'dark' : 'light'}>OIS</Badge>
                        )}{' '}
                        {item.eis && item.eis === 'yes' && (
                          <Badge
                            bg={this.state.theme === 'light' ? 'light' : 'dark'}
                            text={this.state.theme === 'light' ? 'dark' : 'light'}>EIS</Badge>
                        )}{' '}
                        {item.pdaf && item.pdaf === 'yes' && (
                          <Badge
                            bg={this.state.theme === 'light' ? 'light' : 'dark'}
                            text={this.state.theme === 'light' ? 'dark' : 'light'}>PDAF</Badge>
                        )}
                      </div>
                    </Stack>
                  </ListGroupItem>
                ) : null
              )}
            </ListGroup>
          ) : null}

          {/* Camera features */}
          {cameraFeatures ? (
            <ListGroup variant='flush' className='camera-features'>
              {cameraFeatures.map((item, index) => (
                <ListGroupItem
                  as={'div'}
                  className='list-item'
                  key={index}
                  action
                >
                  {item}
                </ListGroupItem>
              ))}
            </ListGroup>
          ) : null}
        </Accordion.Body>
      </Accordion.Item>
    );
  }
}

export default CompareCameras;
