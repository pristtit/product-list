import {ref, computed} from 'vue'

export default function useProducts() {
    const product = ref({
        id: null,
        name: '',
        description: '',
        srcImg: '',
        cost: '',
    });

    const createProduct = function() {
        product.value.id = Date.now();
        this.$emit('createProduct', product.value)
        product.value = {
            id: null,
            name: '',
            description: '',
            srcImg: '',
            cost: '',
        }
    };

    const costMask = computed({
        get() {
            return product.value.cost.toLocaleString('ru-RU')
        },
        set(value) {
            product.value.cost = +value.replace(/\s/g, "")
        },
    });

    return {product, createProduct, costMask}
}
