<template>
    <h6
        v-show="!isValid"
        class="valid-error"
    >
    <slot>Поле является обязательным</slot>
    </h6>
</template>

<script>

export default {
    name: 'base-error',
    props: {
        isValid: Boolean,
    }
}
</script>

<style scoped>
.valid-error {
    margin: 0;

    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;

    letter-spacing: -0.02em;

    color: #FF8484;
}
</style>