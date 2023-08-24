import { createStore } from 'vuex'

const dbConnection = "https://full-stack-eomp-7rin.onrender.com/";

export default createStore({
  state: {
    products: null,
    product: null,
    deleteProduct: null
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },
    setProduct: (state, product) => {
      state.product = product;
    }
  },
  actions: {
    async getProducts(context) {
      try {
        const response = await fetch(`${dbConnection}products`);
        if(!response.ok) {
          throw Error("Failed to fetch products");
        } else {
          const data = await response.json();
          const products = data.results;
          context.commit("setProducts", products);
          console.log(products)
        }
      } catch (err) {
        context.commit("Failed to get products", err.message);
        console.log("Failed to get products", err.message);
      }
    },
    async addProduct(context, newProductData) {
      try {
        const response = await fetch(`${dbConnection}add-product`, {

          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProductData),
        });
        if (!response.ok) {
          throw new Error(`Failed to add product. Status: ${response.status}`);
        } 
        await context.dispatch("getProducts");
        console.log("Product added successfully!")
      } catch (error) {
        console.error("Error adding product:", error);
      }
    }
  },
  modules: {
  }
})
