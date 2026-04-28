<template>
  <div class="car">
    <h2>{{ car.brand }} - ${{ car.price.toLocaleString() }}</h2>
    <button @click="changeprice">修改价格</button><br />
    <h2>品牌列表：</h2>
    <ul class="CarBrand" v-for="brand in carBrands" :key="brand.id">
      <li v-bind:key="brand.id">{{ brand.name }}</li>
    </ul>
    <button @click="changeBrand">修改品牌</button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
defineOptions({
  name: 'CarCopy',
})
let car = ref({ brand: 'Toyota', price: 30000 })

let carBrands = ref([
  { id: 1, name: 'Toyota' },
  { id: 2, name: 'Honda' },
  { id: 3, name: 'Ford' },
])

function changeprice() {
  car.value.price += 5000
  console.log(car.value.price)
}

function changeBrand() {
  car.value[0].brand = 'Honda'
  console.log(car.value.brand)
}
</script>

<style scoped>
.car {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 1 10px;
  padding: 20px;
}
.carBrand {
  font-size: 20px;
}
</style>
