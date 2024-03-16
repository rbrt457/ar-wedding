<template>
    <div class="container section main-block">
        <div class="section__main main-block__content">
            <div class="one">
                <img src="/snapedit_1710003066276.jpeg" alt="Декоративное изображение" />
            </div>

            <div class="two">
                <div class="two__content">
                    <h2 class="two__guest-name">{{ useListNames(guest.names) }}</h2>

                    <div class="p1 text-center two__invite">
                        <p>Приглашаем Вас на торжество, посвященное нашему бракосочетанию!</p>
                        <p>Мы будем искренне рады разделить этот счастливый день создания нашей семьи.</p>
                        <p>Подтвердите пожалуйста свое присутствие</p>
                    </div>

                    <div v-if="guest.confirmed === null" class="two__controls">
                        <!--                        <button class="button button&#45;&#45;sm button&#45;&#45;min-180 button&#45;&#45;brown" @click="confirmInvite(true)">Подтвердить присутствие</button>-->

                        <!--                        <button class="button button&#45;&#45;sm button&#45;&#45;brown-outline" @click="confirmInvite(false)">Сожалею, не смогу присутствовать</button>-->
                    </div>

                    <div v-else class="two__controls">
                        <button class="button button--sm button--brown" disabled>
                            {{ guest.confirmed ? "Приглашение принято" : "Приглашение отклонено" }}
                        </button>

                        <button class="button button--xs button--brown-outline">Изменить решение</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useGuestsStore } from "~/store/guests/guests";

const guestStore = useGuestsStore();
const guest = guestStore.getGuest;

// const confirmInvite = async (decision: Boolean) => {
// await updateGuestTable({ confirmed: decision });
// await refreshGuestData();
// const botMessage = `${useListNames(guest.names)} ${decision ? "приняли" : "отклонили"} приглашение`;
// };
</script>

<style scoped lang="scss">
@import "main-block";
</style>
