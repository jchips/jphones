import React, { Component } from "react";
import { Accordion } from "react-bootstrap";
import WidePhoneCarousel from "./sub-components/WidePhoneCarousel";

class VariantsAccordion extends Component {
  // filters and returns only phones in the given category
  filterData = () => {
    let categoryData = this.props.data.filter(
      (phone) => phone.category === this.props.category
    );
    return categoryData;
  };

  render() {
    let categoryData = this.filterData();
    return (
      <div>
        <Accordion id={this.props.category}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              {this.props.data[0].name.split(" ")[0]} {this.props.category}{" "}
              phones
            </Accordion.Header>
            <Accordion.Body>
              {categoryData.map((phone) => (
                <WidePhoneCarousel phone={phone} />
              ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  }
}

export default VariantsAccordion;
