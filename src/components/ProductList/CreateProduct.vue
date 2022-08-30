<template>
  <div class="create-product">
    <h2>Добавление товара</h2>
    <div class="post-form">

        <h6 class="title-value">Наименование товара*</h6>
        <base-input
            v-model="product.name"
            placeholder="Введите наименование товара"
        />
        <base-error
            :isValid="isNameValid"
        />
        
        <h6 class="title-value">Описание товара</h6>
        <textarea
            v-model="product.description"
            placeholder="Введите описание товара"    
        ></textarea>

        <h6 class="title-value">Ссылка на изображение товара*</h6>
        <base-input
            v-model="product.srcImg"
            placeholder="Введите ссылку"
        />
        <base-error
            :isValid="isSrcImgValid"
        />

        <h6 class="title-value">Цена товара</h6>
        <base-input
            v-model="costMask"
            placeholder="Введите цену"
        />
        <base-error
            :isValid="isCostValid"
        />

        <base-button @click="validAndCreateProduct">Добавить товар</base-button>
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
    width: 332px;
    height: 440px;

    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.title-value {

}

.valid-error {

}
</style>