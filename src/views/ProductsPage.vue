<template>
    <div class="products-page">
        <create-product @createProduct="createProduct"/>
        <div class="main">
            <base-select
                v-model="selectedSort"
                :options="sortOptions"
            />
            <list-product
                :productList="productList"
            />
        </div>
    </div>
</template>

<script>
import CreateProduct from '@/components/ProductList/CreateProduct.vue'
import ListProduct from '@/components/ProductList/ListProduct.vue'
export default {
  components: { CreateProduct, ListProduct },
    data() {
        return {
            sortOptions: [
                {value: 'name', name: 'По названию'},
                {value: 'minCost', name: 'По стоимости'},
            ],
            selectedSort: 'name',
            productList: JSON.parse(localStorage.getItem('productList')),
        }
    },

    methods: {
        createProduct(product) {
            this.productList.push(product);
            localStorage.setItem('productList', JSON.stringify(this.productList ))
        }
    },
    created() {
        if (!localStorage.getItem('productList')) {
            localStorage.setItem('productList', JSON.stringify([]))
        }
    }
}
</script>

<style scoped>
.products-page {
    display: flex;
}
</style>