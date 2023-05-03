<template lang="">
    <div>
        <h3 class="text-center text-primary mt-5">Product List</h3>
    </div>
    <div class="container">
    <router-link to="/product/create" class="btn btn-primary">Create Product</router-link>
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
                        <td>
                        <router-link :to="{ name: 'ProductEdit', params: { id: item.id } }" class="btn btn-primary">
                          Edit
                        </router-link>
                        <button type="button" class="btn btn-danger" @click="deleteProduct(item.id)">
                        Delete
                        </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
</template>
<script>


import axios from 'axios';
const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api'
});
export default {
  data() {
    return {
      items: []
    };
  },methods: {
    deleteProduct(id) {
      axios.get(`http://127.0.0.1:8000/api/product/delete/${id}`).then((result) => {
        this.items = this.items.filter(item => item.id !== id)
        console.log(result);
      }).catch((err) => {
        console.log(err);
      });
      console.log(id);
    }
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