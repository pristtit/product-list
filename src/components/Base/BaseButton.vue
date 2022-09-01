<template>
  <button class="base-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'base-button'
}
</script>

<style scoped>
.base-button {
    width: 284px;
    height: 36px;
    background: #EEEEEE;
    border-radius: 10px;
    border: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;

    text-align: center;
    letter-spacing: -0.02em;

    color: #B4B4B4;
}
</style>
