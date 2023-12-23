import React from "react";
import asusData from "../json/asus-data.json";
import ModelAccordion from "../components/ModelAccordian";
import "../styles/Brands.scss";
class Apple extends React.Component {
  render() {
    let versions = ['zenfone'];
    return (
      <div className="asus">
        <h2>Asus phones</h2>
        {versions.map((version, index) =>
          <ModelAccordion data={asusData} category={version} key={index} />
        )}
      </div>
    )
  }
}

export default Apple;