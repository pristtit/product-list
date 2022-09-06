<template>
  <button class="base-button_content base-button_appearance base-button_dimensions">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'base-button'
}
</script>

<style scoped>
.base-button_content {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #B4B4B4;
}

.base-button_appearance {
    background: #EEEEEE;
    border-radius: 10px;
    border: none;
}

.base-button_dimensions {
    width: 284px;
    height: 36px;
}
</style>
