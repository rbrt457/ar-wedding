<template>
    <div>
        <Greeting ref="firstPage" />

        <MainBlock ref="secondPage" />

        <DateEvent ref="thirdPage" />

        <DressCode />

        <Gifts/>
    </div>
</template>

<script lang="ts" setup>
import { useState } from "nuxt/app";

const firstPage = useState("firstPage", () => null);
const secondPage = useState("secondPage", () => null);
const thirdPage = useState("thirdPage", () => null);
</script>
