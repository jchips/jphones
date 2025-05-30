import React, { Component } from 'react';
import { Accordion, ListGroup, ListGroupItem, Stack } from 'react-bootstrap';
import parse from 'html-react-parser';

class HStackCompare extends Component {
  render() {
    const { phone, title, data, listData } = this.props;
    return (
      <Accordion.Item eventKey={title}>
        <Accordion.Header>
          {phone.offName} {title}
        </Accordion.Header>
        <Accordion.Body>
          {!data && !listData && (
            <div className='no-data'>
              <p>Nothing recorded</p>
            </div>
          )}
          {data ? (
            <ListGroup variant='flush'>
              {data.map((item, index) => (
                <div key={index}>
                  {item.phone_data ? (
                    <ListGroupItem as={'div'} action>
                      <Stack direction='horizontal'>
                        <div className='p-2 item-title'>{item.title}:</div>
                        <div className='p-2 data'>
                          {item.phone_data}
                        </div>
                      </Stack>
                    </ListGroupItem>
                  ) : null}
                  {item.phone_link ? (
                    <ListGroupItem
                      as={'a'}
                      className='buy-link'
                      href={`${item.phone_link}`}
                      target='_blank'
                      action
                    >
                      {`✨ Click here to buy the ${phone.name}! ✨`}
                    </ListGroupItem>
                  ) : null}
                </div>
              ))}
            </ListGroup>
          ) : null}
          {listData ? (
            <ListGroup variant='flush'>
              {listData.map((item) => (
                <ListGroupItem as={'div'} className='list-item' key={item} action>
                  {parse(item)}
                </ListGroupItem>
              ))}
            </ListGroup>
          ) : null}
        </Accordion.Body>
      </Accordion.Item>
    );
  }
}

export default HStackCompare;
