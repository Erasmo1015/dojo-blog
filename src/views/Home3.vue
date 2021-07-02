<template>
  <div class="home">
    <h1>Home</h1> 
    <input type="text" v-model="search">
    <p>search term - {{search}}</p>
    <div v-for="name in matchingNames" :key="name">{{name}}</div>
    <button @click="handleClick">stop watching</button>
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from 'vue'

export default {
  name: 'Home',
  setup(){
    const search = ref('')
    const names = ref (['mario','1','2'])
    const stopWatch = watch(search, () => {
      console.log('watch function run')
    })
    watchEffect(() => {
      console.log('watchEffect Run', search.value)
    })
    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })
    const handleClick = () => {
      stopWatch()
    }
    return { names, search, matchingNames, handleClick}
  }
}
</script>
