import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Compare from './Compare';
import Footer from '../../components/Footer/Footer';
import './compare.scss';

class CompareTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneA: {},
      phoneB: {},
    };
  }

  setPhoneA = (phoneA) => {
    this.setState({ phoneA });
  };

  setPhoneB = (phoneB) => {
    this.setState({ phoneB });
  };

  render() {
    const { phoneA, phoneB } = this.state;
    return (
      <div className='compare'>
        <Row>
          <Col sm={12} md={6}>
            <Compare
              index={'A'}
              phoneA={phoneA}
              phoneB={phoneB}
              setPhoneA={this.setPhoneA}
            />
          </Col>
          <Col sm={12} md={6}>
            <Compare
              index={'B'}
              phoneA={phoneA}
              phoneB={phoneB}
              setPhoneB={this.setPhoneB}
            />
          </Col>
        </Row>
        <Footer />
      </div>
    );
  }
}

export default CompareTab;
