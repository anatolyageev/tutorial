import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        products: [],
        cart: []
    },
    mutations: {
        SET_PRODUCTS_TO_STATE:(state, products)=>{
            state.products = products;
        },
        SET_CART:(state, product ) => {
            if(state.cart.length){
                let isProductExist = false;
                state.cart.map(function(item){
                    if(item.article === product.article){
                        isProductExist = true;
                        item.quantity++;
                    }
                });
                if(!isProductExist){
                    state.cart.push(product); 
                }

            }else{
                state.cart.push(product);
            }
        },
        REMOVE_FROM_CART:(state,index) => {
            state.cart.splice(index,1);
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}){
            return axios('http://localhost:3000/products', {
                // return axios('http://localhost:8081/ping', {
                method: "GET"
            })
            .then((products) => { 
                commit('SET_PRODUCTS_TO_STATE', products.data);
                console.log(products)
                return products;
            })
            .catch((error)=>{
                console.error(error);
                return error;
            })
        },
        ADD_TO_CART({commit}, product){
            commit('SET_CART',product);
        },
        DELETE_FROM_CART({commit},index){
            commit('REMOVE_FROM_CART', index);
        }
    },
    getters: {
        PRODUCTS(state){
           return state.products;
        },
        CART(state){
            return state.cart;
        }
    }
});

export default store;