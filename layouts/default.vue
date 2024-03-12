<template>
    <div>
        <img class="t1" src="/background.jpeg" />

        <div class="pos-relative">
            <slot />
        </div>
        <!--        <PageNavigation />-->
        <!--        <ArrowNav :class="['page-navigation__next']" :animated="true" @click="" />-->
    </div>
</template>

<script>
import { defineComponent } from "vue";
// import PageNavigation from "~/components/global/page-navigation/page-navigation.vue";
// import ArrowNav from "~/components/ui/arrow-nav/arrow-nav.vue";

export default defineComponent({
    // components: { ArrowNav, PageNavigation },
});
</script>
<style lang="scss">
.back {
    position: absolute;
    z-index: 0;
}

.back-1 {
    top: -5px;
    left: -5px;
}

.back-2 {
    top: 320px;
}

.back-3 {
    top: 0;
    right: -5px;
}

.back-4 {
    top: 1295px;
}

.t1 {
    position: fixed;
    inset: 0;

    width: 100vw;
    height: 100vh;

    opacity: 0.3;
    object-fit: cover;
}
</style>
