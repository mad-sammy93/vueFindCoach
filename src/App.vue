<template>
    <the-header></the-header>
    <router-view>

    </router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'

export default {
    components: {
        TheHeader
    }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&display=swap");

* {
  box-sizing: border-box;
}

section{
    background-color: #221E22;
}
html {
  font-family: "Montserrat", sans-serif;
}

body {
  margin: 0;
  color: #ECA72C;
  background-color: #221E22;
}
</style>