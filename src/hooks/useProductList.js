import {ref, computed, onBeforeMount} from 'vue'

export default function useProductList() {
    const sortOptions = ref(
        {value: 'name', name: 'По названию'},
        {value: 'minCost', name: 'По стоимости (уменьшение)'},
        {value: 'maxCost', name: 'По стоимости (возростание)'},
    );
    let selectedSort = ref('name');
    let productList = ref(JSON.parse(localStorage.getItem('productList')));

    const createProduct = function(product) {
        productList.value.push(product);
        localStorage.setItem('productList', JSON.stringify(productList.value));
    };
    const removeProduct = function(product) {
        productList.value = productList.value.filter(p => p.id !== product.id);
        localStorage.setItem('productList', JSON.stringify(productList.value));
    };

    let sortProductList = computed(() => {
        let products = [];
        switch (selectedSort.value) {
            case 'name':
                products = [...productList.value].sort((product1, product2) => {
                    return product1[selectedSort.value]?.localeCompare(product2[selectedSort.value])
                })
                break;

            case 'minCost':
                products = [...productList.value].sort((product1, product2) => {
                    return product1.cost - product2.cost
                })
                break;
        
            case 'maxCost':
                products = [...productList.value].sort((product1, product2) => {
                    return product2.cost - product1.cost
                })
                break;
        
            default:
                break;
        }
        return products
    });

    onBeforeMount(() => {
        if (!localStorage.getItem('productList')) {
            localStorage.setItem('productList', JSON.stringify([]))
        }
    })

    return {
        sortOptions,
        selectedSort,
        createProduct,
        removeProduct,
        sortProductList,
    }
}
