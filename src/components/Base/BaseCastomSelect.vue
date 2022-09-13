<template>
    <div class="selectCastom">
        <div
            @mousedown="isShow = !isShow"
            class="
                selectCastom__wrapper
                unselectable
            "
        >
            <div class="selectCastom__text">{{ curentOption.name }}</div>
            <div class="
                selectCastom__arrow
                selectCastom__arrow_position
            "></div>
        </div>
        <div v-show="isShow" class="
            selectCastom__window
            selectCastom__window_position
        ">
            <div
                v-for="option in options"
                :key="option.value"
                @mousedown.stop="showOptions(option)"
                class="selectCastom__item"
            >
                {{ option.name }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'base-castom-select',

    props: {
        options: {
            type: Array,
            default: () => []
        }
    },

    data() {
        return {
            curentOption: {value: 'name', name: 'По умолчанию'},
            isShow: false,
        }
    },

    methods: {
        showOptions(option) {
            this.curentOption = option;
            this.isShow = false;
            this.$emit('update:curentOption', option.value);
        }
    }
}
</script>

<style>
.selectCastom {
    height: 36px;
    width: 121.49px;

    margin-bottom: 16px;
    cursor: pointer;

    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #B4B4B4;
}

.selectCastom__wrapper {
    height: 36px;
    color: #B4B4B4;

    display: flex;
    align-items: center;
    padding-left: 16px;

    box-sizing: border-box;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
}

.unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.selectCastom__text {
    max-width: 78px;
}

.selectCastom__arrow {
    width: 4.59px;
    height: 4.59px;

    box-sizing: border-box;
    border: 1px solid #B4B4B4;
    transform: rotate(45deg);
    border-top-style: none;
    border-left-style: none;
}

.selectCastom__arrow_position {
    position: relative;
    left: 5px;
    top: -2px;
}

.selectCastom__window {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    background: #FFFEFB;
}

.selectCastom__window_position {
    position: relative;
    top: 5px;
    z-index: 100;
}

.selectCastom__item {
    padding-left: 16px;
}

.selectCastom__item:hover {
    background: #57624c;
    background-clip: padding-box;
}
</style>