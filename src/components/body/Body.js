import React from "react";
import './Body.css';

class Body extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items : []
        };

        this.createItem = this.createItem.bind(this);
    }

    createItem(item) {
        this.setState(prevState => ({
            items: [...prevState.items, item]
          }));
    }
    render() {
    return (
        <div id="body">
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>{item.name}: {item.number}</li>
          ))}
        </ul>
      </div>
    );
    }
}

export default Body;