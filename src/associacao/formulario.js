import React, { Component } from 'react';
import Footer from '../footer/footer';

class FormularioCartao extends Component{

    render() {
        return (
        <div className="content pure-u-1 pure-u-md-3-4">
            <div className="row subtitle">
                    <div className="col-md-12">
                        <h4>Associa&ccedil;&atilde;o de Cart&atilde;o</h4>
                    </div>
            </div>

            <Footer />
        </div>
        );}
}

export default FormularioCartao;