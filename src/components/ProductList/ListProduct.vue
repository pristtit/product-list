<template>
  <div class="product-list" v-if="productList.length > 0">
    <transition-group name="animation-list">
      <item-product
        v-for="product in productList"
        :product="product"
        :key="product.id"
        @remove="$emit('remove', product)"
      />
    </transition-group>
  </div>
  <h2 v-else>
    Список пуст
  </h2>
</template>

<script>
import ItemProduct from "@/components/ProductList/ItemProduct.vue";
export default {
  components: {ItemProduct},
  props: {
    productList: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.animation-list-item {
  margin-right: 10px;
}
.animation-list-enter-active,
.animation-list-leave-active {
  transition: all 0.4s ease;
}
.animation-list-enter-from,
.animation-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.animation-list-move {
  transition: transform 0.4s ease;
}
.product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
}
</style>
