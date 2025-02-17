import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Compare from './Compare';
import Footer from '../../components/Footer/Footer';
import './compare.scss';

class CompareTab extends Component {
  render() {
    return (
      <div className='compare'>
        <Row>
          <Col sm={12} md={6}>
            <Compare index={'A'} />
          </Col>
          <Col sm={12} md={6}>
            <Compare index={'B'} />
          </Col>
        </Row>
        <Footer />
      </div>
    );
  }
}

export default CompareTab;
