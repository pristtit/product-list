<template>
    <input
        :value="modelValue"
        @input="updateInput"
        class="base-input_dimensions base-input_content-position base-input_appearance"
        type="text"
    >
</template>

<script>
export default {
  name: 'base-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.base-input_dimensions {
    width: 284px;
    height: 36px;
}

.base-input_content-position {
    padding: 0 0 0 16px;
    margin: 4px 0 16px 0;
}

.base-input_appearance {
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    box-sizing: border-box;
    border: none;
    outline:none;
}

input::placeholder {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-align: left;
    color: #B4B4B4;
}
</style>
