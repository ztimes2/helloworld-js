<template>
  <form v-on:submit.prevent="createFriend()">
    <div>
      <label>ID: </label>
      <input type="text" v-model="id" />
    </div>

    <div>
      <label>Name: </label>
      <input type="text" v-model="name" />
    </div>

    <div>
      <label>Phone number: </label>
      <input type="text" v-model="phoneNumber" />
    </div>

    <div>
      <label>E-mail: </label>
      <input type="text" v-model="email" />
    </div>

    <div>
      <input type="checkbox" v-model="isFavourite" />
      <label>Favourite</label>
    </div>

    <br/>
    
    <div>
      <button type="submit">Create a new friend</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["create-friend"],
  data() {
    return {
      id: "",
      name: "",
      phoneNumber: "",
      email: "",
      isFavourite: false,
    };
  },
  methods: {
    createFriend() {
      // TODO validate form
      this.$emit("create-friend", {
        id: this.id,
        name: this.name,
        phoneNumber: this.phoneNumber,
        email: this.email,
        isFavourite: this.isFavourite,
      });
      this.resetForm();
    },
    resetForm() {
      this.id = "";
      this.name = "";
      this.phoneNumber = "";
      this.email = "";
      this.isFavourite = false;
    },
  },
};
</script>

<style>
</style>