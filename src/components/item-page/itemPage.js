import React, { Component } from 'react';

import Header from '../header';
import Footer from '../footer';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

import Service from '../services/service';

import './coffeepage.sass';

export default class ItemPage extends Component {

    service = new Service();

    state = {
        item: null,
        error: false,
        loading: true,
    }

    onLoaded(item) {
        this.setState({
            item,
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
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemName !== prevProps.itemName) {
            this.updateChar();
        }
    }

    componentDidCatch() {
        this.onError();
    }

    updateChar() {
        const { itemName } = this.props;

        if (!itemName) {
            return;
        }

        this.service.getShopItem(itemName)
            .then((item) => {
                this.onLoaded(item)
            })
            .catch(this.onError);
            this.foo.bar = 0;
    }

    render() {

        const { item, error, loading } = this.state;
        let content; 

        if (error) {
            content = <ErrorMessage/>
        } else if (loading) {
            content = <Spinner/>
        } else {
            const { url, price, country, description } = item;

            content = <div className="row">
                <div className="col-lg-5 offset-1">
                    <img className="shop__girl" src={url} alt="coffee_item" />
                </div>
                <div className="col-lg-4">
                    <div className="title">About it</div>
                    <img className="beanslogo" src="../../logo/Beans_logo_dark.svg" alt="Beans logo" />
                    <div className="shop__point">
                        <span>Country: </span>
                        {country}
                    </div>
                    <div className="shop__point">
                        <span>Description: </span>
                        {description}
                    </div>
                    <div className="shop__point">
                        <span>Price: </span>
                        <span className="shop__point-price">{price}</span>
                    </div>
                </div>
            </div>
        }

        return (
            <>
                <div className="banner-coffee">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <Header />
                            </div>
                        </div>
                        <h1 className="title-big">Our Coffee</h1>
                    </div>
                </div>
                <section className="shop">
                    <div className="container">
                        {content}
                    </div>
                </section>
                <Footer />
            </>
        );
    }
}; 