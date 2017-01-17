import React, { Component } from 'react';
import '../../node_modules/materialize-css/dist/css/materialize.min.css';
import '../../node_modules/materialize-css/dist/js/materialize.min.js';
import Footer from '../footer/footer';

class FormularioCartao extends Component{

    constructor(){
        super();
        this.state = {bandeira: ''};
    }

    onAssociar(){
        let refs = this.refs;
        let cartao = {
            "cartao" : refs.numero.value,
            "codseguranca" : refs.codseguranca.value,
            "nome": refs.nome.value,
            "senha": refs.senha.value,
            "bandeira": this.state.bandeira,
            "status": refs.status.value,
            "banco": refs.banco.value
        };
        this.props.associar(cartao);
    }

    onChangeBandeira(e){
        e.stopPropagation();
        this.setState({bandeira: e.target.value});
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
                    <input id="numero" ref="numero" type="number" className="validate" value={this.state.numero} />
                    <label htmlFor="numero">Número Cart&atilde;o</label>
                </div>
                <div className="input-field col s2">
                    <input id="codseguranca" ref="codseguranca" type="number" className="validate" value={this.state.codseguranca} />
                    <label htmlFor="codseguranca">Cód. Seguran&ccedil;a</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6">
                    <input id="nome" ref="nome" type="text" className="validate" value={this.state.nome}/>
                    <label htmlFor="nome">Nome do Cart&atilde;o</label>
                </div>
                <div className="input-field col s6">
                    <input id="banco" ref="banco" type="text" className="validate" value={this.state.banco}/>
                    <label htmlFor="banco">Banco</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6">
                    <input id="senha" ref="senha" type="password" className="validate" value={this.state.senha}/>
                    <label htmlFor="senha">Senha</label>
                </div>
                <div className="input-field col s6">
                    <select className="browser-default" id="bandeira" value={this.state.bandeira} onChange={this.onChangeBandeira.bind(this)}>
                        <option value="" disabled>Selecione a bandeira...</option>
                        <option value="visa">Visa</option>
                        <option value="mastercard">Mastercard</option>
                    </select>
                    <label htmlFor="bandeira" className="active">Bandeira</label>
                </div>
            </div>
            <div className="row">
                <div className="switch">
                    <label>
                    Inativo
                    <input defaultChecked ref="status" type="checkbox" />
                    <span className="lever"></span>
                    Ativo
                    </label>
                </div>
            </div>
            </form>
        </div>

        <Footer onAssociar={this.onAssociar.bind(this)} />
    </div>
        );
    }
}

export default FormularioCartao;