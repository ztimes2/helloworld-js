const app = Vue.createApp({
    data() {
        return {
            name: "John Doe",
            age: 18,
            imageURL: "https://memegenerator.net/img/images/300x300/14050591.jpg"
        };
    },
    methods: {
        ageInFiveYears() {
                return this.age + 5;
        },
        favouriteNumber() {
            return Math.random();
        }
    }
});

app.mount("#assignment");