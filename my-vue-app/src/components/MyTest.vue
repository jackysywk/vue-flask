<template>
  <div>
    <h1>API Data</h1>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name:'MyTest',
  data() {
    return {
      items: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get('http://localhost:5000')
        .then(response => {
          this.items = response.data;
          console.log(response.data)
        })
        .catch(error => {
          console.error("There was an error fetching the data:", error);
        });
    }
  }
}
</script>