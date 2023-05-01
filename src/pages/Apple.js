import React from "react";
import iphoneData from "../json/iphone-data.json";
import VariantsAccordion from "../components/VariantsAccordion";
import "../styles/Brands.scss";

class Apple extends React.Component {
  render() {
    let versions = ['13', '12', '11', 'X'];
    return(
      <div className="apple">
        {versions.map((version, index) => 
          <VariantsAccordion data={iphoneData} category={version} key={index}/>  
        )}
      </div>
    )
  }
}

export default Apple;