<template>
    <div class="product">
        <div class="product__delete_position">
            <div class="product__delete">
                <img
                    class="product__delete-img"
                    @click="$emit('remove', product)"
                    src="@/assets/delete.png"
                >
            </div>
        </div>
        <img class="product__img" :src="product.srcImg">
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
    display: flex;
    flex-direction: column;

    width: 332px;
    height: 423px;

    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    cursor: pointer;

    font-family: 'Source Sans Pro';
    font-style: normal;
    color: #3F3F3F;
    overflow-wrap: break-word;
}

.product__img {
    height: 200px;
    width: 100%;
    object-fit:cover;
}

.product__delete {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 32px;
    height: 32px;

    background: #FF8484;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}
.product__delete_position {
    height: 0;
    align-self: flex-end;
    position: relative;
    top: -8px;
    right: -8px;
}
.product__delete-img {
    height: 16px;
}

.product__name {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    
    margin: 16px 16px 0 16px;
    height: 25px;
}

.product__description {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    margin: 16px 16px 0 16px;
    height: 80px;
}

.product__cost {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;

    margin: 32px 0 24px 16px;
}
</style>
