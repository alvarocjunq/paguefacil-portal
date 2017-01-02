import React, { Component } from 'react';
import ListaCartao from './cartoes/lista';
import FormularioCartao from './associacao/formulario';
import './_css/pure-min.css';
import './_css/grids-responsive-min.css';
import './_css/blog.css';

class App extends Component {
  render() {
    return (
        <div id="layout" className="pure-g">
          <ListaCartao />
          <FormularioCartao />
        </div>
    );
  }
}

export default App;
