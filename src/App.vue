<template>
    <the-header></the-header>
    <router-view>

    </router-view>
</template>

<script>
import TheHeader from './components/TheHeader.vue'

export default {
    components: {
        TheHeader
    }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

section{
    background-color: #221E22;
}
html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
  color: #ECA72C;
  background-color: #221E22;
}
</style>