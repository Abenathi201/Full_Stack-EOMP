<template>
    <div class="container justify-content-center">
            <hr>
            <h1 class="display-5 fs-4 text-center">Admin</h1>
            <hr>
        <form action="" class="row justify-content-center" id="productForm" @submit.prevent="addToStore">
            <div class="mb-2">
                <input type="text" name="" id="prodUrl" v-model="newProduct.prodUrl" placeholder="Image URL..." required>
            </div>
            <div class="mb-2">
                <input type="text" id="prodName" v-model="newProduct.prodName" placeholder="Product Name..." required>
            </div>
            <div class="mb-2">
                <input type="number" id="amount" v-model="newProduct.amount" placeholder="Product Price..." required>
            </div>
            <div class="mb-2">
                <input type="text" id="Category" v-model="newProduct.Category" placeholder="Category..." required>
            </div>
            <div class="mb-2">
                <input type="number" id="quantity" v-model="newProduct.quantity" placeholder="Enter the quantity..." required>
            </div>
            <div class="mb-2">
                <button class="border-0 bg-black text-white fw-bold" type="submit" id="addToStore">Add to Store</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            newProduct: {
                prodName: "",
                quantity: "",
                amount: "",
                Category: "",
                prodUrl: ""
            }
        };
    },
    methods: {
        async addToStore() {
            try {
                await this.$store.dispatch("addProduct", this.newProduct);
                this.$router.push("/admin");
                this.newProduct = {
                    prodName: "",
                    quantity: "",
                    amount: "",
                    Category: "",
                    prodUrl: ""
                };
                console.log("Product added successfully!")
            } catch (error) {
                console.error("Error adding product:", error);
            }
        }
    }
}
</script>
<style scoped>
.container {
  font-family: montserrat;
  text-align: center;
  padding: 20px;
}

#productForm {
  max-width: 500px;
  margin: 0 auto;
}
@media (max-width: 767px) {
  .container {
    padding: 10px; 
  }

  #productForm {
    max-width: 100%;
  }
}
</style>