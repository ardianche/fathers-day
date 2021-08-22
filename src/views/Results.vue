<template>
    <div class="content-wrapper">
        <Content>
          <template v-slot:second>
            <div class="content-inner-container">
              <div class="content-inner-container__header">
                <h1>Chores your kid can do</h1>
              </div>
              <div class="content-inner-container__cards">
                <Cards :cards="cards" />
              </div>
              <div class="content-inner-container__footer">
                  <Button :config="buttonConfig" @clicked="navigate()"/>
              </div>
            </div>
          </template>
        </Content>
    </div>
</template>
<script>
import Content from '@/components/Content.vue';
import Cards from '@/components/Cards.vue';
import Button from '@/components/Button.vue';
export default {
    name: 'Results',
    components: {
        Content,
        Cards,
        Button,
    },
    beforeMount(){
        if(this.$store.state.miles < 1) {
            this.$router.push('/')
        } 
    },
    data: () => {
        return {
            buttonConfig: { text: 'Generate Voucher', redirect: '/' }
        }
    },
    computed: {
        cards() {
            return this.$store.state.chores.filter((card) => card.amount > 0);
        }, 
        mileage() {
            return this.$store.state.miles;
        }
    },
    methods: {
        navigate() {
            this.$router.push('/');
        }
    }
}
</script>
<style lang="scss" src="../style/Home.scss" />