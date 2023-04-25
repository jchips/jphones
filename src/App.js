import React from "react";
import './styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayOptionsForm from "./components/DisplayOptionsForm";
import pixelData from "./json/pixel-data.json";
import samsungData from "./json/samsung-data.json";
import CurrentPhones from "./pages/CurrentPhones";
import AllPhones from "./pages/AllPhones";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAllPhones: false,
      // data: [pixelData, samsungData]
      data: [{name: 'pixel', rowData: pixelData}, {name: 'samsung', rowData: samsungData}]
    }
  }

  display = (page) => {
    this.setState({displayAllPhones: page !== 'currentPhones' ? true : false})
  }
  render() {
    return(
      <>
        <DisplayOptionsForm display={this.display}/>
        {this.state.displayAllPhones ? <AllPhones data={this.state.data}/> : <CurrentPhones data={this.state.data}/>}
      </>
    )
  }
}

export default App;
