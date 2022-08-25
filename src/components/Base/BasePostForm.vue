<template>
    <div>
        <base-input
            v-model="post.title"
            :class="inputClass"
            :placeholder="inputPlaceholder"
        />

        <textarea
            v-model="post.body"
            :class="textareaClass"
            :cols="cols"
            :rows="rows"
            :placeholder="textareaPlaceholder"
        >
        </textarea>

        <base-button
            @click="createPost"
            :class="buttonClass"
        >
            {{ ButtonText }}
        </base-button>

    </div>
</template>

<script>
export default {
    name: 'base-post-form',
    props: {
        inputClass: {
            type: String,
            default: '',
        },
        inputPlaceholder: {
            type: String,
            default: '',
        },
        textareaClass: {
            type: String,
            default: '',
        },
        cols: {
            type: [String, Number],
            default: '',
        },
        rows: {
            type: [String, Number],
            default: '',
        },
        textareaPlaceholder: {
            type: String,
            default: '',
        },
        buttonClass: {
            type: String,
            default: '',
        },
        ButtonText: {
            type: String,
            default: 'Отправить',
        },
    },

    data() {
        return {
            post: {
                title: '',
                body: '',
            }
        }
    },

    methods: {
    createPost() {
      this.$emit('createPost', this.post)
      this.post = {
        title: '',
        body: '',
      }
    }
  },
}

</script>

<style>

</style>