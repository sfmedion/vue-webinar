<template>
    <aside>
        <details role="list" ref='selector'>
            <summary :selected="!!option" aria-haspopup="listbox">
                {{ !!option ? option : placeholder }}
            </summary>
            <ul role="listbox" @click="selectOption">
                <li v-for="entity in data" :key="entity.key">
                    <a :value="entity.value">{{ entity.value }}</a>
                </li>
            </ul>
        </details>
    </aside>
</template>
<script>
export default {
    model: {
        prop: 'option',
        event: 'changed'
    },
    props: ['option', 'data', 'placeholder'],
    methods: {
        selectOption(e) {
            if (e.target.nodeName === 'A')
                this.$emit('changed', e.target.getAttribute('value'));

            this.$refs.selector.removeAttribute('open');
        },
    }
}
</script>