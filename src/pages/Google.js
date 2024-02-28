import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import BrandCarousel from '../components/BrandCarousel';
import ModelAccordion from '../components/ModelAccordian';
import brandData from '../json/brand-data.json';
import pixelData from '../json/pixel-data.json';
import foldableData from '../json/foldable-data.json';
import '../styles/Brands.scss';

class Google extends Component {
  render() {
    let versions = ['8', '7', '6', '5', '4', '3'];
    return (
      <div className='google'>
        <h2>Pixels</h2>
        <Container>
          <BrandCarousel brand={brandData.pixel} />
        </Container>
        {versions.map((version, index) =>
          <ModelAccordion data={pixelData} category={version} key={index} />
        )}
        <ModelAccordion data={foldableData} category='fold' />
      </div>
    );
  }
}

export default Google;
