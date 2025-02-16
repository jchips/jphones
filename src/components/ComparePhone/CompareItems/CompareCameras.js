import React, { Component } from 'react';
import HStackCompare from './HStackCompare';

class CompareCameras extends Component {
  render() {
    const { phone } = this.props;
    const title = 'Camera';
    const rearCameras = phone?.cameraDetails?.rearCameras;
    const primary = rearCameras?.primary;
    const uw = rearCameras?.ultrawide;
    const telephoto = rearCameras?.telephoto;
    const periscope = rearCameras?.periscope;
    const macro = rearCameras?.macro;
    const front = phone?.cameraDetails?.frontCameras;
    const data1 = [
      {
        title: 'Primary',
        phone_data: phone.rearCameras.primary,
        sub_data: primary ? `${primary?.mm}mm, ${primary?.aperture}, ${primary?.ois ? 'OIS' : null}, ${primary?.eis ? 'EIS' : null}, ${primary?.pdaf ? 'PDAF' : null}` : null,
      },
      {
        title: 'Ultra-wide',
        phone_data: phone.rearCameras.ultrawide,
        sub_data: uw ? `${uw?.mm}mm, ${uw?.aperture}, ${uw?.ois ? 'OIS' : null}, ${uw?.eis ? 'EIS' : null}, ${uw?.pdaf ? 'PDAF' : null}` : null,
      },
      {
        title: 'Telephoto',
        phone_data: phone.rearCameras.telephoto,
        paren_data: telephoto ? `${telephoto.opt_zoom}` : null,
        sub_data: telephoto ? `${telephoto?.mm}mm, ${telephoto?.aperture}, ${telephoto?.ois ? 'OIS' : null}, ${telephoto?.eis ? 'EIS' : null}, ${telephoto?.pdaf ? 'PDAF' : null}` : null,
      },
      {
        title: 'Periscope',
        phone_data: phone.rearCameras?.periscope,
        paren_data: periscope ? `${periscope.opt_zoom}` : null,
        sub_data: periscope ? `${periscope?.mm}mm, ${periscope?.aperture}, ${periscope?.ois ? 'OIS' : null}, ${periscope?.eis ? 'EIS' : null}, ${periscope?.pdaf ? 'PDAF' : null}` : null,
      },
      {
        title: 'Macro',
        phone_data: phone.rearCameras?.macro,
        sub_data: macro ? `${macro?.mm}mm, ${macro?.aperture}, ${macro?.ois ? 'OIS' : null}, ${macro?.eis ? 'EIS' : null}, ${macro?.pdaf ? 'PDAF' : null}` : null,
      },
      {
        title: 'Front',
        phone_data: phone.frontCameras,
        sub_data: front ? `${front?.mm}mm, ${front?.aperture}, ${front?.ois ? 'OIS' : null}, ${front?.eis ? 'EIS' : null}, ${front?.pdaf ? 'PDAF' : null}` : null,
      },
    ];

    return (
      <div>
        <HStackCompare phone={phone} title={title} data={data1} listData={phone.cameraFeatures} />
      </div>
    );
  }
}

export default CompareCameras;
