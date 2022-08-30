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
    
}
</style>