<template>
    <div class="page-navigation">
        <ArrowNav v-if="showPrevButton" class="page-navigation__prev" @click="prevPage()" />

        <ArrowNav v-if="showNextButton" :class="['page-navigation__next']" :animated="!showPrevButton" @click="nextPage()" />
    </div>
</template>
<script>
import { defineComponent } from "vue";
import { useState } from "nuxt/app";
import ArrowNav from "../../ui/arrow-nav/arrow-nav.vue";

export default defineComponent({
    name: "PageNavigation",
    components: { ArrowNav },
    data: () => ({
        currentPage: 1,
        totalPages: null,
        pages: null,
        showPrevButton: false,
        showNextButton: false,
    }),
    mounted() {
        this.initPages();
        setTimeout(() => {
            this.getPage();
            this.checkingAvailabilityButtons(this.currentPage);
        }, 1000);
    },
    methods: {
        getPage() {
            const t = window.pageYOffset;

            this.currentPage = this.pages.find((el) => {
                if (t >= el.topPosition && t < el.bottomPosition) return el;
                return false;
            }).page;
        },
        initPages() {
            const firstPage = useState("firstPage").value;
            const secondPage = useState("secondPage").value;
            const thirdPage = useState("thirdPage").value;

            this.pages = [
                {
                    page: 1,
                    topPosition: firstPage.$el.offsetTop,
                    bottomPosition: firstPage.$el.offsetTop + firstPage.$el.offsetHeight,
                },
                {
                    page: 2,
                    topPosition: secondPage.$el.offsetTop,
                    bottomPosition: secondPage.$el.offsetTop + secondPage.$el.offsetHeight,
                },
                {
                    page: 3,
                    topPosition: thirdPage.$el.offsetTop,
                    bottomPosition: thirdPage.$el.offsetTop + thirdPage.$el.offsetHeight,
                },
            ];

            this.totalPages = this.pages.length;
        },
        findCoordinates(page) {
            return this.pages.find((el) => {
                if (el.page === page) return el;
                return false;
            }).topPosition;
        },
        prevPage() {
            const prevPage = this.currentPage - 1;
            console.log(prevPage);
            this.initPages();
            this.goTo(this.findCoordinates(prevPage));
            this.checkingAvailabilityButtons(prevPage);
        },
        nextPage() {
            const nextPage = this.currentPage + 1;
            console.log(this.findCoordinates(nextPage));
            this.initPages();
            this.goTo(this.findCoordinates(nextPage));
            this.checkingAvailabilityButtons(nextPage);
        },
        goTo(to) {
            window.scrollTo({
                top: to,
                left: 0,
                behavior: "smooth",
            });

            setTimeout(() => this.getPage(), 700);
        },
        checkingAvailabilityButtons(page) {
            this.showPrevButton = page > 1;
            this.showNextButton = page !== this.totalPages;
        },
    },
});
</script>

<style lang="scss">
@import "page-navigation";
</style>
