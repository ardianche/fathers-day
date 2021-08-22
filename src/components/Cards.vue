<template>
    <Card v-for="(card, $index) in cards" :key="$index" :card="card" />
</template>
<script>
import Card from '@/components/Card.vue'
export default {
    name: 'Cards',
    props: ['cards'],
    components: {
        Card,
    }
}
</script>