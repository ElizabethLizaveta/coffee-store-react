import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../header';
import Footer from '../footer';

import Service from '../services/service';

import './coffeePage.sass';


export default class OurCoffeePage extends Component {

    service = new Service();

    state = {
        itemList: null,
    }

    componentDidMount() {
        this.service.getShopItems()
            .then((itemList) => {
                this.setState({
                    itemList
                });
            })
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            const id = i;
            const { name, country, url, price } = item;
            const routerLink = `/coffee-item/:${name}`;
            return (

                <Link key={id} className="shop__item" to={routerLink}>
                    <img src={url} alt="coffee" />
                    <div className="shop__item-title">
                        {name}
                    </div>
                    <div className="shop__item-country">{country}</div>
                    <div className="shop__item-price">{price}</div>
                </Link>
            )
        })
    }

    render() {
        const { itemList } = this.state;

        let content;

        if (!itemList) { 
            content = 1;
        } else { 
            content = this.renderItems(itemList);
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
                        <div className="row">
                            <div className="col-lg-4 offset-2">
                                <img className="shop__girl" src="../../img/coffee_girl.jpg" alt="girl" />
                            </div>
                            <div className="col-lg-4">
                                <div className="title">About our beans</div>
                                <img className="beanslogo" src="../../logo/Beans_logo_dark.svg" alt="Beans logo" />
                                <div className="shop__text">
                                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        <br /><br />
                                    Afraid at highly months do things on at. Situation recommend objection do intention<br />
                                    so questions. <br />
                                    As greatly removed calling pleased improve an. Last ask him cold feel<br />
                                    met spot shy want. Children me laughing we prospect answered followed. At it went<br />
                                    is song that held help face.
                    </div>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="row">
                            <div className="col-lg-4 offset-2">
                                <form action="#" className="shop__search">
                                    <label className="shop__search-label" htmlFor="filter">Looking for</label>
                                    <input id="filter" type="text" placeholder="start typing here..." className="shop__search-input" />
                                </form>
                            </div>
                            <div className="col-lg-4">
                                <div className="shop__filter">
                                    <div className="shop__filter-label">
                                        Or filter
                        </div>
                                    <div className="shop__filter-group">
                                        <button className="shop__filter-btn">Brazil</button>
                                        <button className="shop__filter-btn">Kenya</button>
                                        <button className="shop__filter-btn">Columbia</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="shop__wrapper">
                                    {content}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        );
    }
}; 