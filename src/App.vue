<template>
    <the-header></the-header>
    <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
    </router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'

export default {
    components: {
        TheHeader
    },
    created(){
      this.$store.dispatch('tryLogin')
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

.route-enter-from{
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to{
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active{
  transition: all 0.3s ease-out;
}
.route-leave-active{
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from{
  
  opacity: 1;
  transform: translateY(0);
}
</style>