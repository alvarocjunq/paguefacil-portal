import React, { Component } from 'react';
import Item from './lista-item';
import Ajax from '../helper/ajax';
import './cartoes.css';
import master from '../_img/mastercard.png';
import visa from '../_img/visa.png';
import logo from '../_img/ingenico-logo.png';

class ListaCartao extends Component{

    constructor(props){
        super(props);
        this.state = {data: []};
    }

    componentDidMount(){
        let _this = this;
        Ajax.get("http://localhost:3001/api/cartoes/12345678", function(data){
                _this.state.data = data.cartoes;
                _this.setState(_this);
        });
    }

    getCartoes(){
        let data = this.props.data;
        let cartoes = this.state.data;
        if(data.banco){
            let cartao = {
                    banco: data.banco,
                    numero: data.cartao,
                    bandeira: data.bandeira
            };
            cartoes.push(cartao);
        }
        return cartoes;
    }

    render() {
        let itens = this.getCartoes().map((cartao, idx) => {
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