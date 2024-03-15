<template>
    <main>
        <div class="layout-background"></div>

        <div class="error">
            <h1 v-if="error.statusCode !== 403" class="error__title">{{ error.statusCode }}</h1>

            <p class="error__message">
                {{ error.statusCode === 404 ? "Страница не найдена" : error.statusCode === 500 ? "Ошибка сервера" : error.message || "" }}
            </p>

            <button v-if="error.statusCode === 404" class="button button--sm button--brown" @click="returnToMain()">Вернуться на главную</button>
            <!--            <UiButton v-else :name="'Обновить страницу'" :size="'lg'" @click="pageReload" />-->
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
.error {
    display: grid;
    gap: 20px;
    place-content: center;
    min-height: 100vh;
}

.error__title {
    font-size: 120px;
    font-weight: 700;
    line-height: 100px;
    text-align: center;
}

.error__message {
    @include media-breakpoint-down(sm) {
        font-size: 24px;
        line-height: 32px;
    }

    font-size: 48px;
    line-height: 56px;
    text-align: center;
}
</style>
