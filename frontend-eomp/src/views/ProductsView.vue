<template>
  <SpinnerComp v-if="isLoading" />
   <div class="mx-auto container prods row justify-content-center mb-5">
    <div class="d-flex justify-content-center container">
      <button class="mx-3 fw-bold btn effect px-1">Perfumes</button>
      <button class="mx-3 fw-bold btn effect px-1">Sneakers</button>
      <button class="mx-3 fw-bold btn effect px-1">Watches</button>
    </div>
       <ProductComp class="" :products="products" />
    </div>
</template>
<script>
import ProductComp from '@/components/ProductComp.vue';
import SpinnerComp from '@/components/SpinnerComp.vue';

export default {
    components: { ProductComp, SpinnerComp },
    computed: {
        products() {
            return this.$store.state.products;
        },
    },
    mounted() {
        this.$store.dispatch("getProducts").then(() => {
            setTimeout(() => {
                this.isLoading = false;
            }, 3000); 
        });
    },
    data() {
      return {
        isLoading: true
      }
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
@media screen and (max-width: 500px) {
  .btn {
    letter-spacing: 0px;
    font-size: small;
    line-height: 15px;
    max-width: fit-content;
  }
}
@media screen and (max-width: 450px) {
  .btn {
    letter-spacing: 0px;
    font-size: 10px;
    line-height: 15px;
    max-width: none;
  }
}
@media screen and (max-width: 408px) {
  .btn {
    letter-spacing: 0px;
    font-size: 7px;
    line-height: 15px;
    width: 100px;
  }
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