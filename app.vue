<template>
    <NuxtLayout :name="'default'">
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
import { useGuestsStore } from "~/store/guests/guests";

const guestStore = useGuestsStore();

await guestStore.fetchGuest();
await guestStore.updateGuestVisits();
</script>
