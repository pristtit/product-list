<template>
    <div class="product">
        <h4 @click="$emit('remove', product)">у</h4>
        <img class="img" :src="product.srcImg">
        <h4 class="product__name">{{ product.name }}</h4>
        <h4 class="product__description">{{ product.description }}</h4>
        <h4 class="product__cost">{{ product.cost + ' руб' }}</h4>
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
.product {
    width: 332px;
    height: 423px;
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    cursor: pointer;
}

.img {
    width: 332px;
    height: 200px;
}

.product__name {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #3F3F3F;
    margin: 16px 0 0 16px;
}

.product__description {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #3F3F3F;
    margin: 16px 0 0 16px;
}

.product__cost {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: #3F3F3F;
    margin: 32px 0 24px 16px;
}
</style>
