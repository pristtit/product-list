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
            v-model="product.cost"
            placeholder="Введите цену"
        />
        <h6>Поле является обязательным</h6>

        <base-button @click="createProduct">Добавить товар</base-button>
    </div>
  </div>
</template>

<script>
export default {
    props: {
    },

    data() {
        return {
            product: {
                name: '',
                description: '',
                srcImg: '',
                cost: '',
            }
        }
    },

    methods: {
        createProduct() {
            this.$emit('createProduct', this.product)
            this.product = {
                name: '',
                description: '',
                srcImg: '',
                cost: '',
            }
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