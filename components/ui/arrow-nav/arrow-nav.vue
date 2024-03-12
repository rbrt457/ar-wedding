<template>
    <div :class="['arrow-nav', { 'arrow-nav--animation': animated }]">
        <nuxt-icon class="icon" name="arrow" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "ArrowNav",
    props: {
        animated: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
});
</script>

<style scoped lang="scss">
@import "arrow-nav";
</style>
