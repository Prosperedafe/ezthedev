<template>
  <div class="pt-8 md:pt-16 pb-8">
    <Vue3Marquee>
      <img src="@/assets/images/game-icons_moebius-star.png" class="h-16 md:h-auto" alt="ez the dev web logo" />
      <span class="text-[4rem] md:text-[7.5rem] text-primaryText block mx-8 font-medium">SENAMI SOKOU</span>
      <img src="@/assets/images/game-icons_moebius-star.png" class="h-16 md:h-auto" alt="ez the dev web logo" />
      <span class="text-[4rem] md:text-[7.5rem] text-primaryText block mx-8 font-medium">SENAMI SOKOU</span>
    </Vue3Marquee>
    <div class="px-[5%]">
      <p class="text-right font-medium">Based In Lagos, Nigeria 🇳🇬</p>
      <article
        class="grid md:grid-cols-2 lg:grid-cols-[1.3fr_2fr] text-primaryText text-base gap-x-[4%] gap-8 py-16 relative">
        <figure>
          <img src="../assets/images/ezra-the-developer-image.png" class="w-full md:sticky top-[2rem]"
            alt="ezra at oyasync hangout">
        </figure>
        <div class="flex flex-col gap-3 max-w-[680px]">
          <p>
            Hello! My name is [Your Name], and I am a passionate full stack developer with a deep love for crafting
            dynamic and responsive web applications. My journey into coding began [X] years ago, driven by a fascination
            with technology's limitless possibilities.
          </p>
          <p>
            I hold a [Your Degree] in [Your Field] from [Your University], where I developed a strong foundation in
            computer science. My professional career started at [Company Name], where I contributed to the development
            of
            a scalable e-commerce platform that enhanced user experience and boosted sales by 30%. This role solidified
            my
            commitment to creating applications that are both functional and user-friendly.
          </p>
          <p>
            Over the years, I have honed my skills across a wide range of technologies. On the front-end, I excel in
            HTML,
            CSS, JavaScript, React, and Angular. On the back-end, I am proficient in Node.js, Express, Ruby on Rails,
            and
            Django. I am also experienced with databases like MySQL, PostgreSQL, and MongoDB, and DevOps tools such as
            Docker, Kubernetes, AWS, and Jenkins. This diverse skill set allows me to approach problems holistically and
            deliver comprehensive solutions.
          </p>
          <p>
            I am dedicated to continuous learning and staying updated with the latest technological advancements. This
            proactive mindset has led me to participate in hackathons and contribute to open-source projects, fostering
            collaboration and innovation.
          </p>
          <p>
            Beyond my professional life, I enjoy [Your Hobbies], which provide a creative outlet and keep me inspired.
            Whether it’s [specific hobby-related activities], these interests enrich my life and enhance my overall
            well-being. <br>
            Looking forward, I am excited about the future of technology and the opportunities it brings. My goal is to
            work on innovative projects that positively impact people's lives and explore new frontiers in [specific
            areas
            of interest or technology].
          </p>
          <p>
            Thank you for taking the time to learn about me. I look forward to the opportunity to collaborate with
            like-minded professionals and drive progress and innovation together.
          </p>
        </div>
      </article>
    </div>
  </div>
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