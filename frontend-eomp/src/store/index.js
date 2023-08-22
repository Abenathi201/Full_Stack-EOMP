import { createStore } from 'vuex'

const dbConnection = "https://full-stack-eomp-7rin.onrender.com/";

export default createStore({
  state: {
    products: null,
    product: null
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
          const products = await response.json();
          context.commit("setProducts", products);
          console.log(products)
        }
      } catch (err) {
        context.commit("Failed to get products", err.message);
        console.log("Failed to get products", err.message);
      }
    }
  },
  modules: {
  }
})
