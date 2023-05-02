<template lang="">
    <div>
        <h3 class="text-center text-primary mt-5">Product create</h3>
    </div>
    <div class="container">
        <form @submit.prevent="submitForm">
    <div class="mb-3">
      <label for="product_name" class="form-label">Product Name</label>
      <input type="text" class="form-control" id="product_name" v-model="product_name">
    </div>
    <div class="mb-3">
      <label for="product_description" class="form-label">Product Description</label>
      <input type="text" class="form-control" id="product_description" v-model="product_description">
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
      product_name: '',
      product_description: ''
    }
  },
  methods: {
    submitForm() {
      axios.post(`${process.env.url}/product/store`, {
        product_name: this.product_name,
        product_description: this.product_description
      })
      .then(response => {
          console.log(response.data);
                  this.$router.push({ name: 'ProductIndex' });
      })
      .catch(error => {
        console.log(error);
      });
    }
  }
}
</script>
