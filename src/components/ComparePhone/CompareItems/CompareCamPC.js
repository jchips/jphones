import React, { Component } from 'react';
import { Accordion } from 'react-bootstrap';
import HStackCompare from './HStackCompare';

class CompareCamPC extends Component {
  render() {
    const { phone } = this.props;
    const title = 'Camera Pros & Cons';
    return (
      <Accordion.Item eventKey={title}>
        <Accordion.Header>
          {phone.offName} {title}
        </Accordion.Header>
        <Accordion.Body>
          <Accordion>
            <HStackCompare phone={phone} title={'Camera Pros'} listData={phone.cameraPros} />
            <HStackCompare phone={phone} title={'Camera Cons'} listData={phone.cameraCons} />
          </Accordion>
        </Accordion.Body>
      </Accordion.Item>
    );
  }
}

export default CompareCamPC;
