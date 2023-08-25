<template>
  <div class="container mb-3">
    <div v-if="product" class="row justify-content-center">
      <div class="col-md-6">
        <form>
          <div class="mb-3">
            <input v-model="prodData.prodName" :placeholder="product.prodName" class="form-control" />
          </div>
          <div class="mb-3">
            <input v-model="prodData.quantity" :placeholder="product.quantity" class="form-control" />
          </div>
          <div class="mb-3">
            <input v-model="prodData.amount" :placeholder="product.amount" class="form-control" />
          </div>
          <div class="mb-3">
            <input v-model="prodData.Category" :placeholder="product.Category" class="form-control" />
          </div>
          <div class="mb-3">
            <input v-model="prodData.prodUrl" :placeholder="product.prodUrl" class="form-control" />
          </div>
          <button @click="updateProduct" class="border-0 bg-black fw-bold text-white">Update Product</button>
        </form>
      </div>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>
<script>
import Spinner from './SpinnerComp.vue';
export default {
    components: { Spinner },
    data() {
        return {
            prodData: {
                prodID: this.$route.params.id,
                prodName: '',
                quantity: '',
                amount: '',
                Category: '',
                prodUrl: '',
            }
        };
    },
    props: ["id"],
    computed: {
        product() {
            return this.$store.state.product;
        },
    },
    methods: {
        updateProduct() {
            const componentContext = this;
            this.$store.dispatch("updateProduct", this.prodData)
                .then(() => {
                    componentContext.$router.push('/admin');
                })
                .catch(error => {
                    console.error(error);
                });
        }
    },
    mounted() {
        const productID = this.$route.params.id
        this.$store.dispatch("getProduct", productID);
    },
};
</script>
<style scoped>
  .container {
    font-family: montserrat;
 }
</style>