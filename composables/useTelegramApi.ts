export const useTelegramApi = (token: String, method: String) => `https://api.telegram.org/bot${token}/${method}`;
