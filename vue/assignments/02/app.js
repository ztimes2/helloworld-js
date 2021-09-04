Vue.createApp({
    data() {
        return {
            text1: "",
            text2: "",
        };
    },
    methods: {
        showAlert() {
            alert("Yew!");
        },
        setText1(text) {
            this.text1 = text;
        },
        setText2(text) {
            this.text2 = text;
        }
    }
}).mount("#assignment");