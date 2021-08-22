<template>
    <div class="content-wrapper">
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
                    <input type="text" v-model="mileage">
                </div>
                <div class="button">
                    <Button :config="buttonConfig" @clicked="calculate()"/>
                </div>
                <div class="tutorial">
                  <span> How does it work ? </span>
                    <div class="tutorial__tooltip">
                      <p> Our Father’s Day Chore Calculator tells you exactly what the children need to do to pay you back for your hard-earned petrol. Simply enter the number of miles you rack up in Dad’s taxi per week, and we’ll give them a list of ‘repayment’ tasks. </p>
                    </div>
                </div>
              </div>
            </div>
          </template>
        </Content>
    </div>
</template>
<script>
import Content from '@/components/Content.vue';
import Button from '@/components/Button.vue';
export default {
    name: 'Landing',
    components: {
        Content,
        Button,
    },
    mounted: () => {
    }, 
    data: () => {
        return {
            buttonConfig : { text: 'Calculate', redirect: 'results' },
            mileage: 0,
        }
    },
    methods: {
      calculate(){
        const chores = [];
        const inTotal = ( this.mileage / 10 ) * 1.15 ;
        let computedTotal = 0;
        this.cards.forEach((card, index) => {

            const rand = Math.ceil(Math.random() * 10);
            computedTotal = card.price.value * rand;

            const newObject = {
                ...card, 
                amount: rand,
            }

            if(computedTotal < inTotal) {
              this.$store.commit('SET_CHORES', {
                  payload: newObject,
                  idx: index
              });
            }

        });

        this.$store.commit('SET_MILEAGE', this.mileage);

        this.$router.push('/results');
      }
    },
    computed: {
        cards() {
            return this.$store.state.chores;
        },
    }
}
</script>
<style lang="scss" src="../style/Home.scss" />