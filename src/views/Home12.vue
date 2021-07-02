<template>
  <div class="home">
    home
    <!-- <p ref="p">my name is {{name }} and my age is {{age}}</p>
    <button @click="handleClick"> click me </button>
    <button @click="age++">add age</button>
    <input type="text" v-model="name"> -->
    <p>{{ninjaone.name}} - {{ninjaone.age}}</p>
    <button @click="updateOne">update ninjaone</button>
    <h2>Reactive</h2>
    <button @click="updateTwo">update ninjatwo</button>

    <p>{{ninjatwo.name}} - {{ninjatwo.age}}</p>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'Home',
  setup(){
    // console.log(this)

    // const p = ref(null)

    // const name = ref('mario')
    // const age = ref(30)

    // const handleClick = () => {
    //   name.value = 'phoenix'
    //   age.value = 300
    // }
    const ninjaone = ref({name: 'mario', age: 30})
    const ninjatwo = reactive({name: 'luigi', age: 35})

    const updateOne = () => {
      ninjaone.value.age = 40
    }
    const updateTwo = () => {
      ninjatwo.age = 45
    }
    return { ninjaone, ninjatwo, updateOne, updateTwo}
  }
}
</script>
