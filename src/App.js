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
   * Sets the searchValue state to whatever the user searched for.
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
        <section class="company-links">
          {/* Google */}<a href="https://store.google.com/us/category/phones" target="_blank" rel="noreferrer"><img src="assets/imgs/logos/pixel-logo.webp" alt="Google logo" /></a>
          {/* Apple */}<a href="https://www.apple.com/iphone/" target="_blank" rel="noreferrer"><img src="assets/imgs/logos/apple-logo.webp" alt="Apple logo" /></a>
          {/* Samsung */}<a href="https://www.samsung.com/us/mobile/phones/all-phones/" target="_blank" rel="noreferrer"><img src="assets/imgs/logos/samsung-logo.webp" alt="Samsung logo" /></a>
          {/* OnePlus */}<a href="https://www.oneplus.com" target="_blank" rel="noreferrer"><img src="assets/imgs/logos/oneplus-logo.webp" alt="OnePlus logo" /></a>
          {/* Asus */}<a href="https://www.asus.com/us/Phone/" target="_blank" rel="noreferrer"><img src="assets/imgs/logos/asus-logo.webp" alt="Asus logo" style={{height:40}}/></a>
        </section>
      </>
    )
  }
}

export default App;
