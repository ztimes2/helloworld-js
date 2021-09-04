Vue.createApp({
    data() {
        return {
            taskEntry: "",
            tasks: [],
            isVisible: true
        };
    },
    methods: {
        addTask() {
            if (this.taskEntry != "") {
                this.tasks.push(this.taskEntry);
                this.taskEntry = "";
            }
        },
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        }
    },
    computed: {
        visibilityToggleText() {
            if (this.isVisible) {
                return "Hide List";
            }
            return "Show List";
        }
    }
}).mount("#assignment");