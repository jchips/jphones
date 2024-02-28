import React from 'react';
import { Container } from 'react-bootstrap';
import BrandCarousel from '../components/BrandCarousel';
import ModelAccordion from '../components/ModelAccordian';
import brandData from '../json/brand-data.json';
import iphoneData from '../json/iphone-data.json';
import '../styles/Brands.scss';

class Apple extends React.Component {
  render() {
    let versions = ['15', '14', '13', '12', '11', 'XS', 'X', 'SE'];
    return (
      <div className="apple">
        <h2>iPhones</h2>
        <Container>
          <BrandCarousel brand={brandData.iphone} />
        </Container>
        {versions.map((version, index) =>
          <ModelAccordion data={iphoneData} category={version} key={index} />
        )}
      </div>
    )
  }
}

export default Apple;