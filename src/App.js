import React from 'react';
import './App.css';
import Body from './components/body/Body';
import Footer from './components/footer/Footer'

class Item {
  constructor(name, number) {
    this.name = name;
    this.number = number;
  }
};

class App extends React.Component {

  createItem(name, number) {
  let item = new Item(name, number);
  }
  

  render() {
  return (
    <div id="app-container">
      <Body></Body>
      <Footer createItem={this.createItem}></Footer>
    </div>
  );
  }
}

export default App;
