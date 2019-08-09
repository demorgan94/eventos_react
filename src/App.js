import React, { Component } from 'react'
import Header from './components/Header';
import CategoriasProvider from './context/CategoriasContext';
import EventosProvider from './context/EventosContext';
import Formulario from './components/Formulario';
import ListadoEventos from './components/ListaEventos';

export default class App extends Component {
  render() {
    return (
      <EventosProvider>
        <CategoriasProvider>
          <Header titulo="Eventos en React con EventBrite API" />

          <div className="uk-container">
            <Formulario />

            <ListadoEventos />
          </div>
        </CategoriasProvider>
      </EventosProvider>
    )
  }
}

