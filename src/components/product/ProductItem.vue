<template>
  <div class="col">
    <div class="card" style="width: 18rem">
      <img :src="product.image" class="card-img-top" :alt="product.title" />
      <div class="card-body">
        <h5 class="card-title">{{ truncate(product.title, 20) }}</h5>
        <p class="card-text">
          {{ truncate(product.description, 50) }}
        </p>
        <a
          href="#"
          class="btn btn-primary"
          @click.prevent="$emit('remove', product.id)"
          >Delete</a
        >
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
  width: 286px;
  height: 286px;
  object-fit: contain;
}
</style>
