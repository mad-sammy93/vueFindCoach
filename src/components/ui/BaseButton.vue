<template>
    <button v-if="!link" :class="mode">
        <slot></slot>
    </button>
    <router-link v-else :to="to" :class="mode">
        <slot></slot>
    </router-link>
</template>
<script>
export default {
    props: {
        mode:{
            type:String,
            required:false,
            default: null
        },
        link: {
            type:Boolean,
            required:false,
            default: false
        },
        to: {
            type:String,
            required:false,
            default: '/'

        }
    }
}
</script>
<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.3rem 1.5rem;
  font: inherit;
  background-color: #004346;
  border: 1px solid #004346;
  color: white;
  cursor: pointer;
  border-radius: 3px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #508991;
  border-color: #508991;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #7ADFBB;
  color: white;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #508991;
}
</style>