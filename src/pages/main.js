import React, { Component } from 'react';
import api from '../services/api';

import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';


export default class Main extends Component {

    static navigationOptions = {
        title: "JSHunt"
     }; 

     state = {
         productInfo: {},
         docs: [],
         page: 1,
     };


     componentDidMount(){
        this.loadProducts();
     }

     /** essa funcao recebe um parametro page com valor padrao = 1 */
     loadProducts = async (page = 1) => {
           /** `` template string ${}, para poder enviar e receber variaveis como parametros  */
          const response = await api.get(`/products?page=${page}`);
          
          /** ...(spreadOperador) concatena -  coloca objeto docs vindo de data em docs, e os abritutos restantes que vierem no data em productInfo */
          const { docs, ...productInfo } = response.data;

          /** inserindo variaveis no state */
          this.setState({ 
              docs: [...this.state.docs, ...docs], /** concatena(junta) os dados do array docs que ja esta no state, com os dados array docs, vindo do response.data  */
              productInfo,
              page
         });
     };


     loadMore = () => { 
         const { page, productInfo } = this.state; /** recuperando do state o page e outras informação */

         if(page === productInfo.pages) return; /** se ja estiver na ultima pagina, para a execução, a proxima linha de codigo nao sera executada, não faz nada */ 
         
         const pageNumber = page +1; /** senao gera o numero da proxima pagina */

         this.loadProducts(pageNumber) /** e carrega os itens da proxima pagina */
      }

     renderItem = ({ item }) => (
         <View style={styles.productContainer}>
             <Text style={styles.productTitle}>{item.title} </Text>
             <Text style={styles.productDescription}>{item.description} </Text>

             <TouchableOpacity 
                  style={styles.productButton} 
                  onPress={() => {
                      this.props.navigation.navigate('Product', { product: item });
                  }}>
                 <Text style={styles.productButtonText}>Acessar</Text>
             </TouchableOpacity>
         </View>
     );

    render() {
        return ( 
            <View style={styles.container}>
                {/* Uma forma de carregar e exibir uma lista
                <Text>Página Main:</Text>
                {this.state.docs.map(product => (
                   <Text key={product._id}> {product.title} </Text>
                ))} */}

                <FlatList /** também utilizad para fazer um inifit scroll */
                    contentContainerStyle={styles.list}
                    data={this.state.docs}
                    keyExtractor={item => item._id}
                    renderItem={this.renderItem}
                    onEndReached={this.loadMore} /** carrega loadMore quando chegar no final da lista.  onEndReached é disparada ao chegar no final da lista do flatList */
                    onEndReachedThreshold={0.1} /** quando chegar a 10% do scroll para terminar a pagina, começa a carregar os itens da proxima pagina  */
                />
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#C0C0C0"
    },
    list: {
        padding: 20
    },
    productContainer: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor:"#DDD",
        borderRadius: 5,
        padding: 20,
        marginBottom: 20

    },
    productTitle:{
        fontSize: 22,
        fontWeight: "bold",
        color:"#333"
    },
    productDescription: {
        fontSize: 20,
        color: "#000000",
        marginTop:5,
        lineHeight: 24 
    }, 
    productButton:{
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#DA552F",
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10

    },
    productButtonText:{
        fontSize: 16,
        color:"#DA552f",
        fontWeight: 'bold' 
    }

   });