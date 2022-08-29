<template>
  <div class="create-product">
    <h2>Добавление товара</h2>
    <div class="post-form">
        <h6>Наименование товара*</h6>
        <base-input
            v-model="product.name"
            placeholder="Введите наименование товара"
        />
        <h6>Поле является обязательным</h6>
        
        <h6>Описание товара</h6>
        <textarea
            v-model="product.description"
            placeholder="Введите описание товара"    
        ></textarea>

        <h6>Ссылка на изображение товара*</h6>
        <base-input
            v-model="product.srcImg"
            placeholder="Введите ссылку"
        />
        <h6>Поле является обязательным</h6>

        <h6>Цена товара</h6>
        <base-input
            v-model="costMask"
            placeholder="Введите цену"
        />
        <h6>Поле является обязательным</h6>

        <base-button @click="validAndCreateProduct">Добавить товар</base-button>
    </div>
  </div>
</template>

<script>
import useProducts from '@/hooks/useProductList'
import { costValidation, nameValidation, srcImgValidation } from '@/hooks/useValidation';


export default {
    setup() {
         const {product, createProduct, costMask} = useProducts();
         
         return {product,createProduct, costMask}
    },

    methods: {
        validAndCreateProduct() {
            (   
                srcImgValidation(this.product.srcImg) &&
                nameValidation(this.product.name) &&
                costValidation(this.product.cost) &&

                this.createProduct.call(this)
            )
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
</style>