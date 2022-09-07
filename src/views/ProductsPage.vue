<template>
    <CreateProduct class="create-product" @createProduct="createProduct" />
    <div class="main">
        <base-castom-select
            v-model:curentOption.value="selectedSort"
            :options="sortOptions"
            class="base-castom-select"
        />
        <ListProduct
            :productList="sortProductList"
            @remove="removeProduct"
         />
    </div>
</template>

<script setup>
import CreateProduct from '@/components/ProductList/CreateProduct.vue'
import ListProduct from '@/components/ProductList/ListProduct.vue'
import useProductList from '@/hooks/useProductList'

let {
    sortOptions,
    selectedSort,
    createProduct,
    removeProduct,
    sortProductList,
} = useProductList();
</script>

<style scoped>

.main {
    display: flex;
    position: absolute;
    left: 380px;
    width: 1028px;
    flex-direction: column;
    padding: 32px 32px 0 0;
}

.base-castom-select {
    align-self: flex-end;
}

.create-product {
    position:  fixed;
    left: 32px;
    top: 32px;
    padding: 0px;
}
</style>