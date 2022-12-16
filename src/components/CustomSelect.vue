<template>
    <aside>
        <details role="list" ref='selector'>
            <summary :selected="!!option" aria-haspopup="listbox">
                <span v-if="!!option">{{ option }}</span>
                <slot name="placeholder" v-else>
                    Please choose
                </slot>
            </summary>
            <ul role="listbox" @click="selectOption">
                <slot :translatedData="translatedData">
                    <li v-for="entity in translatedData" :key="entity.key">
                        <slot name="item" :item="entity">
                            <a :value="entity.value">{{ entity.value }}</a>
                        </slot>
                    </li>
                </slot>
            </ul>
        </details>
    </aside>
</template>
<script>

import Translate from '../helpers/translate';

export default {
    model: {
        prop: 'option',
        event: 'changed'
    },
    props: ['option', 'data', 'lang_from', 'lang_to'],
    methods: {
        selectOption(e) {
            if (e.target.nodeName === 'A')
                this.$emit('changed', e.target.getAttribute('value'));

            this.$refs.selector.removeAttribute('open');
        },
    },
    asyncComputed: {
        translatedData() {
            return !!this.lang_to ? Translate(this.lang_to, this.lang_from ?? 'en', this.data) : this.data;
        }
    },
}
</script>