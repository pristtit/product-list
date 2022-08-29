<template>
    <div class="products-page">
        <create-product @createProduct="createProduct"/>
        <div class="main">
            <base-select
                v-model="selectedSort"
                :options="sortOptions"
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
                {value: 'minCost', name: 'По стоимости(уменьшение)'},
                {value: 'maxCost', name: 'По стоимости(возростание)'},
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
}
</style>