<template>
  <div class="product-list">
    <h1 class="mb-4">List of products</h1>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <product-item
        v-for="product in products"
        :key="product.id"
        :product="product"
        @remove="$emit('remove', product.id)"
      ></product-item>
    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/product/ProductItem.vue";
export default {
  components: {
    ProductItem,
  },
  name: "product-list",
  props: {
    products: Array,
  },
};
</script>

<style></style>
