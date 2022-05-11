<template>
  <div class="container">
    <button type="button" class="btn btn-primary mb-3" @click="show = true">
      Add product
    </button>
    <product-dialog
      @add="addProductByForm"
      @close="show = false"
      @show="show = false"
      :show="show"
    ></product-dialog>
    <div v-if="isLoading" class="text-center">
      <div class="spinner-grow text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <product-list
      v-else-if="products.length"
      :products="products"
      @remove="deleteProductById"
    ></product-list>
    <h1 v-else>Products list is empty</h1>
  </div>
</template>

<script>
import ProductList from "@/components/product/ProductList.vue";
import ProductDialog from "@/components/product/ProductDialog.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  components: {
    ProductList,
    ProductDialog,
  },
  data: () => {
    return {
      show: false,
    };
  },
  methods: {
    ...mapActions(["fetchProducts", "deleteProductById", "addProductByForm"]),
    // addProduct(product) {
    //   this.products.push(product);
    //   this.show = false;
    // },
  },
  mounted() {
    this.fetchProducts();
  },
  computed: {
    ...mapState({
      products: (state) => state.products,
      isLoading: (state) => state.isLoading,
    }),
  },
};
</script>

<style></style>
