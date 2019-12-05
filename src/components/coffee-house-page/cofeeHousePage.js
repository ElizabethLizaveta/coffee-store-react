import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';

import Header from '../header';
import Footer from '../footer';

import Service from '../services/service';

import './coffeeHousePage.sass'; 


export default class CoffeeHousePage extends Component {
    
    service = new Service();
    
    state = {
        itemList: null,
    }


    componentDidMount() { 
        this.service.getBestsellers()
            .then((itemList) => {
                this.setState({
                    itemList
                });
            })
    }


    renderItems(arr) {
        return arr.map((item, i) => {
            const id  = i;
            const {name, url, price} = item;
            const routerLink = `/coffee-item/:${name}`;
            return (
                         <Link key={id} className="best__item" to={routerLink}>
                         <img src={url} alt="coffee"/>
                         <div className="best__item-title">
                             {name}
                         </div>
                         <div className="best__item-price">{price}</div>
                     </Link>
            )
        })
    }

    render() {
        const { itemList } = this.state;
        
        let  content;

        if (!itemList) {
            content = 1;
        } else {
            content = this.renderItems(itemList);
        }
      

        return ( 
            <>
    <div className="preview">
       <div className="container">
           <div className="row">
               <div className="col-lg-6">
                     <Header/>
               </div>
           </div>
           <div className="row">
               <div className="col-lg-10 offset-lg-1">
                   <h1 className="title-big">Everything You Love About Coffee</h1>
                    <img className="beanslogo" src="../../logo/Beans_logo.svg" alt="Beans logo"/>
                    <div className="preview__subtitle">We makes every day full of energy and taste</div>
                    <div className="preview__subtitle">Want to try our beans?</div>
                    <Link className="preview__btn" to="/our-coffee/">More</Link>
               </div>
           </div>
       </div>
    </div>
    <section className="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="title">About Us</div>
                    <img className="beanslogo" src="../../logo/Logo.svg" alt="Beans logo"/>
                    <div className="about__text">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face. <br/><br/>

                        Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now.
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="best">
        <div className="container">
            <div className="title">Our best</div>
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="best__wrapper">
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