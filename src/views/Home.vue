<template>
  <div class="home">
    <Header />
    <div class="home-content">
      <router-view>
        
      </router-view>
      <!-- <div class="content-wrapper">
        <Content>
          <template v-slot:first>
            <div class="content-inner-container">
              <div class="content-inner-container__header">
                <h1>Father’s Day Chore Calculator</h1>
              </div>
              <div class="content-inner-container__description">
                <p>Dad’s taxi is the cheapest, most used taxi on earth (probably). Wherever your little ones need to go, dad’s cab company is usually the first port of call. But this Father’s Day, why not pull the old switcheroo, and ask the kids to give a little back? </p>
              </div>
              <div class="content-inner-container__calculator">
                <div class="input-group">
                  <div class="input-group__label">
                    <span>Miles</span>
                  </div>
                    <input type="text">
                </div>
                <div class="button">
                  <button> Calculate </button>
                  <span>How does it work ?</span>
                </div>
              </div>
            </div>
          </template>
        </Content>
      </div> -->
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