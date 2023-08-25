<template>
    <div v-if="user">
        <input v-model="userData.firstName" :placeholder="user.firstName">
        <input v-model="userData.lastName" :placeholder="user.lastName">
        <input v-model="userData.userAge" :placeholder="user.userAge">
        <input v-model="userData.Gender" :placeholder="user.Gender">
        <input v-model="userData.userRole" :placeholder="user.userRole">
        <input v-model="userData.emailAdd" :placeholder="user.emailAdd">
        <input v-model="userData.userPass" :placeholder="user.userPass">
        <input v-model="userData.userProfile" :placeholder="user.userProfile">
        <button @click="updateUser">Update Product</button>
    </div>
    <div v-else>
        <Spinner/>
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
            this.$store.dispatch("updateUser", this.userData);
        }
    },
    mounted() {
        this.$store.dispatch("getUser", this.id);
    },
};
</script>