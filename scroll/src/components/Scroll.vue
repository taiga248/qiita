<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="link in links" :key="link">
        <a href="#" @click="Scroll(link)">{{ link }}</a>
      </li>
    </ul>    
    <ul>
      <li class="demo" :id="link" v-for="link in links" :key="link">{{ link }}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Scroll',
  data: () =>{
    return {
      msg: "Welcome to Your SmoothScroll App",
      links: [1, 2, 3, 4, 5],
    }
  },
  methods: {
    Scroll (num) {
      event.preventDefault()
      this.$SmoothScroll(
        document.getElementById(num),
        1200,
        null,
        null,
        'y'
      )
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  font-size: 1.5em;
  color: #42b983;
  text-decoration: none;
}
.demo{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 80vw;
  font-size: 5em;
  margin: 50px auto 0 auto;
  background: #efefff;
  border-radius: 50px;
}
</style>
