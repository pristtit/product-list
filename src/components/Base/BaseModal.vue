<template>
<Teleport to='body'>
    <div
        v-show="show" 
        class="base-modal"
    >
        <div class="base-modal__window base-modal__window_center">
            <img
                @click="hideModal"
                class="base-modal__exit"
                src="@/assets/x.png"
            >
            <slot></slot>
        </div>
    </div>
</Teleport>
</template>

<script>
export default {
    name: 'base-modal',

    props: {
        show: {
            type: Boolean,
            default: false,
        }
    },

    methods: {
        hideModal() {
            this.$emit('update:show', false)
        }
    },
}
</script>

<style scoped>
.base-modal {
    z-index: 10;
    position: fixed;
    display: flex;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
}

.base-modal__window {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: white;
}

.base-modal__window_center {
    margin: auto;
}

.base-modal__exit {
  align-self: flex-end;
  margin: 10px;
  width: 20px;
}
</style>