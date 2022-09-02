<template>
    <div>
        <slot></slot>
        <base-input
            v-model="authInfo.login"
            :class="inputClass"
            :placeholder="inputPlaceholderLogin"
        />
        <base-input
            v-model="authInfo.password"
            :class="inputClass"
            :placeholder="inputPlaceholderPassword"
        />

        <base-button
            @click="createLogin"
            :class="buttonClass"
        >
            {{ buttonText }}
        </base-button>

    </div>
</template>

<script>
export default {
    name: 'base-login',
    props: {
        inputClass: {
            type: String,
            default: '',
        },
        inputPlaceholderLogin: {
            type: String,
            default: '',
        },
        inputPlaceholderPassword: {
            type: String,
            default: '',
        },
        buttonClass: {
            type: String,
            default: '',
        },
        buttonText: {
            type: String,
            default: 'Отправить',
        },
    },

    data() {
        return {
            authInfo: {
                login: '',
                password: '',
            }
        }
    },

    methods: {
        createLogin() {
            this.$emit('createLogin', this.authInfo)
            this.authInfo = {
                login: '',
                password: '',
            }
        }
    }
}

</script>

<style>

</style>