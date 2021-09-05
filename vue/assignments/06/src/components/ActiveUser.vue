<template>
  <div>
      <h2 v-if="hasUsername">My name is {{ username }}.</h2> 
      <h3 v-if="hasAge">I'm {{ age }} year(s) old.</h3>
  </div>
</template>

<script>
export default {
    props: {
        "username": {
            type: String
        },
        "age": {
            type: Number
        }
    },
    computed: {
        hasUsername() {
            return this.username !== "";
        },
        hasAge() {
            return this.age !== null;
        }
    }
}
</script>

<style>

</style>