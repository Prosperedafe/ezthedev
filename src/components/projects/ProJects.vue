<template>
    <swiper v-for="(project, index) in projects" :key="index" :navigation="true" :modules="modules">
        <swiper-slide>
            <ProjectCard :project="project" />
        </swiper-slide>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard.vue';

export default {
    name: 'ProJects',
    components: {
        Swiper,
        SwiperSlide,
        ProjectCard,
    },
    data() {
        return {
            projects
        }
    },
    setup() {
        return {
            modules: [Navigation],
        };
    },
};
</script>
