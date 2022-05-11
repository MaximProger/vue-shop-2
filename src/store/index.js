import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    products: [],
    isLoading: false,
    // showDialog: false
  },
  getters: {},
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setLoading(state, bool) {
      state.isLoading = bool;
    },
    removeProduct(state, id) {
      state.products = state.products.filter((product) => product.id !== id);
    },
    addProduct(state, product) {
      state.products.push(product);
      // this.show = false;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        commit("setLoading", true);
        const res = await axios.get(
          "https://fakestoreapi.com/products?limit=6"
        );
        commit("setProducts", res.data);
      } catch (error) {
        console.error(error);
      } finally {
        commit("setLoading", false);
      }
    },
    async fetchProductById({ commit }, id) {
      try {
        commit("setLoading", true);
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        return res.data;
      } catch (error) {
        console.error(error);
      } finally {
        commit("setLoading", false);
      }
    },
    deleteProductById({ commit }, id) {
      commit("removeProduct", id);
    },
    addProductByForm({ commit }, product) {
      commit("addProduct", product);
    },
  },
  modules: {},
});
