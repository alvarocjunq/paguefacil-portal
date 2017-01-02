import React, { Component } from 'react';
import Item from './lista-item';

import './cartoes.css';
import master from '../_img/mastercard.png';
import visa from '../_img/visa.png';
import logo from '../_img/ingenico-logo.png';

class ListaCartao extends Component{

    constructor(){
        super();
        this.state = {"cartoes" : [{"banco":"Santander", "numero":"1234.5678.1234.5678", "bandeira":"visa"},
                                   {"banco":"Itaú", "numero":"1234.5678.1234.5678", "bandeira":"master"}]};
    }

    render() {
        let itens = this.state.cartoes.map((cartao, idx) => {
            return <Item key={idx} model={cartao} bandeira={(cartao.bandeira === "visa" ? visa : master)} />;
        });

        return (
            <div className="sidebar pure-u-1 pure-u-md-1-4">
                <span className="menu-heading"><img src={logo} alt="logo" id="logo" /></span>
                <ul className="pure-menu-list cartoes">
                    {itens}                
                </ul>
            </div>
            );
        }
}

export default ListaCartao;