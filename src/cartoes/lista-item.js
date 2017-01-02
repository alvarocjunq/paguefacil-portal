import React, { Component } from 'react';
import './cartoes.css';


class ListaCartao extends Component{

    render() {
        let cartao = this.props.model;
        return (
            <li className="pure-menu-item">
                <img src={this.props.bandeira} alt="bandeira" />
                <a href="#" className="pure-menu-link">{cartao.banco}<br/>{cartao.numero}</a>
            </li>
        );
    }
}

export default ListaCartao;