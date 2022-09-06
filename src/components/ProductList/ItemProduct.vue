<template>
    <div class="product">
        <div class="product__delete_position">
            <div class="product__delete">
                <img class="product__img-delete" @click="$emit('remove', product)" src="@/assets/delete.png">
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
    /* flex-grow: 1; */
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    cursor: pointer;
}

.product__img {
    height: 200px;
    width: 100%;
    object-fit:cover;
}

.product__name {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    height: 25px;
    line-height: 25px;
    color: #3F3F3F;
    margin: 16px 16px 0 16px;
    overflow-wrap: break-word;
    overflow: hidden
}

.product__delete {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;

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
.product__img-delete {
    height: 16px;
}
.product__description {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #3F3F3F;
    margin: 16px 0 0 16px;
    height: 80px;
    overflow-wrap: break-word;
    overflow: hidden
}

.product__cost {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: #3F3F3F;
    margin: 32px 0 24px 16px;
    overflow-wrap: break-word;
    overflow: hidden
}
</style>
