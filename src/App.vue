<template>
  <div class="container">
    <button type="button" class="btn btn-primary mb-3">Add product</button>
    <div v-if="isLoading" class="text-center">
      <div class="spinner-grow text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <product-list
      v-else-if="products.length"
      :products="products"
      @remove="removeProduct"
    ></product-list>
    <h1 v-else>Products list is empty</h1>
  </div>
</template>

<script>
import ProductList from "@/components/product/ProductList.vue";
import axios from "axios";
export default {
  components: {
    ProductList,
  },
  data: () => {
    return {
      products: [],
      isLoading: true,
    };
  },
  methods: {
    async fetchProducts() {
      try {
        const res = await axios.get(
          "https://fakestoreapi.com/products?limit=6"
        );
        this.products = res.data;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    removeProduct(id) {
      this.products = this.products.filter((product) => product.id !== id);
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

<style></style>
