<template>
    <div class="page greeting" :style="`height:${deviceHeight}px`">
        <div class="greeting__date">
            <span>21</span>
            <span class="greeting__separator"></span>
            <span>09</span>
            <span class="greeting__separator"></span>
            <span>24</span>
        </div>

        <h1 class="text-center">Роберт и Анастасия</h1>

        <ArrowNav v-if="pageOffSet < 100" class="greeting__arrow" :animated="true" @click="scroll" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ArrowNav from "~/components/ui/arrow-nav/arrow-nav.vue";

export default defineComponent({
    name: "Greeting",
    components: { ArrowNav },
    data: () => ({
        pageOffSet: 0,
        deviceHeight: 0,
    }),
    mounted() {
        this.deviceHeight = window.innerHeight;

        window.addEventListener("scroll", () => {
            this.setPageOffSet(pageYOffset);
        });
    },
    methods: {
        setPageOffSet(pageYOffset: number) {
            this.pageOffSet = pageYOffset;
        },
        scroll() {
            window.scrollTo(0, window.innerHeight - 20);
        },
    },
});
</script>

<style scoped lang="scss">
@import "greeting";
</style>
