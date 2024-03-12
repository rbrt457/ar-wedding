<script setup lang="ts">
const colors = ["efece7", "cbc3ba", "d8c9ba", "d9c2b0", "ad8c74", "bfbfbf", "524f4a"];
</script>

<template>
    <div class="container section dress-code">
        <h2 class="section__title h2">Дресс-код</h2>

        <div class="section__main">
            <p class="p1 text-center mb-12">
                Мы создаем наш свадебный день с особым трепетом. <br />
                Нам будет очень приятно, если вы поддержите общую цветовую гамму торжества
            </p>

            <div class="dress-code__map">
                <div v-for="color in colors" :key="color" class="dress-code__color" :style="`background-color:#${color}`"></div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "dress-code";
</style>
