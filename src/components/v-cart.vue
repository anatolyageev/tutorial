<template>
  <div class="v-cart">
    <router-link :to="{name: 'catalog'}">
      <div class="v-catalog__link_to_cart">To Catalog</div>
    </router-link>
     <p>Cart</p> 
     <p v-if="!cart_data.lenght">There are no products in cart</p>
     <v-cart-item 
     v-for="(item, index) in cart_data"
     :key = "item.article"
     :cart_item_data="item"
     @deleteFromCart="deleteFromCart(index)"
     /> 
  </div>
</template>

<script>
import vCartItem from './v-cart-item.vue';
import {mapActions} from'vuex'

export default {
  components: { vCartItem },
    name:"v-cart",
    props:{
      cart_data:{
        type: Array,
        default(){
          return [];
        }
      }
    },
    methods: {
      ...mapActions([
          'DELETE_FROM_CART'
      ]),
      deleteFromCart(index){
         this.DELETE_FROM_CART(index);
      }
    },
};
</script>
<style lang="">
</style>