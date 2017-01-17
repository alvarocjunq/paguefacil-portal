import React, { Component } from 'react';
import './footer.css';

class Footer extends Component{

    render() {
        return (
            <div className="footer">
                <div className="pure-menu pure-menu-horizontal">
                    <ul>
                        <li className="pure-menu-item">
                            <a href="http://www.ingenico.com/" className="pure-menu-link">Ingênico</a>
                        </li>
                        <li className="pure-menu-item">
                            <a href="http://www.theguilhermes.com/" className="pure-menu-link">
                                Desenvolvido por The Guilhermes
                            </a>
                        </li>
                    </ul>
                    <a className="btn orange darken-3 waves-effect waves-light" 
                        id="associar" 
                        onClick={this.props.onAssociar}>
                        Associar
                    </a>
                </div>
            </div>
        );
    }
}

export default Footer;