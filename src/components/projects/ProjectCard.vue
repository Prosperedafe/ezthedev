<template>
    <RouterLink :to="`/project/${project?.id}`">
        <div class="rounded-[25px] bg-white h-80 text-right p-4 mb-3 overflow-hidden relative pointer-events-none">
            <span class="absolute right-4 top-4">{{ project?.position }}</span>
            <div class="absolute bg-black/10 inset-0"></div>
            <img :src='project?.logo' :alt="project?.name" />
        </div>
        <p>{{ project?.name }}</p>
    </RouterLink>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { ProjectProps } from '@/utils/interface';
import { RouterLink } from 'vue-router';
defineProps<{ project: ProjectProps }>();
</script>