<template>
   <div v-if="products" class="prods row justify-content-center">
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