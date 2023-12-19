import React from "react";
import './styles/index.scss';
import DisplayOptionsForm from "./components/DisplayOptionsForm";
import pixelData from "./json/pixel-data.json";
import samsungData from "./json/samsung-data.json";
import iphoneData from "./json/iphone-data.json";
import oneplusData from "./json/oneplus-data.json";
import foldableData from "./json/foldable-data.json";
import DisplayPhones from "./pages/DisplayPhones";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAllPhones: false,
      data: [
        {name: 'Pixel', rowData: pixelData},
        {name: 'Samsung', rowData: samsungData},
        {name: 'Apple', rowData: iphoneData},
        {name: 'OnePlus', rowData: oneplusData},
        {name: 'Foldable', rowData: foldableData}
      ],
      searchValue: ''
    }
  }

  /**
   * Sets the displayAllPhones state to true or false depending on which display the user wants to see.
   * @param {String} selectedOption - whichever radio button value the user selects (from DisplayOptionsForm.js).
   */
  setDisplay = (selectedOption) => {
    this.setState({displayAllPhones: selectedOption !== 'currentPhones' ? true : false})
  }

  /**
   * 
   * @param {String} searchValue - The phone the user searched for (in lower case) - (from DisplayOptionsForm.js).
   */
  setSearch = (searchValue) => {
    this.setState({searchValue});
  }

  render() {
    return(
      <>
        <DisplayOptionsForm display={this.setDisplay} setSearch={this.setSearch}/>
        <DisplayPhones data={this.state.data} displayAllPhones={this.state.displayAllPhones} searchValue={this.state.searchValue}/>
      </>
    )
  }
}

export default App;
