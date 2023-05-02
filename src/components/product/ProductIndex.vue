<template lang="">
    <div>
        <h3 class="text-center text-primary mt-5">Product List</h3>
    </div>
    <div class="container">
    <button class="btn btn-primary">
    <router-link to="/create">Create Product</router-link>
    </button>
    </div>
    <div class="container mt-5">
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product Image</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items" :key="item.id">
                        <td>{{ item.id }}</td>
                        <td>{{ item.product_name }}</td>
                        <td>{{ item.product_description }}</td>
                        <td>{{ item.product_description }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
</template>
<script>
import axios from 'axios';
const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api' // Update this to the base URL of your API
});
export default {
  data() {
    return {
      items: []
    };
  },
  created() {
    apiClient.get('/product/index')
      .then(response => {
          this.items = response.data.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};

</script>