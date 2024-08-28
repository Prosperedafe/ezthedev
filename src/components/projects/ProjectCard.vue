<template>
    <RouterLink :to="`/project/${project?.id}`">
        <div class="rounded-[25px] bg-white h-80 text-right p-4 mb-3">
            {{ project?.position }}
        </div>
        <p>{{ project?.name }}</p>
    </RouterLink>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router'
import type { ProjectProps } from '@/utils/interface';
defineProps<{ project: ProjectProps }>();
</script>