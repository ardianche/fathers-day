<template>
  <div class="home">
    <Header />
    <div class="home-content">
      <router-view />
    </div>
    <div class="super-dad">
      <img src='../assets/Dad.svg' alt="">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue';
import Content from '@/components/Content.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Content
  },
  mounted: () => {
    console.log(' mounted ');
  },
}
</script>

<style lang="scss" src="../style/Home.scss" />