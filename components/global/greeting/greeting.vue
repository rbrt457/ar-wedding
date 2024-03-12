<template>
    <div class="page greeting">
        <div class="greeting__date">
            <span>21</span>
            <span class="greeting__separator"></span>
            <span>09</span>
            <span class="greeting__separator"></span>
            <span>24</span>
        </div>

        <!--        <img class="greeting__img" src="/IMG_2410.jpg" >-->

        <h1 class="text-center">Роберт и Анастасия</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Greeting",
    data: () => ({
        pageOffSet: 0,
    }),
    mounted() {
        window.addEventListener("scroll", () => {
            this.setPageOffSet(pageYOffset);
        });
    },
    methods: {
        setPageOffSet(pageYOffset) {
            this.pageOffSet = pageYOffset;
        },
    },
});
</script>

<style scoped lang="scss">
@import "greeting";
</style>
