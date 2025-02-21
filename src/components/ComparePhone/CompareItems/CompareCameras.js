import React, { Component } from 'react';
import {
  Accordion,
  Button,
  Container,
  ListGroup,
  ListGroupItem,
  Stack,
} from 'react-bootstrap';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

class CompareCameras extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCameraDetails: false,
    };
  }

  toggleShowCameraDetails = () => {
    this.setState({ showCameraDetails: !this.state.showCameraDetails });
  };

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
    const front = phone?.cameraDetails?.frontCameras;
    const cameraFeatures = phone.cameraFeatures;
    const cameraData = [
      {
        title: 'Primary',
        phone_data: phone.rearCameras.primary,
        mm: primary?.mm,
        aperture: primary?.aperture,
        ois: primary?.ois,
        eis: primary?.eis,
        pdaf: primary?.pdaf,
        sub_data: primary
          ? `${primary?.mm}mm, ${primary?.aperture} ${primary?.ois && primary?.ois === 'yes' ? 'OIS' : ''
          } ${primary?.eis && primary?.eis === 'yes' ? 'EIS' : ''} ${primary?.pdaf && primary?.pdaf === 'yes' ? 'PDAF' : ''
          }`
          : null,
      },
      {
        title: 'Ultra-wide',
        phone_data: phone.rearCameras.ultrawide,
        mm: uw?.mm,
        aperture: uw?.aperture,
        ois: uw?.ois,
        eis: uw?.eis,
        pdaf: uw?.pdaf,
        sub_data: uw
          ? `${uw?.mm ? `${uw?.mm}mm` : ''}, ${uw?.aperture} ${uw?.ois && uw?.ois === 'yes' ? 'OIS' : ''
          } ${uw?.eis && uw?.eis === 'yes' && uw?.eis ? 'EIS' : ''} ${uw?.pdaf && uw?.pdaf === 'yes' ? 'PDAF' : ''
          }`
          : null,
      },
      {
        title: 'Telephoto',
        phone_data: phone.rearCameras.telephoto,
        paren_data: telephoto ? `${telephoto?.opt_zoom}` : null,
        mm: telephoto?.mm,
        opt_zoom: telephoto?.opt_zoom,
        aperture: telephoto?.aperture,
        ois: telephoto?.ois,
        eis: telephoto?.eis,
        pdaf: telephoto?.pdaf,
        sub_data: telephoto
          ? `${telephoto?.mm}mm, ${telephoto?.aperture} ${telephoto?.ois && telephoto?.ois === 'yes' ? 'OIS' : ''
          } ${telephoto?.eis && telephoto?.eis === 'yes' ? 'EIS' : ''} ${telephoto?.pdaf && telephoto?.pdaf === 'yes' ? 'PDAF' : ''
          }`
          : null,
      },
      {
        title: 'Periscope',
        phone_data: phone.rearCameras?.periscope,
        paren_data: periscope ? `${periscope?.opt_zoom}` : null,
        mm: periscope?.mm,
        opt_zoom: periscope?.opt_zoom,
        aperture: periscope?.aperture,
        ois: periscope?.ois,
        eis: periscope?.eis,
        pdaf: periscope?.pdaf,
        sub_data: periscope
          ? `${periscope?.mm ? `${periscope?.mm}mm` : ''}, ${periscope?.aperture} ${periscope?.ois && periscope?.ois === 'yes' ? 'OIS' : ''
          } ${periscope?.eis && periscope?.eis === 'yes' ? 'EIS' : ''} ${periscope?.pdaf && periscope?.pdaf === 'yes' ? 'PDAF' : ''
          }`
          : null,
      },
      {
        title: 'Macro',
        phone_data: phone.rearCameras?.macro,
        mm: macro?.mm,
        aperture: macro?.aperture,
        ois: macro?.ois,
        eis: macro?.eis,
        pdaf: macro?.pdaf,
        sub_data: macro
          ? `${macro?.mm}mm, ${macro?.aperture} ${macro?.ois && macro?.ois === 'yes' ? 'OIS' : ''
          } ${macro?.eis && macro?.eis === 'yes' ? 'EIS' : ''} ${macro?.pdaf && macro?.pdaf === 'yes' ? 'PDAF' : ''
          }`
          : null,
      },
      {
        title: 'Selfie (front)',
        phone_data: phone.frontCameras,
        mm: front?.mm,
        aperture: front?.aperture,
        ois: front?.ois,
        eis: front?.eis,
        pdaf: front?.pdaf,
        sub_data: front
          ? `${front?.mm}mm, ${front?.aperture} ${front?.ois && front?.ois === 'yes' ? 'OIS' : ''
          } ${front?.eis && front?.eis === 'yes' ? 'EIS' : ''} ${front?.pdaf && front?.pdaf === 'yes' ? 'PDAF' : ''
          }`
          : null,
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
                  className="ddBtn"
                  variant="light"
                  onClick={() => this.toggleShowCameraDetails()}
                >
                  {showCameraDetails
                    ? `Hide camera details`
                    : `Compare camera details`}
                  <div>
                    {showCameraDetails ? (
                      <HiChevronUp size={20} color="#424242" />
                    ) : (
                      <HiChevronDown size={20} color="#424242" />
                    )}
                  </div>
                </Button>
                {showCameraDetails ? (
                  <div className="light-gray-bg">
                    {cameraData.map((item, index) =>
                      item.phone_data ? (
                        <ListGroupItem as={'div'} key={index} action>
                          <Stack direction="horizontal">
                            <div className="p-2 item-title">{item.title}:</div>
                            <div className="p-2 data">{item.phone_data}</div>
                            {item.opt_zoom && (
                              <div className="p-2 data">{item.opt_zoom}</div>
                            )}
                            <div className="p-2 data">
                              {item.mm && (
                                <span className="tag">{`${item.mm}mm,`}</span>
                              )}{' '}
                              {item.aperture && (
                                <span className="tag">{`(${item.aperture})`}</span>
                              )}{' '}
                              {item.ois && item.ois === 'yes' && (
                                <span className="tag">OIS</span>
                              )}{' '}
                              {item.eis && item.eis === 'yes' && (
                                <span className="tag">EIS</span>
                              )}{' '}
                              {item.pdaf && item.pdaf === 'yes' && (
                                <span className="tag">PDAF</span>
                              )}
                            </div>
                          </Stack>
                        </ListGroupItem>
                      ) : null
                    )}
                    <Stack direction="horizontal">
                      <div className="p-2 item-title">
                        Video recording (rear):
                      </div>
                      {rearCameras.video.map((quality) => (
                        <div className="p-2 data" key={quality}>
                          {quality}
                        </div>
                      ))}
                    </Stack>
                    <Stack direction="horizontal">
                      <div className="p-2 item-title">
                        Video recording (selfie):
                      </div>
                      {front.video.map((quality) => (
                        <div className="p-2 data" key={quality}>
                          {quality}
                        </div>
                      ))}
                    </Stack>
                  </div>
                ) : null}
              </Container>
            </>
          ) : null}
          {cameraData ? (
            <ListGroup variant="flush">
              {cameraData.map((item, index) =>
                item.phone_data ? (
                  <ListGroupItem as={'div'} key={index} action>
                    <Stack direction="horizontal">
                      <div className="p-2 item-title">{item.title}:</div>
                      <div className="p-2 data">
                        {item.phone_data}{' '}
                        {item.paren_data ? (
                          <span className="sub-data">
                            {`(${item.paren_data})`}{' '}
                          </span>
                        ) : null}
                        {item.sub_data ? (
                          <span className="sub-data">{`${item.sub_data}`}</span>
                        ) : null}
                      </div>
                    </Stack>
                  </ListGroupItem>
                ) : null
              )}
            </ListGroup>
          ) : null}
          {cameraFeatures ? (
            <ListGroup variant="flush">
              {cameraFeatures.map((item, index) => (
                <ListGroupItem
                  as={'div'}
                  className="list-item"
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
