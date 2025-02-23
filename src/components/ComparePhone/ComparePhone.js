import React, { Component } from 'react';
import { Accordion, Container } from 'react-bootstrap';
import CompareBrand from './CompareItems/CompareBrand';
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
    const { phone, phoneA, phoneB, brandData, selectedCompany } = this.props;
    return (
      <Container className='compare-phone__container'>
        <div className='img__container'>
          <img src={phone.img} alt={phone.offName} />
        </div>
        <div className='release__container'>
          <p>
            <span>Released:</span> {phone.released}
          </p>
        </div>
        <Accordion>
          {phoneA &&
            phoneB &&
            brandData &&
            phoneA?.brand !== phoneB?.brand &&
            phone.brand === brandData.company && (
              <CompareBrand
                brandData={brandData}
                selectedCompany={selectedCompany}
              />
            )}
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
