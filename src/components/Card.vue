<template>
    <div class="card-wrapper" :style="{ backgroundColor: card.color }">
        <div class="card-wrapper__header">
            <span>x{{card.amount}}</span>
            <img class="icon" :src="card.icon" />
        </div>
        <div class="card-wrapper__center">
            <h4>{{card.identifier}}</h4>
        </div>
        <div class="card-wrapper__footer">
            <h4>{{card.price.formattedValue}}</h4>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Card',
    props: ['card'],
}
</script>
<style lang="scss" scoped src="../style/Card.scss" />