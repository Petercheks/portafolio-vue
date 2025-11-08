<script setup lang="ts">
defineProps<{
  id: string
}>()
</script>
<template>
  <section :id="id" class="section py-36 w-full mx-auto container px-36">
    <slot />
  </section>
</template>

<style>
.without-pb {
  padding-bottom: 0;
}
</style>
