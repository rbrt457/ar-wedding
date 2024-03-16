<template>
    <main class="error">
        <div class="layout-background"></div>

        <div class="error__content">
            <h1 v-if="error.statusCode !== 403" class="error__title">{{ error.statusCode }}</h1>

            <p class="error__message">
                {{ error.statusCode === 404 ? "Страница не найдена" : error.statusCode === 500 ? "Ошибка сервера" : error.message || "" }}
            </p>

            <button v-if="error.statusCode === 404" class="button button--sm button--brown" @click="returnToMain()">Вернуться на главную</button>
        </div>
    </main>
</template>

<script setup>
import { useGuestsStore } from "~/store/guests/guests.js";

defineProps({
    error: {
        type: Object,
        required: true,
    },
});

const guestStore = useGuestsStore();

const returnToMain = () => useRouter().push(`/?uuid=${guestStore.getGuestId}`);
</script>
<style scoped lang="scss">
@import "@/assets/scss/pages/error/error";
</style>
