import React, { Component } from 'react';
import { Accordion, ListGroup, ListGroupItem, Stack } from 'react-bootstrap';

class HStackCompare extends Component {
  render() {
    const { phone, title, data, listData } = this.props;
    return (
      // <Accordion>
      <Accordion.Item eventKey={title}>
        <Accordion.Header>
          {phone.offName} {title}
        </Accordion.Header>
        <Accordion.Body>
          {data ? <ListGroup variant='flush'>
            {data.map((item) =>
              item.phone_data ? (
                <ListGroupItem as={'div'} action>
                  <Stack direction='horizontal'>
                    <div className='p-2 item-title'>{item.title}:</div>
                    <div className='p-2 data'>
                      {item.phone_data}{' '}
                      {item.sub_data ? (
                        <span className='sub-data'>{`${item.sub_data}`}</span>
                      ) : null}
                      {item.paren_data ? (
                        <span className='sub-data'>{`(${item.paren_data})`}</span>
                      ) : null}
                    </div>
                  </Stack>
                </ListGroupItem>
              ) : null
            )}
          </ListGroup> : null}
          {listData ? (
            <ListGroup variant='flush'>
              {listData.map((item) => (
                <ListGroupItem as={'div'} className='list-item' action>
                  {item}
                </ListGroupItem>
              ))}
            </ListGroup>
          ) : null}
        </Accordion.Body>
      </Accordion.Item>
      // </Accordion>
    );
  }
}

export default HStackCompare;
