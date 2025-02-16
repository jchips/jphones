import React, { Component } from 'react';
import {
  Accordion,
  Container,
} from 'react-bootstrap';
import CompareSpecs from './CompareItems/CompareSpecs';
import CompareDisplay from './CompareItems/CompareDisplay';
import CompareColors from './CompareItems/CompareColors';
import CompareFeatures from './CompareItems/CompareFeatures';
import CompareBuild from './CompareItems/CompareBuild';
import CompareCameras from './CompareItems/CompareCameras';
import CompareCamPC from './CompareItems/CompareCamPC';
import ComparePC from './CompareItems/ComparePC';
import ComparePrice from './CompareItems/ComparePrice';
import './ComparePhone.scss';

class ComparePhone extends Component {
  render() {
    const { phone } = this.props;
    return (
      <Container className='compare-phone__container'>
        <div className='img__container'>
          <img src={phone.img} alt={phone.offName} height={500} width={500} />
        </div>
        <div class='release__container'>
          <p><span>Released:</span> {phone.released}</p>
        </div>
        <Accordion>
          <CompareSpecs phone={phone} />
          <CompareColors phone={phone} />
          <CompareDisplay phone={phone} />
          <CompareFeatures phone={phone} />
          <CompareBuild phone={phone} />
          <CompareCameras phone={phone} />
          <CompareCamPC phone={phone} />
          <ComparePC phone={phone} />
          <ComparePrice phone={phone} />
        </Accordion>
      </Container>
    );
  }
}

export default ComparePhone;
