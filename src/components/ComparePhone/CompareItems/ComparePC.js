import React, { Component } from 'react';
import { Accordion } from 'react-bootstrap';
import HStackCompare from './HStackCompare';

class ComparePC extends Component {
  render() {
    const { phone } = this.props;
    const title = 'Pros & Cons';
    return (
      <Accordion.Item eventKey={title}>
        <Accordion.Header>
          {phone.offName} {title}
        </Accordion.Header>
        <Accordion.Body>
          <Accordion>
            <HStackCompare phone={phone} title={'Pros'} listData={phone.pros} />
            <HStackCompare phone={phone} title={'Cons'} listData={phone.cons} />
          </Accordion>
        </Accordion.Body>
      </Accordion.Item>
    );
  }
}

export default ComparePC;
