import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import BrandCarousel from '../components/BrandCarousel';
import ModelAccordion from '../components/ModelAccordian';
import brandData from '../json/brand-data.json';
import samsungData from '../json/samsung-data.json';
import noteData from '../json/note-data.json';
import foldableData from '../json/foldable-data.json';
import '../styles/Brands.scss';

class Samsung extends Component {
  render() {
    let sPhones = ['s24', 's23', 's22', 's21', 's20', 's10', 's9'];
    return (
      <div className='samsung'>
        <h2>Samsung Phones</h2>
        <Container>
          <BrandCarousel brand={brandData.galaxy} />
        </Container>
        {sPhones.map((version, index) =>
          <ModelAccordion data={samsungData} category={version} key={index} />
        )}
        <ModelAccordion data={foldableData} category='z fold' />
        <ModelAccordion data={noteData} category='note' />
      </div>
    );
  }
}

export default Samsung;
