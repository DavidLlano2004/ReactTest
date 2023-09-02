import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApiProvider } from './hooks/Context/ApiContext';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css'

// creo una constante llamada raiz, que es la encargada de renderizar mis componentes en el html de la pagina
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Encierro mi funcion app en browserrouter  para hacer uso de las rutas, y a la vez en apiprovider para que asi pueda hacer uso de las funciones y retornar los valores del apicontext que se creó */}
    <BrowserRouter>
    <ApiProvider><App /></ApiProvider>
    </BrowserRouter>
  </React.StrictMode>
);