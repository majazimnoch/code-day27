const app = Vue.createApp({
    data() {
        return {
            neighborhood: 'an apartment in Alvik',
            salary: 45000
        }
    },
    methods: {
        increaseSalary() {
            this.salary += 1000;
        }
    }
})

app.mount('#app')