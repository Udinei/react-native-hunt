Dependências:
yarn add axios                   -  Ferramenta para acessar api externa
yarn add react-native-webview    -  Ferramenta para fazer funcionar webview 
yarn add react-navigation@2.18.3 -  Versao do navigator que funciona com o webview acima

Endereço da pagina de debug local no browser:
http://localhost:8081/debugger-ui/

Endereço da api utilizada :
https://rocketseat-node.herokuapp.com/api

Comandos utilizados pra limpar o projeto
 1. Clear watchman watches: watchman watch-del-all
 2. Delete node_modules: rm -rf node_modules and run yarn install
 3. Reset Metro's cache: yarn start --reset-cache
 4. Remove the cache: rm -rf /tmp/metro-*

 
Nota: 
Uma vez carregado o emulador do dispositivo do projeto, usando o android studio, 
nas outras vezes não é mais necessario abrir o android studio pra subir o emulador, 
o mesmo vai subir assim que o projeto for executado.

 
TODO: Nas proximas versões, verificar como tirar as mensagens abaixo:
 Warning: componentWillReceiveProps has been renamed, and is not recommended for use. See https://fb.me/react-async-component-lifecycle-hooks for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://fb.me/react-derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.

Please update the following components: SafeView, Transitioner
