<template>
    <div class="pt-24 sm:pt-16 text-primaryText">
        <NameMarquee />
        <div class="px-[5%]">
            <RouterLink to="/" class="block text-base font-medium ml-auto w-fit my-4">
                Back To Projectfolio
            </RouterLink>
            <figure class="mt-16">
                <img src="../assets/images/5.png" class="w-full" alt="">
            </figure>
            <section class="my-12">
                <h2 class="font-medium text-3xl sm:text-center">Project Overview</h2>
                <div class="grid md:grid-cols-[1fr_.7fr] mt-8 md:mt-20 gap-x-12 gap-y-8">
                    <div>
                        <section class="mb-8">
                            <h3 class="text-2xl font-medium mb-2">About Project</h3>
                            <p class="max-w-[460px]">Office ipsum you must be muted. Attached investigation optimize
                                productive policy.
                                Backwards another done beforehand turn who's issues skulls reach functional. Native
                                latest heads-up who's want key reference kimono attached policy. Eow it procrastinating
                                existing enable strategies us if bells going. Third no-brainer rehydrate for minimize
                                beforehand reference. Another 30,000ft picture no discussions productive. Quick deploy
                                define bells would with journey. Air centric invite adoption points. Running.</p>
                        </section>
                        <section>
                            <h3 class="text-2xl font-medium mb-2">What I did</h3>
                            <p class="max-w-[460px]">A backend engineer plays a crucial role in a project by developing
                                and maintaining the
                                server-side logic, databases, and overall application architecture. Their work begins
                                with understanding project requirements and translating them into a scalable and
                                efficient system. <br>
                                Key responsibilities include designing database schemas, writing server-side code, and
                                creating APIs that allow the front-end and other services to communicate with the
                                backend. They also ensure security, data integrity, and application performance.
                                Additionally, backend engineers often handle integrations with third-party services and
                                oversee deployment processes. <br>
                                Collaboration with front-end developers, project managers, and other stakeholders is
                                essential to ensure a cohesive development process and deliver a functional,
                                high-quality product. In essence, backend engineers are the backbone of any application,
                                ensuring that all parts work seamlessly together.
                            </p>
                        </section>
                    </div>
                    <section>
                        <h4 class="text-xl font-medium">My role</h4>
                        <p class="text-[1.05rem] my-3">Back-end Developer</p>
                        <a
                            class="flex items-center font-medium rounded-[20px] border-[2px] border-primaryText w-fit uppercase px-4"><span>Visit
                                Website</span>
                            <svg width="42" height="41" viewBox="0 0 42 41" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.2912 16.2791C19.1695 16.2834 19.0483 16.2632 18.9347 16.2196C18.821 16.176 18.7173 16.11 18.6298 16.0254C18.5422 15.9409 18.4726 15.8396 18.425 15.7276C18.3775 15.6156 18.3529 15.4951 18.3529 15.3734C18.3529 15.2517 18.3775 15.1313 18.425 15.0192C18.4726 14.9072 18.5422 14.8059 18.6298 14.7214C18.7173 14.6369 18.821 14.5709 18.9347 14.5273C19.0483 14.4837 19.1695 14.4634 19.2912 14.4677L26.1265 14.4677C26.3667 14.4679 26.597 14.5634 26.7668 14.7332C26.9366 14.903 27.0321 15.1333 27.0322 15.3734L27.0322 22.2088C27.0365 22.3304 27.0163 22.4517 26.9727 22.5653C26.9291 22.6789 26.8631 22.7826 26.7785 22.8702C26.694 22.9577 26.5927 23.0274 26.4807 23.0749C26.3687 23.1225 26.2482 23.147 26.1265 23.147C26.0048 23.147 25.8844 23.1225 25.7723 23.0749C25.6603 23.0274 25.559 22.9577 25.4745 22.8702C25.39 22.7826 25.324 22.6789 25.2804 22.5653C25.2368 22.4517 25.2165 22.3304 25.2208 22.2088L25.2208 17.5607L16.9415 25.8401C16.7715 26.01 16.541 26.1055 16.3007 26.1055C16.0603 26.1055 15.8298 26.01 15.6599 25.8401C15.4899 25.6701 15.3944 25.4396 15.3944 25.1993C15.3944 24.9589 15.4899 24.7284 15.6599 24.5584L23.9392 16.2791L19.2912 16.2791Z"
                                    fill="#545454" />
                            </svg>
                        </a>
                    </section>
                </div>
            </section>
            <picture class="grid gap-4">
                <img src="../assets/images/5.png" class="w-full" alt="">
                <img src="../assets/images/7.png" class="w-full" alt="">
            </picture>
            <section class="py-12">
                <h3 class="font-medium text-3xl sm:text-center mb-6">Other Works</h3>
                <ProJects />
            </section>
        </div>
    </div>
</template>

<script lang="ts">
import NameMarquee from '@/components/NameMarquee.vue';
import { projects } from '../data/projects'
import { useRoute } from 'vue-router';
import { RouterLink } from 'vue-router'
import ProJects from '@/components/projects/ProJects.vue';

export default {
    components: {
        NameMarquee,
        RouterLink,
        ProJects
    },
    setup() {
        const route = useRoute();
        const id = route.params.id;
        const project = projects?.find(project => id === project?.id)
        return {
            project
        };
    },
};
</script>