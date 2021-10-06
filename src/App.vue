<template>
  <div class="main-wrapper">
    <main-nav></main-nav>
    <router-view/>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainNav from './components/Navbar/MainNav.vue'
import MainFooter from './components/Navbar/MainFooter.vue'
export default {
  components:{
    MainNav,
    MainFooter
  }
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

.main-wrapper{
  font-family: 'Poppins';
  padding: 5px;
}
</style>

