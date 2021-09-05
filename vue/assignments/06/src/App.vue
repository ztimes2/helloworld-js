<template>
  <active-user v-bind:username="username" v-bind:age="age" />
  <user-data v-on:update-user-data="updateUserData" />
</template>

<script>
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";
export default {
  components: { ActiveUser, UserData },
  data() {
    return {
      username: "",
      age: null,
    };
  },
  methods: {
    updateUserData(username, age) {
      this.username = username;
      this.age = age;
    },
  },
};
</script>

<style>
</style>