<template>
    <tbody>
      <tr v-for="product in products" :key="product.prodID">
        <td><img class="img" :src="product.prodUrl" alt=""></td>
        <td>{{ product.prodName }}</td>
        <td>{{ product.amount }}</td>
        <td>{{ product.Category }}</td>
        <td>{{ product.quantity }}</td>
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

//     methods : {
//         async deleteProduct(id) {
//     try {
//       const response = await fetch(`http://localhost:3000/products/${id}`, {
//         method: 'DELETE',
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to delete product. Status: ${response.status}`);
//       }

//       this.getProducts();
//       this.$router.push("/admin")
//     } catch (err) {
//       console.error(err);
//     }
//   },
// }
};
</script>
    
<style scoped>
   .img {
    width: 150px;
    /* height: 150px; */
   }
</style>