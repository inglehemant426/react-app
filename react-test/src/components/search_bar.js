import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props); // with this we are calling parent constructor

        this.state = { term: ''}; // We need to initialize state in the constructor
                                // This term will get updated when user will type in searchbox
                                // i.e state will get updated as user type

        // This function is used as callback in JSX so we need to bind this method to this
        // otherwise this will return undefined.

        this.onInputChange = this.onInputChange.bind(this);
    }
    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <p>Value of the input: {this.state.term} </p>
            </div>
        );

    }

    onInputChange(event) {
        this.setState({
           term: event.target.value
        });
        // This will trigger the youtube search in App.js
        // this.props.onSearchTermChange(event.target.value);
        this.props.onSearchTermChange(this.state.term);
    }

}

export default SearchBar;
