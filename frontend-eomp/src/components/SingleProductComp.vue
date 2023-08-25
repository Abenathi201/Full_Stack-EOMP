<template>
    <div  v-if="product" class="single-view row">
        <div class="product col-lg-6 col-md-6 col-12 d-flex justify-content-center" >
            <img class="img-fluid" :src="product.prodUrl" alt="">
        </div>
        <div class="description col-lg-6 col-md-6 col-12 d-flex justify-content-center">
           <div class="fixing">
            <h2 class="mb-3 text-center fw-bolder">{{ product.prodName }}</h2>
           <p class="lead text-center fw-bold">{{ product.Category }}</p>
           <p class="h4 mb-4 text-center fw-bold">R {{ product.amount }}</p>
           </div>
        </div>
    </div>
</template>
<script>
export default {
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    const prodID = this.$route.params.prodID;
    this.$store.dispatch("getProduct", prodID);
  },
};
</script>
<style scoped>
.container {
  padding: 0 15px;
}
.img-fluid {
  max-width: 100%;
  height: auto;
}
.description {
  margin-block: auto;
}
.single-view {
  font-family: montserrat;
}
@media (max-width: 767px) {
  .row {
    flex-direction: column;
  }
  .single-view {
    padding: 20px;
  }
  .col-lg-6, .col-md-6, .col-12 {
    margin-bottom: 20px;
  }
}
</style>
