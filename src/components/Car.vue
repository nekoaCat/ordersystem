<template>
  <div class="car">
    <h2>一辆{{ car.brand }}汽车，价值{{ car.price }}万元</h2>
    <button @click="changePrice">修改价格</button>
  </div>
</template>
<script setup>
import { reactive } from "vue";
defineOptions({
  name: "CarVue",
});
let car = reactive({ brand: "红旗", price: 30 });
function changePrice() {
  car.price += 10; //每按一次修改价格按钮，价格加10
  // car.price=car.price+10;
  // console.log(car.price);
}
</script>
<style scoped>
.car {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
