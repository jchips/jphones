import React, { Component } from 'react';
import {
  Accordion,
  Container,
  ListGroup,
  ListGroupItem,
  Stack,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import {
  HiCheckCircle,
  HiXCircle,
  HiChevronDown,
  HiChevronUp,
} from 'react-icons/hi';
import features from '../../../utils/features';

class CompareFeatures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFeaturesCheck: false,
      showAI: false,
    };
  }

  toggleShowFeaturesCheck = () => {
    this.setState({ showFeaturesCheck: !this.state.showFeaturesCheck });
  };

  toggleShowAI = () => {
    this.setState({ showAI: !this.state.showAI });
  };

  render() {
    const { phone } = this.props;
    const { showFeaturesCheck } = this.state;
    const title = 'Features';
    return (
      <Accordion.Item eventKey={title}>
        <Accordion.Header>
          {phone.offName} {title}
        </Accordion.Header>
        <Accordion.Body>
          {phone.featuresCheck ? (
            <>
              <Container>
                <Button
                  className='feature-check-btn'
                  variant='light'
                  onClick={() => this.toggleShowFeaturesCheck()}
                >
                  {showFeaturesCheck
                    ? 'Hide basic features'
                    : 'Compare basic features'}
                  <div>
                    {showFeaturesCheck ? (
                      <HiChevronUp size={20} color='#424242' />
                    ) : (
                      <HiChevronDown size={20} color='#424242' />
                    )}
                  </div>
                </Button>
                {showFeaturesCheck ? (
                  <Row className='light-gray-bg'>
                    {Object.values(phone.featuresCheck).map((value, index) => (
                      <Col md={6} sm={12} key={index}>
                        <Stack direction='horizontal'>
                          {value === 'no' ? (
                            <HiXCircle style={{ color: 'red' }} />
                          ) : (
                            <HiCheckCircle style={{ color: 'green' }} />
                          )}
                          <div className='p-1 item-title'>
                            {features[index]}:
                          </div>
                          <div className='p-1 data'>{value}</div>
                        </Stack>
                      </Col>
                    ))}
                  </Row>
                ) : null}
              </Container>
            </>
          ) : null}
          <ListGroup variant='flush'>
            {phone.phoneFeatures.map((feature) =>
              <ListGroupItem as={'div'} className='list-item' action>
                {feature}
              </ListGroupItem>
            )}
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    );
  }
}

export default CompareFeatures;
