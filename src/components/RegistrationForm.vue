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
            <custom-select
                    v-model="department"
                    placeholder="Choose your department"
                    :data="$options.departments"
            />

            <!-- Level -->
            <aside>
                <details role="list" ref='level'>
                    <summary :selected="!!level" aria-haspopup="listbox">
                        {{ !!level ? level : 'Choose your level' }}
                    </summary>
                    <ul role="listbox" @click="selectLevel">
                        <li><a value="Trainee"><span class="material-symbols-outlined">school</span> Trainee</a></li>
                        <li><a value="Junior"><span class="material-symbols-outlined">child_care</span> Junior</a></li>
                        <li><a value="Mid"><span class="material-symbols-outlined">person</span> Mid</a></li>
                        <li><a value="Senior"><span class="material-symbols-outlined">elderly</span> Senior</a></li>
                        <li><a value="Leader"><span class="material-symbols-outlined">accessibility</span> Leader</a>
                        </li>
                    </ul>
                </details>
            </aside>

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
        {key: 3, icon: 'person', value: 'Mid'},
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
        selectLevel(e) {
            if (e.target.nodeName === 'A')
                this.level = e.target.getAttribute('value');

            this.$refs.level.removeAttribute('open');
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