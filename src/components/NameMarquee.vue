<template>
    <Vue3Marquee>
        <img src="@/assets/images/game-icons_moebius-star.png" class="h-16 md:h-auto" alt="ez the dev web logo" />
        <span class="text-[4rem] md:text-[7.5rem] text-primaryText block mx-8 font-medium">SENAMI SOUKOU</span>
        <img src="@/assets/images/game-icons_moebius-star.png" class="h-16 md:h-auto" alt="ez the dev web logo" />
        <span class="text-[4rem] md:text-[7.5rem] text-primaryText block mx-8 font-medium">SENAMI SOUKOU</span>
    </Vue3Marquee>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Vue3Marquee } from 'vue3-marquee'
export default defineComponent({
    components: {
        Vue3Marquee,
    },
    setup() {
        return {}
    },
})
</script>