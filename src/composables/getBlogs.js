import { ref } from 'vue'

const getBlogs = () =>{
    const blogs = ref([])
    const error = ref(null)

    const load = async () =>{
      try {
        let data = await fetch('http://127.0.0.1:8000/blog/')
        console.log(data)
        if (!data.ok){
          throw Error('no data available')
        }
        blogs.value = await data.json()
      }
      catch (err){
        error.value = err.message
        console.log(error.value)
      }
    }
    return {blogs, error, load}
}

export default getBlogs
