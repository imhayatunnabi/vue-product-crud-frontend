<template lang="">
    <div>
        <h3 class="text-center text-primary mt-5">Product create</h3>
    </div>
    <div class="container">
        <form @submit.prevent="submitForm">
    <div class="mb-3">
      <label for="product_name" class="form-label">Product Name</label>
      <input type="text" class="form-control" id="product_name" v-model="product_name">
            <span v-if="errors.product_name" class="error">{{ errors.product_name[0] }}</span>
    </div>
    <div class="mb-3">
      <label for="product_description" class="form-label">Product Description</label>
      <input type="text" class="form-control" id="product_description" v-model="product_description">
      <span v-if="errors.product_description" class="error">{{ errors.product_description[0] }}</span>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
    </div>
</template>
<script>
import axios from '../../../axios.js';
export default {
  data() {
    return {
      product_name: '',
      product_description: '',
      errors: {},
    }
  },
  methods: {
    submitForm() {
      axios.post('/product/product-submit', {
        product_name: this.product_name,
        product_description: this.product_description
      })
      .then(response => {
          console.log(response.data);
                  this.$router.push({ name: 'Home' });
      })
        .catch(error => {
        this.errors = error.response.data.errors
        console.log(this.errors);
      });
    }
  }
}
</script>
<style scoped>
.error {
  color: red;
  margin-top: 10px;
}
</style>