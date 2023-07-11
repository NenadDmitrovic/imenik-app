import React from "react";
import './Footer.css';

class Footer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name : "",
            number: ""
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleSave = this.handleSave.bind(this)
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value })
    }
    handleNumberChange(event) {
        this.setState({ number: event.target.value });
    }
    handleSave() {
        const { name, number } = this.state;
        this.props.createItem({ name, number });
        this.setState({ name: "", number: "" });
    }

    render() {
    return(
        <footer>
            <input value={this.state.name} onChange={this.handleNameChange} placeholder="Unesite ime"></input>
            <input value={this.state.number} onChange={this.handleNumberChange} placeholder="Unesite broj"></input>
            <button onClick={this.handleSave}>Sacuvaj</button>
        </footer>
    );
    }
}

export default Footer;