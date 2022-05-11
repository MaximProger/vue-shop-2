<template>
  <div
    v-if="show"
    class="product-dialog product-dialog--active modal"
    tabindex="-1"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add product</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="$emit('close')"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submitFormHandler">
            <div class="mb-3">
              <label for="title" class="form-label">Title</label>
              <input
                v-model="product.title"
                type="text"
                class="form-control"
                id="title"
                required
              />
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">Description</label>
              <textarea
                v-model="product.description"
                class="form-control"
                name="description"
                id="description"
                required
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="image" class="form-label">Image</label>
              <input
                @change="onFileChange"
                type="file"
                class="form-control"
                id="image"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-dialog",
  props: {
    show: Boolean,
  },
  data: () => {
    return {
      product: {
        id: Date.now(),
        title: "",
        description: "",
        image: "",
      },
    };
  },
  methods: {
    onFileChange(evt) {
      var files = evt.target.files || evt.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      const image = new Image();
      const reader = new FileReader();
      const vm = this;

      reader.onload = (evt) => {
        vm.product.image = evt.target.result;
      };
      reader.readAsDataURL(file);
    },
    submitFormHandler() {
      const product = { ...this.product };
      this.$emit("add", product);
      this.$emit("show", false);
      this.product.title = "";
      this.product.description = "";
      this.product.image = "";
    },
  },
};
</script>

<style scoped>
.product-dialog--active {
  display: block;
}
</style>
