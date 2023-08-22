<template>
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
import ProductAdmin from '@/components/ProductAdmin.vue'
export default {
    components: { ProductAdmin},
    computed: {
        products() {
            return this.$store.state.products;
        },
    },
    mounted() {
        this.$store.dispatch("getProducts")
    },
}
</script>
<style scoped>

</style>