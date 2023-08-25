<template>
    <div v-if="product">
        <input v-model="prodData.prodName" :placeholder="product.prodName">
        <input v-model="prodData.quantity" :placeholder="product.quantity">
        <input v-model="prodData.amount" :placeholder="product.amount">
        <input v-model="prodData.Category" :placeholder="product.Category">
        <input v-model="prodData.prodUrl" :placeholder="product.prodUrl">
        <button @click="updateProduct">Update Product</button>
    </div>
    <div v-else>
        <Spinner/>
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
            this.$store.dispatch("updateProduct", this.prodData);
        }
    },
    mounted() {
        this.$store.dispatch("getProduct", this.id);
    },
};
</script>