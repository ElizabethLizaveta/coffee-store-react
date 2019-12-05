import React, { Component } from 'react';


export default class FilterPanel extends Component {
    buttons = [
        { name: 'Brazil', label: 'Brazil' },
        { name: 'Kenya', label: 'Kenya' },
        { name: 'Columbia', label: 'Columbia' },
    ]

    render() {
        const buttons = this.buttons.map(({ name, label }) => {
            return (
                <button
                    key={name}
                    className="shop__filter-btn"
                    type="button"
                    onClick={() => this.props.onUpdateFilter(name)}>{label}</button>
            )
        })

        return (
            <div className="shop__filter">
                <div className="shop__filter-label">
                    Or filter
                </div>
                <div className="shop__filter-group">
                    {buttons}
                </div>
            </div>
        )
    }
} 