import { defineEventHandler } from "h3";
import { useTelegramApi } from "~/composables/useTelegramApi.ts";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const body = await readBody(event);
    const token = config.TELEGRAM_TOKEN;

    return $fetch(useTelegramApi(token, "sendMessage"), {
        method: "POST",
        body: {
            chat_id: config.TELEGRAM_CHAT,
            text: body.message,
        },
    });
});
