<template>
  <router-link class="btn btn-warning mb-3" to="/">Home</router-link>
  <div v-if="isLoading" class="text-center">
    <div class="spinner-grow text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div v-else-if="product" class="card">
    <img :src="product.image" class="card-img-top" :alt="product.title" />
    <div class="card-body">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-text">
        {{ product.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "page-product",
  data: () => ({
    product: null,
  }),
  async mounted() {
    const productId = this.$route.params.id;
    const product = await this.$store.dispatch("fetchProductById", productId);
    this.product = product;
  },
};
</script>

<style scoped>
.card-img-top {
  width: 286px;
}
</style>
