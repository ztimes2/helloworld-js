Vue.createApp({
    data() {
        return {
            isParagraphAVisible: true,
            paragraphAClassInput: "",
            paragraphBColorInput: ""
        };
    },
    methods: {
        toggleParagraphA() {
            this.isParagraphAVisible = !this.isParagraphAVisible;
        }
    },
    computed: {
        paragraphAClass() {
            return {
                "user1": this.paragraphAClassInput === "user1",
                "user2": this.paragraphAClassInput === "user2",
                "visible": this.isParagraphAVisible,
                "hidden": !this.isParagraphAVisible
            };
        },
        paragraphBStyle() {
            return {
                "background-color": this.paragraphBColorInput
            };
        }
    }
}).mount("#assignment");