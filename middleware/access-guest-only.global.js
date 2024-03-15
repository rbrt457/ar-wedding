export default defineNuxtRouteMiddleware((_to, from) => {
    if (!from.query.uuid) {
        throw createError({ statusCode: 403, message: "Извините, кажется у Вас нет доступа!", fatal: true });
    }
});
