<template>
    <div class="product">
        <img class="img" :src="product.srcImg">
        <h3>{{ product.name }}</h3>
        <h4>{{ product.description }}</h4>
        <h4>{{ product.cost }}</h4>
    </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post__btns {
  display: flex;
}
.img {
    width: 50px;
}
</style>
