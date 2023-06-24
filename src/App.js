import React from "react";
import './styles/index.scss';
import DisplayOptionsForm from "./components/DisplayOptionsForm";
import pixelData from "./json/pixel-data.json";
import samsungData from "./json/samsung-data.json";
import iphoneData from "./json/iphone-data.json";
import oneplusData from "./json/oneplus-data.json";
import DisplayPhones from "./pages/DisplayPhones";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAllPhones: false,
      data: [{name: 'Pixel', rowData: pixelData}, {name: 'Samsung', rowData: samsungData}, {name: 'Apple', rowData: iphoneData},
      {name: 'OnePlus', rowData: oneplusData}]
    }
  }

  /**
   * Sets the displayAllPhones state to true or false depending on which display the user wants to see.
   * @param {String} page - whichever radio button value the user selects (from DisplayOptionsForm.js)
   */
  display = (page) => {
    this.setState({displayAllPhones: page !== 'currentPhones' ? true : false})
  }

  render() {
    return(
      <>
        <DisplayOptionsForm display={this.display}/>
        <DisplayPhones data={this.state.data} displayAllPhones={this.state.displayAllPhones} />
      </>
    )
  }
}

export default App;
