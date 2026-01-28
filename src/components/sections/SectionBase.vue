<script setup lang="ts">
defineProps<{
  id: string
}>()
</script>
<template>
  <section :id="id"
    class="section scroll-mt-24 sm:scroll-mt-28 py-16 sm:py-24 lg:py-36 max-w-5xl mx-auto container px-4 sm:px-6 lg:px-12 xl:px-24 2xl:px-36">
    <slot />
  </section>
</template>

<style>
.without-pb {
  padding-bottom: 0;
}
</style>
