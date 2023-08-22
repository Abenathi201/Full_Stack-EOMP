<template>
<SpinnerComp v-if="isLoading" />
    <div>
        <table>
            <thead>
                <tr>
                    <th>Product Name:</th>
                    <th>Quantity:</th>
                    <th>Amount:</th>
                    <th>Category:</th>
                    <th>Image:</th>
                </tr>
            </thead>
            <ProductAdmin :products="products"/>
        </table>
    </div>
</template>
<script>
import ProductAdmin from '@/components/ProductAdmin.vue';
import SpinnerComp from '@/components/SpinnerComp.vue';
export default {
    components: { ProductAdmin, SpinnerComp},
    computed: {
        products() {
            return this.$store.state.products;
        },
    },
    mounted() {
        this.$store.dispatch("getProducts")
    },
    data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
</script>
<style scoped>

</style>