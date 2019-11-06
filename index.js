/** essa é o primeiro arquivo a ser carregado ao executar a aplicacao  */
import {AppRegistry} from 'react-native';
import App from './src'; /** vai buscar automaticamenteo por index.js na pasta src */
import {name as appName} from './app.json';
 
AppRegistry.registerComponent(appName, () => App);
 