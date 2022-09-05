<template>
  <div class="create-product">
    <h1 class="title-main">Добавление товара</h1>
    <div class="post-form">

        <h6 class="title-value">Наименование товара*</h6>
        <base-input
            v-model="product.name"
            placeholder="Введите наименование товара"
            :class="{ 'input-valid': !isNameValid }"
            @blur="isNameValid.call(this, $event)"
        />
        <base-error
            :isValid="!showNameValid"
            class="base-error_position"
        >{{ typeNameValid }}</base-error>
        
        <h6 class="title-value">Описание товара</h6>
        <textarea
            class="description"
            v-model="product.description"
            placeholder="Введите описание товара"  
            @blur="isDescriptionValid.call(this, $event)"  
        ></textarea>
        <base-error
            :isValid="!showDescriptionValid"
            class="base-error_position"
        >{{ typeDescriptionValid }}</base-error>

        <h6 class="title-value">Ссылка на изображение товара*</h6>
        <base-input
            v-model="product.srcImg"
            placeholder="Введите ссылку"
            :class="{ 'input-valid': !isSrcImgValid }"
            @blur="isSrcImgValid.call(this, $event)"
        />
        <base-error
            :isValid="!showSrcImgValid"
            class="base-error_position"
        >{{ typeSrcImgValid }}</base-error>

        <h6 class="title-value">Цена товара</h6>
        <base-input
            v-model="costMask"
            placeholder="Введите цену"
            :class="{ 'input-valid': !isCostValid }"
            @blur="isCostValid.call(this, $event)"
        />
        <base-error
            :isValid="!showCostValid"
            class="base-error_position"
        >{{ typeCostValid }}</base-error>

        <base-button
            @click="validAndCreateProduct.call(this)"
            class="btn_position"
            :class="{ activeBtn: isFormValid }"
        >Добавить товар</base-button>
    </div>
  </div>
</template>

<script setup>
import useProducts from '@/hooks/useProduct'
import useProductValid from '@/hooks/useValidation'

let {product, createProduct, costMask} = useProducts();
let {
    typeNameValid,
    typeDescriptionValid,
    typeCostValid,
    typeSrcImgValid,
    isFormValid,
    showNameValid,
    showDescriptionValid,
    showCostValid,
    showSrcImgValid,
    isNameValid,
    isDescriptionValid,
    isSrcImgValid,
    isCostValid,
} = useProductValid();

const validAndCreateProduct = function() {
    isFormValid && createProduct.call(this)
    typeNameValid = true;
    typeDescriptionValid = true;
    typeSrcImgValid = true;
    typeCostValid = true;
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

.activeBtn {
    background: green;
}
</style>