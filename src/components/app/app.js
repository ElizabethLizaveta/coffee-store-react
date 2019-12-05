import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import CoffeeHousePage from '../coffee-house-page';
import OurCoffeePage from '../our-coffee-page';
import ItemPage from '../item-page';
import PleasurePage from '../pleasure-page';
import './app.sass';
import '../../fonts/fonts.sass'; 

export default class App extends Component {

    render() {


        return (
            <>
            <Route path='/' exact component={() => 
                       <CoffeeHousePage />
            }/>  
            <Route path='/our-coffee' component={OurCoffeePage}/>
           
            <Route path='/coffee-item/:name'render={
                        ({match})=> {
                            const {name} = match.params;
                            const newName = name.replace(":", "");
                        return <ItemPage itemName={newName}/>
                        }
                    }/> 
            <Route path='/pleasure' component={PleasurePage}/>
            </>
        );
    }
}; 