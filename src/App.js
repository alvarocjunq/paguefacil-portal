import React, { Component } from 'react';
import ListaCartao from './cartoes/lista';
import FormularioCartao from './associacao/formulario';
import './_css/pure-min.css';
import './_css/grids-responsive-min.css';
import './_css/blog.css';

class App extends Component {

  constructor(){
    super();
    this.state = {cartao:{}};
  }

  associar(cartao){
    this.setState({"cartao": cartao});
  }

  render() {
    return (
        <div id="layout" className="pure-g">
          <ListaCartao data={this.state.cartao} />
          <FormularioCartao associar={this.associar.bind(this)} />
        </div>
    );
  }
}

export default App;
