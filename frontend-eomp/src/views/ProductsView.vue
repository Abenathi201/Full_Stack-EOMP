<template>
   <div v-if="products" class="mx-auto container prods row justify-content-center">
    <div class="d-flex justify-content-center container">
        <p class="mx-3 fw-bold btn effect">Perfumes</p>
        <p class="mx-3 fw-bold btn effect">Sneakers</p>
        <p class="mx-3 fw-bold btn effect">Watches</p>
    </div>
       <ProductComp class="" :products="products" />
    </div>
   <div v-else>Loading..</div>
</template>
<script>
import ProductComp from '@/components/ProductComp.vue'
export default {
    components: { ProductComp },
    computed: {
        products() {
            return this.$store.state.products;
        },
    },
    mounted() {
        this.$store.dispatch("getProducts");
    }
}
</script>
<style scoped>
  .container {
    font-family: montserrat;
  }
  .btn {
  letter-spacing: 0.1em;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 25px;
  max-width: 120px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
}
.btn:hover {
  text-decoration: none;
}
.effect {
  color: #FFF;
  border: 4px solid #000;
  box-shadow:0px 0px 0px 1px #000 inset;
  background-color: #000;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease-in-out;
}
.effect:hover {
  border: 4px solid #666;
  background-color: #FFF;
  box-shadow:0px 0px 0px 4px #EEE inset;
}

/*btn_text*/
.effect {
  transition: all 0.2s ease-out;
  z-index: 2;
}
.effect:hover {
  letter-spacing: 0.13em;
  color: #333;
}

/*highlight*/
.effect:after {
  background: #FFF;
  border: 0px solid #000;
  content: "";
  height: 155px;
  left: -75px;
  opacity: .8;
  position: absolute;
  top: -50px;
  -webkit-transform: rotate(35deg);
          transform: rotate(35deg);
  width: 50px;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);/*easeOutCirc*/
  z-index: 1;
}
.effect:hover:after {
  background: #FFF;
  border: 20px solid #000;
  opacity: 0;
  left: 120%;
  -webkit-transform: rotate(40deg);
          transform: rotate(40deg);
}
</style>