import React from 'react';

//import { Text } from 'react-native';
import { WebView } from 'react-native-webview'

/** Como essa componente não vai manter estado e nem
 * formato de variavel funcao em vez de classe
  */
const Product = ({ navigation }) => (
 
     <WebView source= {{ uri:navigation.state.params.product.url }}/> 
     //<WebView source={{uri: this.props.navigation.state.params.product.url}} />
  
);

/**  */
Product.navigationOptions = ({ navigation }) => ({
   //title: navigation.state.params.product.title - trocar pelo codigo abaixo
   title: `${navigation.state.params.product.title}` /** recupera o parametro passado ao clicar o botao */
    
});



export default Product;

