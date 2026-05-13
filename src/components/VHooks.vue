<template>
  <h2>当前求和</h2>
  <h3>{{ count }}</h3>
  <button @click="add">+1</button>
  <hr/>
  <button @click="addDog">再来一只</button>
  <br/>
  <img :src="dog" v-for="(dog,index) in dogList" :key="index"/>
</template>

<script setup>
import { useSum } from '../hooks/useSum'
import { useDogs } from '../hooks/useDogs'

const { count, add } = useSum()
const { dogList, addDog } = useDogs()


</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
  margin: 10px;

}
</style>
