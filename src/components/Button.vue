<template>
    <div class="button">
        <button @click="$emit('clicked')"> 
            {{config.text}} 
        </button>
    </div>
</template>
<script>
export default {
    name: 'Button',
    props: ['config'],
    mounted: () => {
        console.log('Button component mounted');
    }
}
</script>
<style lang="scss" scoped src="../style/Button.scss" />