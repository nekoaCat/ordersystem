<template>
  <h2>当前求和</h2>
  <h3>{{ count }}</h3>
  <button @click="add">+1</button>
  <hr/>
  <img :src="dog" v-for="(dog,index) in dogList" :key="index"/>
  <br/>
  <button @click="addDog">再来一只</button>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue'
const count = ref(0)
let dogList = ref(['https://ygking.top/img/cover.jpg'])
let add = () => {
  count.value += 1;
}
async function addDog() {
  let result = await axios.get('https://dog.ceo/api/breeds/image/random')
  dogList.value.push('https://vpn.ygking.top/'+result.data.message)
}

</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
  margin: 10px;
}
</style>
