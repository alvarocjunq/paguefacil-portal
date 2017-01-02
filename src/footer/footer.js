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
                <a href="http://www.theguilhermes.com/" className="pure-menu-link">Desenvolvindo por The Guilhermes</a>
            </li>
        </ul>
    </div>
</div>
        );
    }
}

export default Footer;