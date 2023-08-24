<template>
    <tbody>
      <tr v-for="product in products" :key="product.prodID">
        <td><img class="img" :src="product.prodUrl" alt=""></td>
        <td>{{ product.prodName }}</td>
        <td>{{ product.amount }}</td>
        <td>{{ product.Category }}</td>
        <td>{{ product.quantity }}</td>
        <td>
            <button @click="deleteProduct(product.prodID)">Delete</button>
        </td>
        <!-- <td class="has-text-centered">
          <router-link :to="{ name: 'Edit', params: { id: product.productID } }" class="button is-info is-small">
            Edit
          </router-link>
          <a class="button is-danger is-small" @click="deleteProduct(product.productID)">Delete</a>
        </td> -->
      </tr>
    </tbody>
</template>
    
<script>    
export default {
    props: ["products"],
    methods: {
        async deleteProduct(prodID) {
            const confirmed = confirm("Are you sure you want to delete this product?");
            if (confirmed) {
                try {
                    await this.$store.dispatch("deleteProduct", prodID);
                    console.log("Product delted successfully");
                } catch (error) {
                    console.error("Error deleting product:", error);
                }
            }
        },
    },
};
</script>
    
<style scoped>
   .img {
    width: 150px;
    /* height: 150px; */
   }
</style>