<template>
    <article class="grid">
        <hgroup>
            <h1>Register</h1>
            <h2>Create an account in our site.</h2>
        </hgroup>
        <form @submit.prevent="submit">
            <!-- E-mail -->
            <input type="email" name="email" placeholder="Email address" required v-model="email">

            <!-- Department -->
            <custom-select v-model="department" :data="$options.departments" lang_to="el"/>

            <!-- Level -->
            <custom-select v-model="level" lang_to="hi" :data="$options.levels">
                <template #placeholder>
                    Choose your <u>level</u>
                </template>

                <template #item="{item}">
                    <a :value="item.value"><span class="material-symbols-outlined">{{ item.icon }}</span> {{ item.value }}</a>
                </template>
            </custom-select>

            <!-- Button -->
            <button :disabled="!email || !department || !level" type="submit">
                Submit
            </button>
        </form>
    </article>
</template>

<script>
import CustomSelect from "./CustomSelect.vue";

export default {
    departments: [
        {key: 1, value: "Accounting"},
        {key: 2, value: "Customer support"},
        {key: 3, value: "Marketing"},
        {key: 4, value: "R&D"},
        {key: 5, value: "Sales"},
        {key: 6, value: "Quality Assurance"},
    ],

    levels: [
        {key: 1, icon: 'school', value: 'Trainee'},
        {key: 2, icon: 'child_care', value: 'Junior'},
        {key: 3, icon: 'person', value: 'Middle'},
        {key: 4, icon: 'elderly', value: 'Senior'},
        {key: 5, icon: 'accessibility', value: 'Leader'},
    ],

    data() {
        return {
            department: "",
            email: "",
            level: "",
        }
    },
    methods: {
        clear() {
            this.department = "";
            this.email = "";
            this.level = "";
        },
        submit() {
            console.log(this.email, this.department, this.level);
            this.clear();
        }
    },
    components: {
        CustomSelect
    }
};
</script>