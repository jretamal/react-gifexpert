import React from 'react'; // Importamos la biblioteca React.
import ReactDOM from 'react-dom/client'; // Importamos el módulo ReactDOM de React utilizado para renderizar la aplicación en el navegador.
import { GifExpertApp } from './GifExpertApp'; // Importamos el componente GifExpertApp desde el archivo GifExpertApp.js.

import './styles.css'; // Importamos el archivo styles.css. Este archivo se aplicará globalmente en toda la aplicación.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
)