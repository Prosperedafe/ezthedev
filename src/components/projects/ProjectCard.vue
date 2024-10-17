<template>
    <a :href="`/project/${project?.id}`">
        <div class="rounded-[25px] bg-white h-80 text-right p-4 mb-3">
            {{ project?.position }}
        </div>
        <p>{{ project?.name }}</p>
    </a>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { ProjectProps } from '@/utils/interface';
defineProps<{ project: ProjectProps }>();
</script>