import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../header';
import Footer from '../footer';
import Spinner from '../spinner';
import FilterPanel from '../filter-panel';
import SearchPanel from '../search-panel';

import Service from '../services/service';

import './coffeePage.sass';
import ErrorMessage from '../errorMessage';


export default class OurCoffeePage extends Component {

    service = new Service();

    state = {
        itemList: null,
        error: false,
        loading: true,
        char: '',
        filter: 'all'
    }

    onUpdateFilter = this.onUpdateFilter.bind(this);
    onUpdateSearch = this.onUpdateSearch.bind(this);

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
        this.service.getShopItems()
            .then((itemList) => {
                this.onLoaded(itemList)
            }) 
            .catch(this.onError)
    }

    onUpdateSearch(char) {
        this.setState({char}) 
    }

    onUpdateFilter(filter) {
        this.setState({filter})
    }

    filterPost(items, filter) {
        
        if (filter === 'all') {
            return items
        }
       else {
            return items.filter((item) => item.country === filter)
        } 
    }

    searchPost(items, char) {
        if (char.length === 0) {
            return items
        }

        return items.filter((item) => {
            const itemNameTransform = item.name.toLowerCase();
            const charTransform = char.toLowerCase();
            return itemNameTransform.indexOf(charTransform) > -1
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
        const { itemList, loading, error, char, filter } = this.state; 
        const visiblePosts = this.filterPost(this.searchPost(itemList, char), filter);

        let content;

        if (loading) { 
            content = <Spinner/>
        } else if (error) {
            content = <ErrorMessage/>
        } else { 
            content = this.renderItems(visiblePosts);
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
                            <SearchPanel 
                            onUpdateSearch={this.onUpdateSearch}/>
                            </div>
                            <div className="col-lg-4">
                            <FilterPanel 
                            filter={filter}
                            onUpdateFilter={this.onUpdateFilter}/>
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