import React, { Component } from 'react'; 

import Header from '../header';
import Footer from '../footer';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage/';

import Service from '../services/service';

import './pleasurePage.sass'; 


export default class PleasurePage extends Component {

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
        this.service.getGoods()
            .then((itemList) => {
               this.onLoaded(itemList)
            })
            .catch(this.onError)
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            const id = i;
            const { name, url, price } = item; 
            return (
                  <div className="shop__item" key={id}>
                   <img src={url} alt="coffee" />
                    <div className="shop__item-title">
                        {name}
                    </div>
                    <div className="shop__item-price">{price}</div>
              </div>
            )
        })
    }

    render() {

        const { itemList, loading, error } = this.state;

        let content;

        if (loading) { 
            content = <Spinner/>
        } else if (error) {
            content = <ErrorMessage/>
        } else { 
            content = this.renderItems(itemList);
        }

        return (
            <> 
    <div className="banner-pleasure">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                      <Header/>
                </div>
            </div>
            <h1 className="title-big">For your pleasure</h1>
        </div>
    </div>
    <section className="shop">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 offset-2">
                    <img className="shop__girl" src="../../img/pleasure.png" alt="girl"/>
                </div>
                <div className="col-lg-4">
                    <div className="title">About our goods</div>
                    <img className="beanslogo" src="../../logo/Beans_logo_dark.svg" alt="Beans logo"/>
                    <div className="shop__text">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        <br/><br/>
                        Afraid at highly months do things on at. Situation recommend objection do intention<br/>
                        so questions. <br/>
                        As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                        met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
                        is song that held help face.
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="shop__wrapper">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
        );
    }
}; 