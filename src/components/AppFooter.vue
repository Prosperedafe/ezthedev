<template>
    <footer class="px-[5%] pb-32 pt-12 sm:pt-0 overflow-hidden">
        <section>
            <h2 class="text-[16vw] lg:text-[17vw] text-center text-primaryText">Get In Touch</h2>
            <div class="w-fit ml-auto mr-[20%]">
                <EzMedia />
                <div class="my-6">
                    <p>DESIGNED BY_BRIGHT MARVELOUS</p>
                    <p>DEVELOPED BY_EZRA SOKOU</p>
                </div>
                <p>©2024 All Right Reserved</p>
            </div>
        </section>
    </footer>
</template>
<script>
import EzMedia from './EzMedia.vue';
export default {
    name: 'ProJects',
    components: {
        EzMedia
    },
}
</script>