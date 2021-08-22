<template>
    <slot name="first"> </slot>
    <slot name="second"> </slot>
</template>
<script>
export default {
    data: () => {
        return {
            test1 : 0,
        }
    },
    mounted: () => {
        console.log(' content mounted ');
    }
}
</script>
<style lang="scss" src="../style/Content.scss" />