<template>
    <swiper ref="swiperRef" @swiper="onSwiper" :breakpoints="breakpoints" :slidesPerView="4" :spaceBetween="30">
        <swiper-slide v-for="(project) in projects" :key="project?.id">
            <ProjectCard :project="project" />
        </swiper-slide>
    </swiper>
    <div class="flex gap-6 w-fit ml-auto mt-6">
        <button @click="swiperPrevSlide">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.594595" y="0.594595" width="42.8108" height="42.8108" rx="21.4054" stroke="#3D403C"
                    strokeWidth="1.18919" />
                <g clipPath="url(#clip0_63_183)">
                    <path d="M24.1081 14.1959L16.5405 22L24.1081 29.804" stroke="#545454" strokeWidth="1.66487"
                        strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_63_183">
                        <rect width="11.8919" height="17.8378" fill="white" transform="translate(15.4595 13.0811)" />
                    </clipPath>
                </defs>
            </svg></button>
        <button @click="swiperNextSlide">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="44" height="44" rx="22" transform="matrix(-1 0 0 1 44 0)" fill="#3D403C" />
                <g clipPath="url(#clip0_63_184)">
                    <path d="M19.8917 14.1959L27.4592 22L19.8917 29.804" stroke="white" strokeWidth="1.66487"
                        strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_63_184">
                        <rect width="11.8919" height="17.8378" fill="white"
                            transform="matrix(-1 0 0 1 28.5405 13.0811)" />
                    </clipPath>
                </defs>
            </svg>
        </button>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard.vue';
import { ref } from 'vue';

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
        const swiperInstance = ref();
        const onSwiper = (swiper) => {
            swiperInstance.value = swiper
        }
        const swiperNextSlide = () => {
            swiperInstance?.value.slideNext()
        };
        const swiperPrevSlide = () => {
            swiperInstance?.value.slidePrev()
        };
        const breakpoints = {
            100: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            540: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        };
        return {
            breakpoints,
            swiperPrevSlide,
            swiperNextSlide,
            onSwiper,
        };
    },
};
</script>
