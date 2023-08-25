<template>
<SpinnerComp v-if="isLoading" />
    <div class="container d-flex justify-content-center">
        <router-link class="button text-decoration-none px-3 py-2 text-white fw-bold" :to="{ name: 'add-user'}">Add New User</router-link>
    </div>
    <div class="product-tab">
    <table class="mt-4 my-5" id="product-table">
        <thead>
            <th class="border-1 px-5">Image</th>
            <th class="border-1 px-5">Name</th>
            <th class="border-1 px-5">Surname</th>
            <th class="border-1 px-5">Gender</th>
            <th class="border-1 px-5">Role</th>
            <th class="border-1 px-5">Email</th>
        </thead>
        <UserAdmin :users="users" />
    </table>
    </div>

    <div class="container d-flex justify-content-center">
        <router-link class="button text-decoration-none px-3 py-2 text-white fw-bold" :to="{ name: 'addThisProduct'}">Add New Product</router-link>
    </div>
    <div class="product-tab">
    <table class="mt-4 my-5" id="product-table">
        <thead>
            <th class="border-1 px-5">Image</th>
            <th class="border-1 px-5">Name</th>
            <th class="border-1 px-5">Price</th>
            <th class="border-1 px-5">Category</th>
            <th class="border-1 px-5">Quantity</th>
        </thead>
        <ProductAdmin :products="products" />
    </table>
    </div>
</template>
<script>
import ProductAdmin from '@/components/ProductAdmin.vue';
import UserAdmin from '@/components/UserAdmin.vue';
import SpinnerComp from '@/components/SpinnerComp.vue';
export default {
    components: { ProductAdmin, UserAdmin, SpinnerComp},
    computed: {
        products() {
            return this.$store.state.products;
        },

        users() {
            return this.$store.state.users;
        },
    },
    mounted() {
        this.$store.dispatch("getProducts").then(() => {
            setTimeout(() => {
                this.isLoading = false;
            }, 3000);
        });

        this.$store.dispatch("getUsers")
        .then(() => {
            console.log('users fetched', this.users);
        })
        .catch(error => {
            console.log("Failed to fetch users", error);
        })
    },
    data() {
    return {
      isLoading: true,
    };
  },
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
.button {
    background-color: black;
    font-family: montserrat;
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
@media (max-width: 1025px) {
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