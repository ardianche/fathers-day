<template>
    <div class="header-wrapper">
        <div class="header-wrapper__left">
            <img src="../assets/DadsLogoSvg.svg" />
        </div>
        <div class="header-wrapper__right">
            <span>
                Chores
            </span>
            <span> 
                Average Cons.
            </span>
        </div>
        <div class="header-wrapper__right-icons">
            <img src="../assets/chores/Sweeping.svg" alt="">
            <img src="../assets/chores/gas.svg" alt="">
        </div>
    </div>
</template>

<script>

export default {
    name: 'Header',
    data: () => {
        return {
            test1 : 0
        }
    }
}
</script>

<style src='../style/Header.scss' lang="scss">

</style>