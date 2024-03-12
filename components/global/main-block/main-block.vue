<template>
    <div class="container section main-block">
        <div class="section__main main-block__content">
            <div class="one">
                <img src="/snapedit_1710003066276.jpeg" />
            </div>

            <div class="two">
                <div class="two__content">
                    <h2 class="two__guest-name">Андрей и Алёна</h2>

                    <p class="p1 text-center">
                        Приглашаем Вас на торжество, посвященное нашему бракосочетанию!<br />

                        Мы будем искренне рады разделить этот счастливый день создания нашей семьи.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const supabase = useSupabaseClient();

const { data: guests } = await supabase.from("guests").select("*");

console.log(guests);
</script>

<style scoped lang="scss">
@import "main-block";
</style>
