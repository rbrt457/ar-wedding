import { defineStore } from "pinia";

export const useGuestsStore = defineStore("guests-store", {
    state: () => ({
        guest: null,
        supabase: useSupabaseClient(),
        guestId: useRoute().query.uuid,
    }),
    actions: {
        async fetchGuest() {
            const { data: guest } = await useAsyncData("guest", async () => await this.supabase.from("guests").select("*").eq("id", this.guestId), {
                transform: (result) => result.data[0],
            });

            this.guest = guest;
        },
        async updateGuestTable(updated, updateGuestInfo) {
            await this.supabase.from("guests").update(updated).eq("id", this.guestId);

            if (updateGuestInfo) await this.fetchGuest();
        },
        async updateGuestVisits() {
            await this.updateGuestTable({ visits: this.guest.visits + 1 || 0 });
        },
    },
    getters: {
        getGuest() {
            return this.guest;
        },
        getGuestId() {
            return this.guestId;
        },
    },
});
