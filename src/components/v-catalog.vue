<template >
  <div class="v-catalog">
    <router-link :to="{name: 'cart', params: {cart_data: CART}}">
      <div class="v-catalog__link_to_cart">Cart: {{CART.length}} </div>
    </router-link>
    
    <p>Catalog</p>
    <v-catalog-item v-for="product in PRODUCTS" 
    :key="product.article" 
    v-bind:product_data="product"
    @addToCart="addToCart"
    />
  </div>
</template>
<script>
import vCatalogItem from "./v-catalog-item.vue";
import {mapActions, mapGetters} from 'vuex'

export default {
  components: { vCatalogItem },
  name: "v-catalog",
  data() {
    return {
  
    };
  },
  computed:{
...mapGetters([
  'PRODUCTS',
  'CART'
])
  },
  methods: {
      ...mapActions([
          'GET_PRODUCTS_FROM_API',
          'ADD_TO_CART'
      ]),

      addToCart(data){
          this.ADD_TO_CART(data)
      }
  },
  mounted() {
      this.GET_PRODUCTS_FROM_API()
      .then((response)=>{
        if(response.data){
          console.log('Data loaded!')
        }
      })
  },
};
</script>
<style lang="scss">
.v-catalog {
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }

    &__link_to_cart {
      position: fixed;
      top: 80px;
      right: 10px;
      padding: $padding*2;
      border: solid 1px #aeaeae;
      background: #ffffff;
    }
  }

  .filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .range-slider {
    width: 200px;
    margin: auto 16px;
    text-align: center;
    position: relative;
  }

  .range-slider svg, .range-slider input[type=range] {
    position: absolute;
    left: 0;
    bottom: 0;
  }

  input[type=range]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    top: 2px;
    margin-top: -7px;
  }
</style>