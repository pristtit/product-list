<template>
  <div class="create-product">
    <h1 class="title-main">Добавление товара</h1>
    <div class="post-form">

        <h6 class="title-value">Наименование товара*</h6>
        <base-input
            v-model="product.name"
            placeholder="Введите наименование товара"
            :class="{ 'input-valid': !isNameValid }"
        />
        <base-error
            :isValid="isNameValid"
            class="base-error_position"
        />
        
        <h6 class="title-value">Описание товара</h6>
        <textarea
            class="description"
            v-model="product.description"
            placeholder="Введите описание товара"    
        ></textarea>

        <h6 class="title-value">Ссылка на изображение товара*</h6>
        <base-input
            v-model="product.srcImg"
            placeholder="Введите ссылку"
            :class="{ 'input-valid': !isSrcImgValid }"
        />
        <base-error
            :isValid="isSrcImgValid"
            class="base-error_position"
        />

        <h6 class="title-value">Цена товара</h6>
        <base-input
            v-model="costMask"
            placeholder="Введите цену"
            :class="{ 'input-valid': !isCostValid }"
        />
        <base-error
            :isValid="isCostValid"
            class="base-error_position"
        />

        <base-button class="btn_position" @click="validAndCreateProduct">Добавить товар</base-button>
    </div>
  </div>
</template>

<script>
import useProducts from '@/hooks/useProductList'
import { costValidation, nameValidation, srcImgValidation } from '@/hooks/useValidation';
import { ref } from '@vue/reactivity';


export default {
    setup() {
         let {product, createProduct, costMask} = useProducts();
         let isNameValid = ref(true);
         let isCostValid = ref(true);
         let isSrcImgValid = ref(true);

         return {
            product,
            createProduct,
            costMask,
            isNameValid,
            isCostValid,
            isSrcImgValid
        }
    },

    methods: {
        validAndCreateProduct() {
            (this.isNameValid = nameValidation(this.product.name)) &&
            (this.isSrcImgValid = srcImgValidation(this.product.srcImg)) &&
            (this.isCostValid = costValidation(this.product.cost)) &&

            this.createProduct.call(this)
        }
    }
}
</script>

<style scoped>
.create-product {
    position:  fixed;
    left: 32px;
    top: 32px;
    padding: 0px;

    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.title-value {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 13px;
    margin: 0;

    letter-spacing: -0.02em;

    color: #49485E;
}
.title-main {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
    margin: 8px 0;

    color: #3F3F3F;
}

.post-form {
    width: 332px;
    height: 440px;
    padding: 24px;
    box-sizing: border-box;

    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
}

.btn_position {
    margin-top: 8px;
}

.description {
    width: 284px;
    height: 108px;

    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    resize: none;
    margin: 4px 0 16px 0;
    padding: 10px 0 0 16px;
    box-sizing: border-box;
    outline: none;
    border: none;
}

.description::placeholder {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    transform: translateY(1px);

    text-align: left;

    color: #B4B4B4;
}

.input-valid {
    border: 1px solid #FF8484;
}

.base-error_position {
    position: relative;
    height: 0;
    top: -12px;
}
</style>