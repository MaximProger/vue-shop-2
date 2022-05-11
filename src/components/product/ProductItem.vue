<template>
  <div class="col">
    <div class="card">
      <img :src="product.image" class="card-img-top" :alt="product.title" />
      <div class="card-body">
        <h5 class="card-title">{{ truncate(product.title, 20) }}</h5>
        <p class="card-text">
          {{ truncate(product.description, 50) }}
        </p>
        <button
          @click="$router.push(`/product/${product.id}`)"
          class="btn btn-success mx-2"
        >
          View
        </button>
        <button
          href="#"
          class="btn btn-primary"
          @click.prevent="$emit('remove', product.id)"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-item",
  props: {
    product: Object,
  },
  methods: {
    truncate(str, maxlength) {
      return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
    },
  },
};
</script>

<style scoped>
.card-img-top {
  width: 100%;
  height: 286px;
  object-fit: contain;
}
</style>
