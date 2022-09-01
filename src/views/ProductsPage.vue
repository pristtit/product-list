<template>
    <div class="products-page">
        <create-product class="create-product_geom" @createProduct="createProduct"/>
        <div class="main">
            <base-select
                v-model="selectedSort"
                :options="sortOptions"
                class="base-select"
            />
            <list-product
                :productList="sortProductList"
                @remove="removeProduct"
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
                {value: 'minCost', name: 'По стоимости (уменьшение)'},
                {value: 'maxCost', name: 'По стоимости (возростание)'},
            ],
            selectedSort: 'name',
            productList: JSON.parse(localStorage.getItem('productList')),
        }
    },

    methods: {
        createProduct(product) {
            product.id = Date.now();
            this.productList.push(product);
            localStorage.setItem('productList', JSON.stringify(this.productList ));
        },
        removeProduct(product) {
            this.productList = this.productList.filter(p => p.id !== product.id);
            localStorage.setItem('productList', JSON.stringify(this.productList ));
        }
    },

    computed: {
        sortProductList() {
            let products = [];
            switch (this.selectedSort) {
                case 'name':
                    products = [...this.productList].sort((product1, product2) => {
                        return product1[this.selectedSort]?.localeCompare(product2[this.selectedSort])
                    })
                    break;

                case 'minCost':
                    products = [...this.productList].sort((product1, product2) => {
                        return product1.cost - product2.cost
                    })
                    break;
            
                case 'maxCost':
                    products = [...this.productList].sort((product1, product2) => {
                        return product2.cost - product1.cost
                    })
                    break;
            
                default:
                    break;
            }
            return products
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
    justify-content: end;
    background: rgba(255, 254, 251, 0.8);
    padding: 32px;
}

.main {
    display: flex;
    position: absolute;
    left: 380px;
    flex-direction: column;
    align-items: flex-end;
}

.base-select {
    width: 121.49px;
    height: 36px;
    border:none;
    margin-bottom: 8px;
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #B4B4B4;
    padding-left: 10px;
    outline: none;
    /* background: #FFFEFB; */
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    box-sizing: border-box;
    appearance: none;
    background: url('@/assets/down-arrow.png') no-repeat right;
    background-size: 7px;
    background-position-x: calc(100% - 15.5px);
}
.base-select option {
}
</style>