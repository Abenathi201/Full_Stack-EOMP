<template>
<SpinnerComp v-if="isLoading" />
    <router-link :to="{ name: 'addThisProduct'}">Add New Product</router-link>
    <table id="product-table">
        <thead>
            <th class="border-1 px-5">Image</th>
            <th class="border-1 px-5">Name</th>
            <th class="border-1 px-5">Price</th>
            <th class="border-1 px-5">Category</th>
            <th class="border-1 px-5">Quantity</th>
        </thead>
        <ProductAdmin :products="products" />
    </table>
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
        this.$store.dispatch("getProducts").then(() => {
            this.isLoading = false;
        })
    },
    data() {
    return {
      isLoading: true,
    };
  },
//   mounted() {
//     setTimeout(() => {
//       this.isLoading = false;
//     }, 3000);
//   }
}
</script>
<style scoped>
  input {
    width: 300px;
    height: 40px;
    border-radius: 0;
    border: solid black
}
@media screen and (max-width: 340px) {
    input {
        width: 270px;
    }
}
#addToStore {
    width: 10rem;
    height: 3rem;
    border: solid black;
    background-color: black;
    color: white;
    font-weight: bolder;
}
.row {
    display: grid;
}
.border-1 {
    background-color: black;
    color: white;
    border: solid white;
}
thead {
    border: solid white;
}
table {
    margin: auto;
}
@media (max-width: 767px) {
    #product-table thead {
      display: none;
    }

    #product-table tbody tr {
      display: block;
      margin-bottom: 20px;
      border: 1px solid #ccc;
    }

    #product-table tbody td {
      display: block;
      text-align: center;
    }
  }
</style>