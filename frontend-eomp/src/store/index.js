import { createStore } from 'vuex'

const dbConnection = "https://full-stack-eomp-7rin.onrender.com/";

export default createStore({
  state: {
    products: null,
    product: null,
    deleteProduct: null,
    users: null,
    user: null,
    deleteUser: null
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },
    setProduct: (state, product) => {
      state.product = product;
    },
    setDelete: (state, deleteProduct) => {
      state.deleteProduct = deleteProduct;
    },
    setUsers: (state, users) => {
      state.users = users;
    },
    setUser: (state, user) => {
      state.user = user;
    },
    setDeleteUser: (state, deleteUser) => {
      state.deleteUser = deleteUser;
    },
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
    async getProduct(context, prodID) {
      try {
        const response = await fetch(`${dbConnection}products/${prodID}`);
        if(!response.ok) {
          throw Error("Failed to fetch product");
        } else {
          const data = await response.json();
          const product = data.result[0];
          context.commit("setProduct", product);
          console.log(product)
        }
      } catch (err) {
        context.commit("Failed to get product", err.message);
        console.log("Failed to get product", err.message);
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
    },
    async deleteProduct(context, prodID) {
      try {
        context.commit("setDelete", null);
        const response = await fetch(`${dbConnection}products/${prodID}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error(`failed to delete product. Status: ${response.status}`);
        }
        context.commit("removeProduct", prodID);
        context.commit("setDelete", "success");
      } catch (error) {
        console.log("error deleting product:", error)
        context.commit("setDelete", "error")
      }
    },
    async updateProduct(context, product) {
      try {
        const response = await fetch(`https://full-stack-eomp-7rin.onrender.com/products/${product.prodID}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prodName: product.prodName,
            quantity: product.quantity,
            amount: product.amount,
            Category: product.Category,
            prodUrl: product.prodUrl
          }),
         }
        );
        if (!response.ok) {
          throw new Error(`failed to update product : ${response.status}`);
        }
        this.prodName = '';
        this.quantity = '';
        this.amount = '';
        this.Category = '';
        this.prodUrl = '';

        context.dispatch('getProducts');
        this.$router.push('/admin'); 
      } catch (error) {
        alert(error);
      }
    },

/*===================================================  USERS ACTIONS  =============================================================*/
async getUsers(context) {
  try {
    const response = await fetch(`${dbConnection}users`);
    if(!response.ok) {
      throw Error("Failed to fetch users");
    } else {
      const data = await response.json();
      const users = data.results;
      context.commit("setUsers", users);
      console.log(users)
    }
  } catch (err) {
    context.commit("Failed to get users", err.message);
    console.log("Failed to get users", err.message);
  }
},
async getUser(context, userID) {
  try {
    const response = await fetch(`${dbConnection}users/${userID}`);
    if(!response.ok) {
      throw Error("Failed to fetch user");
    } else {
      const data = await response.json();
      const user = data.result[0];
      context.commit("setUser", user);
      console.log(user)
    }
  } catch (err) {
    context.commit("Failed to get user", err.message);
    console.log("Failed to get user", err.message);
  }
},
async addUser(context, newUserData) {
  try {
    const response = await fetch(`${dbConnection}register`, {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserData),
    });
    if (!response.ok) {
      throw new Error(`Failed to add user. Status: ${response.status}`);
    } 
    await context.dispatch("getUsers");
    console.log("User added successfully!")
  } catch (error) {
    console.error("Error adding user:", error);
  }
},
async deleteUser(context, userID) {
  try {
    context.commit("setDeleteUser", null);
    const response = await fetch(`${dbConnection}users/${userID}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`failed to delete user. Status: ${response.status}`);
    }
    context.commit("removeUser", userID);
    context.commit("setDeleteUser", "success");
  } catch (error) {
    console.log("error deleting user:", error)
    context.commit("setDeleteUser", "error")
  }
},
async updateUser(context, user) {
  try {
    const response = await fetch(`https://full-stack-eomp-7rin.onrender.com/users/${user.userID}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: user.firstName,
        lastName: user.lastName,
        userAge: user.userAge,
        Gender: user.Gender,
        userRole: user.userRole,
        emailAdd: user.emailAdd,
        userPass: user.userPass,
        userProfile: user.userProfile,
      }),
     }
    );
    if (!response.ok) {
      throw new Error(`failed to update user : ${response.status}`);
    }
    this.firstName = "",
    this.lastName = "",
    this.userAge = "",
    this.Gender = "",
    this.userRole = "",
    this.emailAdd = "",
    this.userPass = "",
    this.userProfile = "",

    context.dispatch('getUsers');
    this.$router.push('/admin'); 
  } catch (error) {
    alert(error);
  }
},
  },
  modules: {
  }
})
