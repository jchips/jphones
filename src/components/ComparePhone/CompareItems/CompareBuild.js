import React, { Component } from 'react';
import HStackCompare from './HStackCompare';

class CompareBuild extends Component {
  render() {
    const { phone } = this.props;
    const title = 'Build';
    const data = [
      {
        title: 'Front',
        phone_data: phone.build.front,
      },
      {
        title: 'Back',
        phone_data: phone.build.back,
        paren_data: phone.build.back_texture,
      },
      {
        title: 'Frame',
        phone_data: phone.build.frame,
        paren_data: phone.build.frame_texture,
      },
      {
        title: 'Hinge',
        phone_data: phone.build.hinge ? phone.build.hinge : null,
        // texture: phone.build.hinge_texture,
      },
    ];
    return (
      <div>
        <HStackCompare phone={phone} title={title} data={data} />
      </div>
    );
  }
}

export default CompareBuild;
