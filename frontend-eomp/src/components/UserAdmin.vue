<template>
    <tbody>
      <tr class="mx-3" v-for="user in users" :key="user.userID">
        <td><img class="img" :src="user.userProfile" :alt="user.firstName"></td>
        <td class="text-center fw-bold">{{ user.firstName }}</td>
        <td class="text-center fw-bold">{{ user.lastName }}</td>
        <td class="text-center fw-bold">{{ user.Gender }}</td>
        <td class="text-center fw-bold">{{ user.userRole }}</td>
        <td class="text-center fw-bold">{{ user.emailAdd }}</td>
        <td class="button">
            <button class="edit-del my-2 text-white bg-black border-0 fw-bold" @click="deleteUser(user.userID)">Delete</button>
            <br>
            <button class="edit-del text-white bg-black border-0 fw-bold"><router-link class="text-white text-decoration-none" :to="{ name: 'updateUser', params: { id: user.userID } }">Edit</router-link></button>
        </td>
      </tr>
    </tbody>
</template>
    
<script>    
export default {
    props: ["users"],
    methods: {
        async deleteUser(userID) {
            const confirmed = confirm("Are you sure you want to delete this user?");
            if (confirmed) {
                try {
                    await this.$store.dispatch("deleteUser", userID);
                    console.log("User deleted successfully");
                } catch (error) {
                    console.error("Error deleting user:", error);
                }
            }
        },

        async refreshUsers() {
        try {
            await this.$store.dispatch("getUsers");
            console.log("User data refreshed");
        } catch (error) {
            console.error("Error refreshing user data:", error);
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
   * {
    font-family: montserrat;
   }
   .edit-del {
    width: 70px;
   }
   @media (max-width: 1025px) {
    thead {
      display: none;
    }

    tbody tr {
      display: block;
      margin-bottom: 20px;
      border: 2px solid black;
    }

    tbody td {
      display: block;
      text-align: center;
    }
    button {
      margin-bottom: 5px;
    }
  }
</style>