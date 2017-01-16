import React, { Component } from 'react';
import '../../node_modules/materialize-css/dist/css/materialize.min.css';
import '../../node_modules/materialize-css/dist/js/materialize.min.js';
import Footer from '../footer/footer';

class FormularioCartao extends Component{

    onAssociar(){

    }

    onChangeBandeira(e){
        e.stopPropagation();
        console.log(this);
        console.log(e.text);
    }

    render() {
        return (
        <div className="content pure-u-1 pure-u-md-3-4">
            <div className="row subtitle">
                <div className="col-md-12">
                    <h5>Associa&ccedil;&atilde;o de Cart&atilde;o</h5>
                </div>
            </div>

            <div className="row">
                <form className="col s12">
                <div className="row">
                    <div className="input-field col s10">
                        <input id="first_name" type="number" className="validate"/>
                        <label htmlFor="first_name">Número Cartão</label>
                    </div>
                    <div className="input-field col s2">
                        <input id="last_name" type="number" className="validate"/>
                        <label htmlFor="last_name">Cód. Segurança</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="disabled" type="text" className="validate"/>
                        <label htmlFor="disabled">Nome do Cartão</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="password" type="password" className="validate"/>
                        <label htmlFor="password">Senha</label>
                    </div>
                    <div className="input-field col s6">
                        <a className='dropdown-button btn' href='#' 
                            data-activates='bandeira' 
                            onClick={this.onChangeBandeira.bind(this)}>
                        Bandeira
                        </a>
                        <ul id='bandeira' className='dropdown-content'>
                            <li><a href="#!">Visa</a></li>
                            <li><a href="#!">Mastercard</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="switch">
                        <label>
                        Inativo
                        <input defaultChecked type="checkbox" />
                        <span className="lever"></span>
                        Ativo
                        </label>
                    </div>
                </div>
                </form>
            </div>

            <Footer />
        </div>
        );}
}

export default FormularioCartao;