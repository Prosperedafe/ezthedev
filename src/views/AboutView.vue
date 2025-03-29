<template>
  <div class="pt-24 sm:pt-16 text-primaryText">
    <NameMarquee />
    <div class="px-[5%]">
      <p class="text-right font-medium">Based In Lagos, Nigeria <img src="../assets/images/Nigeria-flag.png"
          alt="nigerian flag" class="size-4 ml-1 inline-block" />
      </p>
      <article class="grid md:grid-cols-2 lg:grid-cols-[1.3fr_2fr] text-base gap-x-[4%] gap-y-12 py-16 relative">
        <figure>
          <img src="../assets/images/ezra-the-developer-image.webp" class="lsm:w-[90%] w-full md:sticky top-[2rem]"
            alt="ezra at oyasync hangout">
        </figure>
        <div class="flex flex-col gap-3 max-w-[80%] ml-auto md:ml-0 md:max-w-[680px]">
          <h1 class="text-xl font-medium">Software Engineer | Content Creator</h1>
          <p>
            I am a dedicated Fullstack Developer with over 2 years of hands-on experience in building, optimizing, and
            scaling both web and mobile applications. My expertise lies in both front-end and back-end development, with
            proficiency in technologies such as React Native, React, Next.js, and Node.js. I have a strong affinity for
            TypeScript due to its type safety, maintainability, and the overall confidence it provides in writing robust
            code.
          </p>
          <p>
            In the front-end, I focus on creating user-friendly interfaces that prioritize smooth navigation and
            responsive design. My goal is to ensure that every app I build not only looks great but also delivers a
            seamless and intuitive experience across various devices. I pay close attention to design details, ensuring
            that the UI aligns with user needs and business goals.
          </p>
          <p>
            On the back-end, I have extensive experience in architecting RESTful APIs, implementing secure
            authentication systems, and optimizing database schemas to handle large volumes of data efficiently. My
            approach is to ensure that server-side logic is both performant and scalable, enabling businesses to grow
            without worrying about technical bottlenecks. I work with databases like MongoDB, ensuring quick data
            retrieval and smooth integration with the front-end.
          </p>
          <p>
            In addition to my technical expertise, I thrive in collaborative environments, working closely with
            cross-functional teams including designers, product managers, and other developers. I am highly motivated by
            problem-solving, always seeking innovative ways to tackle challenges and deliver solutions that exceed
            expectations. Whether it's troubleshooting performance issues, integrating third-party services, or
            refactoring code for better efficiency, I take pride in delivering high-quality, well-architected solutions
            that can scale over time.
          </p>
          <p>
            Beyond coding, I’m equally passionate about tech content creation. I believe in sharing knowledge with the
            wider tech community, whether that’s through blog posts, tutorials, or engaging content that demystifies
            complex topics. My goal is to make technology more accessible and fun, often weaving humor into my content
            to connect with audiences of all levels. From breaking down intricate software engineering concepts to
            providing practical tips and insights, I aim to inspire and educate others in the tech space.
          </p>
          <p>
            As both a developer and a content creator, I’m driven by a desire to continuously learn, innovate, and
            contribute to the ever-evolving world of technology. Whether working on projects or sharing ideas with the
            community, I strive to make a meaningful impact through both my code and content.
          </p>
        </div>
      </article>
    </div>
    <!-- <section id="my-skills" class="text-center py-12">
      <h2 id="my-skills" class="uppercase text-xl font-medium">My Skill Set</h2>
      <p class="text-[calc(1rem_+_1px)] px-[5%] mt-3">Here are the languages i use to create some amazing websites</p>
      <div class="relative h-[290px] max-w-[550px] mx-auto flex items-end justify-center mt-12">
        <img class="absolute h-[60px] sm:h-auto bottom-4 left-0" :src='mg' alt="javascript logo" />
        <img class="absolute h-[60px] sm:h-auto top-[35%] sm:top-[8%] left-[6%] sm:left-[14%]" :src='ts'
          alt="typescript logo" />
        <img class="absolute h-[60px] sm:h-auto top-0 left-[50%] -translate-x-[50%]" :src='python' alt="python logo" />
        <img class="absolute h-[60px] sm:h-auto top-[35%] sm:top-[8%] right-[6%] sm:right-[14%]" :src='sql'
          alt="sql logo" />
        <img class="absolute h-[60px] sm:h-auto bottom-4 right-0" :src='js' alt="javascript logo" />
        <p class="max-w-[150px] lsm:max-w-[170px] sm:max-w-[220px]">Python is a versatile and easy-to-read programming
          language used for web development, data analysis, machine learning, automation, and more.</p>
      </div>
    </section> -->
    <section id="experience" class="px-[5%] pt-8 max-w-[800px]">
      <h3 class="font-medium text-[1.2rem] mb-10" id="experience">EXPERIENCE HISTORY</h3>
      <div class="sm:flex justify-between items-center mb-5" v-for="(experience, index) in experience" :key="index">
        <div>
          <p class="text-[1.4rem] font-medium">{{ experience.role }}</p>
          <p class="text-[calc(1rem_+_1px)]">{{ experience.company }}</p>
        </div>
        <div class="sm:min-w-[200px]">
          <p class="sm:text-lg font-medium">{{ experience.duration }}</p>
          <p>{{ experience.contract }}</p>
        </div>
      </div>
    </section>
    <section id="photo-journal" class="px-[5%] py-12">
      <div class="flex justify-between items-center mb-10 gap-4 flex-wrap">
        <h3 id="photo-journal" class="font-medium text-base sm:text-[1.2rem]">MY PHOTO JOURNAL</h3>
        <a class="bg-[#1D1C1C] text-white font-medium px-4 py-2 sm:px-[25px] sm:py-3 rounded-[25px]" href="http://"
          target="_blank" rel="noopener noreferrer">Follow me on X</a>
      </div>
      <swiper ref="swiperRef" @swiper="onSwiper" :breakpoints="breakpoints" :slidesPerView="4" :spaceBetween="30">
        <swiper-slide v-for="(journal, index) in photoJournal" :key="index">
          <figure class="relative">
            <img :src='journal.photo' :alt="journal.alt">
            <figcaption
              class="text-base absolute bottom-3 left-3 text-white backdrop-blur-[16px] rounded-[20px] py-2 px-5 bg-white/25 max-w-[90%]">
              {{ journal.alt }}
            </figcaption>
          </figure>
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
                <rect width="11.8919" height="17.8378" fill="white" transform="matrix(-1 0 0 1 28.5405 13.0811)" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import NameMarquee from '@/components/NameMarquee.vue';
import { experience } from '@/data/experience';
import js from '../assets/images/javascript.png'
import sql from '../assets/images/sql.png'
import python from '../assets/images/python.png'
import ts from '../assets/images/typescript.png'
import mg from '../assets/images/mg.png'
import { photoJournal } from '@/data/photo-journal';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { ref } from 'vue';

export default {
  components: {
    NameMarquee,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiperInstance = ref();
    const onSwiper = (swiper: any) => {
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
        slidesPerView: 1.25,
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
        spaceBetween: 15,
      },
    };
    return {
      breakpoints,
      swiperPrevSlide,
      swiperNextSlide,
      onSwiper,
    };
  },
  data() {
    return {
      experience,
      photoJournal,
      js, sql, python, ts, mg
    }
  }
}
</script>