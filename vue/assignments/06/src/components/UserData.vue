<template>
  <form v-on:submit.prevent="updateUserData()">
      <label>Username: </label>
      <input v-model="usernameEntry" />
      
      <br/>
      <br/>

      <label>Age: </label>
      <input type="number" v-model="ageEntry" />

      <br/>
      <br/>

      <button type="submit">Update</button> 
  </form>
</template>

<script>
export default {
    emits: ["update-user-data"],
    data() {
        return {
            usernameEntry: "",
            ageEntry: null,
        };
    },
    methods: {
        updateUserData() {
            this.$emit("update-user-data", this.usernameEntry, this.ageEntry);
        }
    }
}
</script>

<style>

</style>