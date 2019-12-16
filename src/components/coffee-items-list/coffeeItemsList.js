import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

import Service from '../services/service';

export default class CoffeeItemsList extends Component {

    service = new Service();

    state = {
        itemList: null,
        error: false,
        loading: true,
    }

    onLoaded(itemList) {
        this.setState({
            itemList,
            error: false,
            loading: false
        })
    }

    onError() {
        this.setState({
            error: true,
            loading: false
        })
    }

    componentDidMount() {
        this.props.getParams()
            .then((itemList) => {
                this.onLoaded(itemList)
            })
            .catch(this.onError) 
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            const id = i;
            const { name } = item;
            const routerLink = `/coffee-item/:${name}`;
            const label = this.props.renderItem(item);
            return (
                <Link key={id} className="shop__item" to={routerLink}>
                    {label}
                </Link>
            )
        })
    }

    render() {

        const { itemList, loading, error } = this.state;

        let content;

        if (loading) {
            content = <Spinner />
        } else if (error) {
            content = <ErrorMessage/>
        } else {
            content = this.renderItems(itemList);
        }

        return (
            <>
                {content}
            </>
        );
    }
}; 