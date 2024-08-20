<template>
    <div class="px-[5%] pt-[6rem] pb-8">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PagesContainer',
});
</script>