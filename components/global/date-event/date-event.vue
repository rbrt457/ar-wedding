<template>
    <div class="container section date-event">
        <h2 class="section__title text-center date-event__title">Дата свадьбы</h2>

        <div class="date-event__calendar">
            <h3 class="h3 text-center pos-relative">Сентябрь | 2024</h3>
            <div id="event-calendar"></div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";

export default defineComponent({
    name: "MainBlock",
    data: () => ({
        eventDay: 21,
    }),
    mounted() {
        const eventDay = this.eventDay;
        new AirDatepicker("#event-calendar", {
            selectedDates: [`2024-09-${eventDay}`],
            onRenderCell() {
                return {
                    disabled: true,
                };
            },
        });
    },
});
</script>
<style lang="scss">
@import "date-event";
</style>
