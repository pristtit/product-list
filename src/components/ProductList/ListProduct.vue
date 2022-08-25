<template>
  <div class="product-list" v-if="productList.length > 0">
    <transition-group name="user-list">
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
.user-list-item {
  display: inline-block;
  margin-right: 10px;
}
.user-list-enter-active,
.user-list-leave-active {
  transition: all 0.4s ease;
}
.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.user-list-move {
  transition: transform 0.4s ease;
}
.product-list {
    display: flex;
    flex-wrap: wrap;
}
</style>
