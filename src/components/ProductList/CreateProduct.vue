<template>
  <div class="create-product_content-position create-product_appearance">
    <h1 class="create-product__title">Добавление товара</h1>
    <div class="
        post-form_content-position
        post-form_dimensions
        post-form_appearance
    ">
        <h6 class="post-form__title">Наименование товара*</h6>
        <base-input
            v-model="product.name"
            placeholder="Введите наименование товара"
            :class="{ 'input-valid': !isNameValid }"
            @blur="isNameValid.call(this, $event)"
        />
        <base-error
            :isValid="!showNameValid"
            class="post-form__error_position"
        >{{ typeNameValid }}</base-error>
        
        <h6 class="post-form__title">Описание товара</h6>
        <textarea
            class="
                post-form__description
                post-form__description_content-position
                post-form__description_dimensions
                post-form__description_appearance
            "
            v-model="product.description"
            placeholder="Введите описание товара"  
            @blur="isDescriptionValid.call(this, $event)"  
        ></textarea>
        <base-error
            :isValid="!showDescriptionValid"
            class="post-form__error_position"
        >{{ typeDescriptionValid }}</base-error>

        <h6 class="post-form__title">Ссылка на изображение товара*</h6>
        <base-input
            v-model="product.srcImg"
            placeholder="Введите ссылку"
            :class="{ 'input-valid': !isSrcImgValid }"
            @blur="isSrcImgValid.call(this, $event)"
        />
        <base-error
            :isValid="!showSrcImgValid"
            class="post-form__error_position"
        >{{ typeSrcImgValid }}</base-error>

        <h6 class="post-form__title">Цена товара</h6>
        <base-input
            v-model="costMask"
            placeholder="Введите цену"
            :class="{ 'input-valid': !isCostValid }"
            @blur="isCostValid.call(this, $event)"
        />
        <base-error
            :isValid="!showCostValid"
            class="post-form__error_position"
        >{{ typeCostValid }}</base-error>

        <base-button
            @click="validAndCreateProduct.call(this)"
            class="post-form__btn_position"
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
    isFormValid && createProduct.call(this);
    typeNameValid = true;
    typeDescriptionValid = true;
    typeSrcImgValid = true;
    typeCostValid = true;
}

</script>

<style scoped>
.create-product_content-position {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.create-product_appearance {
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
}

.create-product__title {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
    color: #3F3F3F;

    margin: 8px 0;
}

.post-form_content-position {
    padding: 24px;
}

.post-form_dimensions {
    width: 332px;
    height: 440px;
}

.post-form_appearance {
    box-sizing: border-box;
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
}

.post-form__title {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: #49485E;
    margin: 0;
}

.post-form__description_content-position {
    margin: 4px 0 16px 0;
    padding: 10px 0 0 16px;
}

.post-form__description_dimensions {
    width: 284px;
    height: 108px;
    resize: none;
}

.post-form__description_appearance {
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    box-sizing: border-box;
    outline: none;
    border: none;
}

.post-form__description::placeholder {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #B4B4B4;
    text-align: left;
}

.post-form__btn_position {
    margin-top: 8px;
}

.post-form__error_position {
    position: relative;
    height: 0;
    top: -12px;
}

.input-valid {
    border: 1px solid #FF8484;
}

.activeBtn {
    background: green;
}
</style>