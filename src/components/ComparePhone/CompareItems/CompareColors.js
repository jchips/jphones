import React, { Component } from 'react';
import {
  Accordion,
  ListGroup,
  ListGroupItem,
  Stack,
} from 'react-bootstrap';

class CompareColors extends Component {
  render() {
    const { phone } = this.props;
    return (
      // <Accordion>
      <Accordion.Item eventKey={'colors'}>
        <Accordion.Header>{phone.offName} Colors</Accordion.Header>
        <Accordion.Body>
          <ListGroup variant='flush'>
            {phone.colors.map(item => (
              item.color ? <ListGroupItem as={'div'} action>
                <Stack direction='horizontal'>
                  <div className='p-2 item-title'>{item.color}:</div>
                  <div className={`p-2 ${item.tag} color-sqr`}></div>
                </Stack>
              </ListGroupItem> : null
            ))}
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      // </Accordion>
    );
  }
}

export default CompareColors;
