<template>
  <div class="car">
    <h2>{{ car.brand }} - ${{ car.price.toLocaleString() }}</h2>
    <button @click="changeprice">修改价格</button>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
defineOptions({
  name: 'CarVue',
})
let car = reactive({ brand: 'Toyota', price: 30000 })
function changeprice() {
  car.price += 5000
  console.log(car.price)
}
</script>

<style scoped>
.car {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 1 10px;
  padding: 20px;
}
</style>
