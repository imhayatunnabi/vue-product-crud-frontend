<template lang="">
    <div>
        <h3 class="text-center text-primary mt-5">Product Edit</h3>
    </div>
    <div class="container">
        <form @submit.prevent="updateProduct">
    <div class="mb-3">
      <label for="product_name" class="form-label">Product Name</label>
      <input type="text" class="form-control" id="product_name" v-model="product.product_name">
    </div>
    <div class="mb-3">
      <label for="product_description" class="form-label">Product Description</label>
      <input type="text" class="form-control" id="product_description" v-model="product.product_description">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            product: {}
        }
    },
    mounted() {
        this.getProduct()
    },
    methods: {
        getProduct() {
            axios.get(`http://127.0.0.1:8000/api/product/show/${this.$route.params.id}`).then((result) => {
                this.product = result.data.data
                console.log(this.product);
            }).catch((err) => {
                console.log(err);
            });
        },updateProduct() {
            axios.put(`http://127.0.0.1:8000/api/product/update/${this.$route.params.id}`, this.product)
                .then((result) => {
                    console.log(result);
                    this.$router.push({ name: 'Home' });
                }).catch((err) => {
                    console.log(err);
                });
        }
    },
}
</script>