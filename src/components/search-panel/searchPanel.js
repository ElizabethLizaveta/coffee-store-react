import React, { Component } from 'react';


export default class SearchPanel extends Component {
   
    state = {
        char: ''
    }

    onUpdateSearch = this.onUpdateSearch.bind(this);

    onUpdateSearch(e) {
        const char = e.target.value;
        this.setState({char});
        this.props.onUpdateSearch(char);
    }

    render() {
        return (
            <form action="#" className="shop__search">
            <label className="shop__search-label" htmlFor="filter">Looking for</label>
            <input onChange={this.onUpdateSearch}
            id="filter" type="text" placeholder="start typing here..." className="shop__search-input" />
        </form>
        )
    }
} 