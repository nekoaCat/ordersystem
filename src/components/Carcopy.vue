<template>
  <div class="car">
    <h2>Carcopy单组件页面</h2>
    <h2>一辆{{ car.brand }}汽车，价值{{ car.price }}万元</h2>
    <button @click="changePrice">修改价格</button><br />
    <h2>品牌列表</h2>
    <ul class="carBrand">
      <li v-for="item in carBrands" :key="item.id">
        {{ item.brand }}
      </li>
    </ul>
    <button @click="changeBrand">修改品牌</button>
  </div>
</template>
<script setup>
import { ref } from "vue";
defineOptions({
  name: "CarCopy",
});
let car = ref({ brand: "红旗", price: 30 });
// 声明一个数组，存放三组汽车品牌信息
let carBrands = ref([
  { id: "01", brand: "吉利" },
  { id: "02", brand: "长城" },
  { id: "03", brand: "比亚迪" },
]);
//修改价格
function changePrice() {
  car.value.price += 10;
}
//修改品牌
function changeBrand() {
  // carBrands[0].brand='上汽';
  carBrands.value[0].brand = '上汽';
  // logsole.log(carBrands[0].brand);
}
</script>
<style scoped>
.car {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

.carBrand {
  font-size: 20px;
}
</style>
