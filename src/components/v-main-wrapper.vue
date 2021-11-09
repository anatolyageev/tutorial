<template>
    <div class="v-main-wrapper">
        <keep-alive>
             <router-view></router-view>
        </keep-alive>
        <!-- <p> {{title}} </p>
        <v-catalog />
        <v-cart 
            v-if="CART.length"
            :cart_data="CART"
        /> -->
    </div>
</template>

<script>
// import vCatalog from './v-catalog.vue'
// import vCart from './v-cart.vue'

import {mapGetters} from 'vuex'


export default {
//   components: { vCatalog, vCart },
   name:"v-main-wrapper",
   props: {},
   data(){
       return{
           title: 'Main wrapper'
       }
   },
   computed:{
       ...mapGetters([
           'CART'
       ])
   },
   methods:{},
   watch: {},
   mounted(){
       console.log('Hello main wrapper loaded')
   }
}
</script>

<style lang="scss">
    .v-main-wrapper{
            flex-basis: 25%;
            box-shadow: 0 0 8px 0 #e0e0e0;
            padding: $padding*2;
            margin-bottom: $margin*2;
    }
</style>
