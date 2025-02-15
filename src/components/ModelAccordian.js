import React, { Component } from 'react';
import { Accordion } from 'react-bootstrap';
import WideCarousel from './Carousels/WideCarousel';

class ModelAccordion extends Component {
  // filters and returns only phones in the given category
  filterData = () => {
    let categoryData = this.props.data.filter(
      (phone) => phone.category === this.props.category
    );
    return categoryData;
  };

  render() {
    let categoryData = this.filterData();
    let typeOfPhone = categoryData[0].name.split(' ')[0];
    return (
      <div>
        <Accordion id={this.props.category}>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>
              {this.props.data[0].foldable ? `${typeOfPhone} ${this.props.category} ` : `${this.props.data[0].name.split(' ')[0]} ${this.props.category} `}
              series
            </Accordion.Header>
            <Accordion.Body>
              {categoryData.map((phone) => (
                <WideCarousel phone={phone} key={phone.name} mmToggle={this.props.mmToggle} />
              ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  }
}

export default ModelAccordion;
