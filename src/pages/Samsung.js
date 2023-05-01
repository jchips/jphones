import React, { Component } from 'react';
import samsungData from "../json/samsung-data.json";
import noteData from "../json/note-data.json";
import VariantsAccordion from "../components/VariantsAccordion";
import "../styles/Brands.scss";

class Samsung extends Component {
  render() {
    let sPhones = ['s22', 's21', 's20', 's10', 's9'];
    return (
      <div className='samsung'>
        {sPhones.map((version, index) => 
          <VariantsAccordion data={samsungData} category={version} key={index}/>  
        )}
        <VariantsAccordion data={noteData} category="note"></VariantsAccordion>
      </div>
    );
  }
}

export default Samsung;
