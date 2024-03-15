import { useFetch } from "#app";

export const useTelegramNotification = (message: String) => {
    const config = useRuntimeConfig();
    const token = "7157984034:AAG6vimb_0kDJ8rqlEgLawV41qylx0YOxx4";
    const botApi = (method: String) => `https://api.telegram.org/bot${token}/${method}`;

    return useFetch(botApi("sendMessage"), {
        method: "POST",
        body: {
            chat_id: config.public.TELEGRAM_CHAT,
            text: message,
        },
    });
};
