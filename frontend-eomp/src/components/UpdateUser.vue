<template>
  <div class="container mb-3">
    <div v-if="user" class="row justify-content-center">
      <div class="col-md-6">
        <form>
          <div class="mb-3">
            <input v-model="userData.firstName" :placeholder="user.firstName" class="form-control" />
          </div>
          <div class="mb-3">
            <input v-model="userData.lastName" :placeholder="user.lastName" class="form-control" />
          </div>
          <div class="mb-3">
            <input v-model="userData.userAge" :placeholder="user.userAge" class="form-control" />
          </div>
          <div class="mb-3">
            <input v-model="userData.Gender" :placeholder="user.Gender" class="form-control" />
          </div>
          <div class="mb-3">
            <input v-model="userData.userRole" :placeholder="user.userRole" class="form-control" />
          </div>
          <div class="mb-3">
            <input v-model="userData.emailAdd" :placeholder="user.emailAdd" class="form-control" />
          </div>
          <div class="mb-3">
            <input v-model="userData.userPass" :placeholder="user.userPass" class="form-control" />
          </div>
          <div class="mb-3">
            <input v-model="userData.userProfile" :placeholder="user.userProfile" class="form-control" />
          </div>
          <button @click="updateUser" class="border-0 bg-black fw-bold text-white">Update User</button>
        </form>
      </div>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>
<script>
import Spinner from './SpinnerComp.vue';
export default {
    components: { Spinner },
    data() {
        return {
            userData: {
                userID: this.$route.params.id,
                firstName: "",
                lastName: "",
                userAge: "",
                Gender: "",
                userRole: "",
                emailAdd: "",
                userPass: "",
                userProfile: "",
            }
        };
    },
    props: ["id"],
    computed: {
        user() {
            return this.$store.state.user;
        },
    },
    methods: {
        updateUser() {
            const componentContext = this;
            this.$store.dispatch("updateUser", this.userData)
                .then(() => {
                    this.$store.commit("setUser", this.userData);
                    this.$router.replace('/admin');
                    // componentContext.$router.replace('/admin');
                })
                .catch(error => {
                    console.error(error);
                });
        }
    },
    mounted() {
        const userID = this.$route.params.id
        this.$store.dispatch("getUser", userID);
    },
};
</script>
<style scoped>
 .container {
    font-family: montserrat;
 }
</style>