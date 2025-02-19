import React, { Component } from 'react';
import {
  Accordion,
  Button,
  Container,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import parse from 'html-react-parser';

class CompareBrand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBrandFeatures: false,
      showBrandCamera: false,
      showBrandPC: false,
    };
  }

  toggleShowBrandFeatures = () => {
    this.setState({ showBrandFeatures: !this.state.showBrandFeatures });
  };

  toggleShowBrandCamera = () => {
    this.setState({ showBrandCamera: !this.state.showBrandCamera });
  };

  toggleShowBrandPC = () => {
    this.setState({ showBrandPC: !this.state.showBrandPC });
  };

  render() {
    const { brandData, selectedCompany } = this.props;
    const { showBrandFeatures, showBrandCamera, showBrandPC } = this.state;
    const title = `${selectedCompany.name} Brand`;

    return (
      <Accordion.Item eventKey={title}>
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>
          {/* TODO: Make Buttons more DRY */}
          <Container>
            {/* Features */}
            <Button
              className='ddBtn'
              variant='light'
              onClick={() => this.toggleShowBrandFeatures()}
            >
              {showBrandFeatures
                ? `Hide ${selectedCompany.name} features`
                : `${selectedCompany.name} features`}
              <div>
                {showBrandFeatures ? (
                  <HiChevronUp size={20} color='#424242' />
                ) : (
                  <HiChevronDown size={20} color='#424242' />
                )}
              </div>
            </Button>
            {showBrandFeatures ? (
              <ListGroup variant='flush'>
                {brandData.phoneFeatures.map((item, index) => (
                  <ListGroupItem
                    as={'div'}
                    className='list-item'
                    key={index}
                    action
                  >
                    {parse(item)}
                  </ListGroupItem>
                ))}
              </ListGroup>
            ) : null}

            {/* Camera */}
            <Button
              className='ddBtn'
              variant='light'
              onClick={() => this.toggleShowBrandCamera()}
            >
              {showBrandCamera
                ? `Hide ${selectedCompany.name} camera`
                : `${selectedCompany.name} camera`}
              <div>
                {showBrandCamera ? (
                  <HiChevronUp size={20} color='#424242' />
                ) : (
                  <HiChevronDown size={20} color='#424242' />
                )}
              </div>
            </Button>
            {showBrandCamera ? (
              <Accordion>
                <Accordion.Item eventKey='camera-features'>
                  <Accordion.Header>
                    {selectedCompany.name} Camera Features
                  </Accordion.Header>
                  <Accordion.Body>
                    <ListGroup variant='flush'>
                      {brandData.cameraFeatures.map((item, index) => (
                        <ListGroupItem
                          as={'div'}
                          className='list-item'
                          key={index}
                          action
                        >
                          {parse(item)}
                        </ListGroupItem>
                      ))}
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                {brandData.cameraPros && (
                  <Accordion.Item eventKey='camera-pros'>
                    <Accordion.Header>
                      {selectedCompany.name} Camera Pros
                    </Accordion.Header>
                    <Accordion.Body>
                      <ListGroup variant='flush'>
                        {brandData.cameraPros.map((item, index) => (
                          <ListGroupItem
                            as={'div'}
                            className='list-item'
                            key={index}
                            action
                          >
                            {parse(item)}
                          </ListGroupItem>
                        ))}
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                )}
                {brandData.cameraCons && (
                  <Accordion.Item eventKey='camera-cons'>
                    <Accordion.Header>
                      {selectedCompany.name} Camera Cons
                    </Accordion.Header>
                    <Accordion.Body>
                      <ListGroup variant='flush'>
                        {brandData.cameraCons.map((item, index) => (
                          <ListGroupItem
                            as={'div'}
                            className='list-item'
                            key={index}
                            action
                          >
                            {parse(item)}
                          </ListGroupItem>
                        ))}
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                )}
              </Accordion>
            ) : null}

            {/* Pros & Cons */}
            <Button
              className='ddBtn'
              variant='light'
              onClick={() => this.toggleShowBrandPC()}
            >
              {showBrandPC
                ? `Hide ${selectedCompany.name} pros & cons`
                : `${selectedCompany.name} pros & cons`}
              <div>
                {showBrandPC ? (
                  <HiChevronUp size={20} color='#424242' />
                ) : (
                  <HiChevronDown size={20} color='#424242' />
                )}
              </div>
            </Button>
            {showBrandPC ? (
              <Accordion>
                <Accordion.Item eventKey='pros'>
                  <Accordion.Header>
                    {selectedCompany.name} Pros
                  </Accordion.Header>
                  <Accordion.Body>
                    <ListGroup variant='flush'>
                      {brandData.pros ? (
                        brandData.pros.map((item, index) => (
                          <ListGroupItem
                            as={'div'}
                            className='list-item'
                            key={index}
                            action
                          >
                            {parse(item)}
                          </ListGroupItem>
                        ))
                      ) : (
                        <div className='no-data'>
                          <p>Nothing recorded</p>
                        </div>
                      )}
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='cons'>
                  <Accordion.Header>
                    {selectedCompany.name} Cons
                  </Accordion.Header>
                  <Accordion.Body>
                    <ListGroup variant='flush'>
                      {brandData.cons ? (
                        brandData.cons.map((item, index) => (
                          <ListGroupItem
                            as={'div'}
                            className='list-item'
                            key={index}
                            action
                          >
                            {parse(item)}
                          </ListGroupItem>
                        ))
                      ) : (
                        <div className='no-data'>
                          <p>Nothing recorded</p>
                        </div>
                      )}
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            ) : null}
          </Container>
        </Accordion.Body>
      </Accordion.Item>
    );
  }
}

export default CompareBrand;
