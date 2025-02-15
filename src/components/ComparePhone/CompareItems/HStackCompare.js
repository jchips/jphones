import React, { Component } from 'react';
import { Accordion, ListGroup, ListGroupItem, Stack } from 'react-bootstrap';

class HStackCompare extends Component {
  render() {
    const { phone, title, data } = this.props;
    return (
      // <Accordion>
      <Accordion.Item eventKey={title}>
        <Accordion.Header>{phone.offName} {title}</Accordion.Header>
        <Accordion.Body>
          <ListGroup variant='flush'>
            {data.map((item) =>
              item.phone_data ? (
                <ListGroupItem as={'div'} action>
                  <Stack direction='horizontal'>
                    <div className='p-2 item-title'>{item.title}:</div>
                    <div className='p-2 data'>{item.phone_data}</div>
                  </Stack>
                </ListGroupItem>
              ) : null
            )}
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      // </Accordion>
    );
  }
}

export default HStackCompare;
