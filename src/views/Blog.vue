<template>
  <div class="home">
    <h1>Home</h1> 
    <div v-if="error">{{error}}</div>
    <div v-if="blogs.length">
      <div v-for="blog in blogs" :key='blog.title'>
          <h3>{{blog.title}}</h3>
          <p>{{blog.body}}</p>
      </div>
    </div>
    <div v-else>Loading ... </div>    
  </div>
</template>

<script>
import getBlogs from '../composables/getBlogs'

export default {
  name: 'Blog',
  setup(){
    const {blogs, error, load} = getBlogs()
    load()
    return { blogs, error}
  }
}
</script>

<style>

</style>