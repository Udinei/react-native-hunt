import React from 'react';
import Routes from './routes';
import './config/StatusBarConfig';

/** A declaração de componente abaixo permite mais recursos :
 *  class App extends Component {
 *     render() }
 *           return (){ 
 *              <Routes />} 
 *          }
 *     }
 *  do que a proxima declaração
 * */
const App = () => <Routes /> /** excuta automaticamente a classe routes.js  */

export default App;
