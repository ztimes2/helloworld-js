<template>
    <li>
        <h2>{{ name }} {{ isFavourite ? '(Favourite)' : '' }} </h2>
        <section v-show="isVisible">
            <p><strong>Phone number: </strong>{{ phoneNumber }}</p>
            <p><strong>E-mail: </strong>{{ email }}</p>
        </section>
        <button v-on:click="toggleVisibility()">{{ isVisible ? 'Hide' : 'Show' }}</button>
        <button v-on:click="toggleFavour()">Toggle favour</button>
        <button v-on:click="deleteFriend()">Delete</button>
    </li>
</template>

<script>
export default {
    props: ['id', 'name', 'phoneNumber', 'email', 'isFavourite'],
    data() {
        return {
            isVisible: false
        };
    },
    emits: ['toggle-favour', 'delete-friend'],
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        },
        toggleFavour() {
            this.$emit('toggle-favour', this.id);
        },
        deleteFriend() {
            this.$emit('delete-friend', this.id);
        }
    }
};
</script>

<style>

</style>