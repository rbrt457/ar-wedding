<template>
    <div class="container section main-block">
        <div class="section__main main-block__content">
            <div class="one">
                <img src="/snapedit_1710003066276.jpeg" alt="Декоративное изображение" />
            </div>

            <div class="two">
                <div class="two__content">
                    <h2 class="two__guest-name">{{ useListNames(getGuest.names) }}</h2>

                    <div class="p1 text-center two__invite">
                        <p>Приглашаем Вас на торжество, посвященное нашему бракосочетанию!</p>
                        <p>Мы будем искренне рады разделить этот счастливый день создания нашей семьи.</p>
                        <p>Подтвердите пожалуйста свое присутствие</p>
                    </div>

                    <div v-if="getGuest.confirmed === null" class="two__controls">
                        <button class="button button--sm button--min-180 button--brown" @click="confirmInvite(true)">Подтвердить присутствие</button>

                        <button class="button button--sm button--brown-outline" @click="confirmInvite(false)">Сожалею, не смогу присутствовать</button>
                    </div>

                    <div v-else class="two__controls">
                        <button class="button button--sm button--brown" disabled>
                            {{ getGuest.confirmed ? "Приглашение принято" : "Приглашение отклонено" }}
                        </button>

                        <button class="button button--xs button--brown-outline" @click="resetChoice()">Изменить решение</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useFetch } from "#app";
import { useGuestsStore } from "~/store/guests/guests";

const guestStore = useGuestsStore();
const { getGuest } = storeToRefs(guestStore);

const confirmInvite = async (decision: Boolean) => {
    await guestStore.updateGuestTable({ confirmed: decision }, true);

    const botMessage = `${useListNames(getGuest.value.names)} ${decision ? "приняли" : "отклонили"} приглашение`;

    await useFetch("/api/send-telegram-msg", {
        method: "POST",
        body: {
            message: botMessage,
        },
    });
};

const resetChoice = async () => {
    await guestStore.updateGuestTable({ confirmed: null }, true);

    const botMessage = `${useListNames(getGuest.value.names)} хочет изменить решение`;

    await useFetch("/api/send-telegram-msg", {
        method: "POST",
        body: {
            message: botMessage,
        },
    });
};
</script>

<style scoped lang="scss">
@import "main-block";
</style>
