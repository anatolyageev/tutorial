<template >
  <div class="v-catalog">
    <p>Catalog</p>
    <v-catalog-item v-for="product in this.$store.state.products" 
    :key="product.article" 
    v-bind:product_data="product"
    @sentArticle="showChildActivleInConsole"
    />
  </div>
</template>
<script>
import vCatalogItem from "./v-catalog-item.vue";
import {mapActions} from 'vuex'

export default {
  components: { vCatalogItem },
  name: "v-catalog",
  data() {
    return {
    //   products: [
       
    //   ],
    };
  },
  methods: {
      ...mapActions([
          'GET_PRODUCTS_FROM_API'
      ]),

      showChildActivleInConsole(data){
          console.log(data)
      }
  },
  mounted() {
      this.GET_PRODUCTS_FROM_API()
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
    padding: $padding * 2;
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

.range-slider svg,
.range-slider input[type="range"] {
  position: absolute;
  left: 0;
  bottom: 0;
}

input[type="range"]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -7px;
}
</style>