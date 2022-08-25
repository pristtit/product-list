<template>
  <div class="add-product"></div>
  <div class="main">
    <base-select
        v-model="selectedSort"
        :options="sortOptions"
    />
    <div class="main__product-list">
        
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            sortOptions: [
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По содержимому'},
            ],

        }
    }
}
</script>

<style scoped>

</style>