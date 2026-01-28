<script setup lang="ts">
defineProps<{
  item: {
    label: string
    href: string
  }
}>()
</script>

<template>
  <a class="relative block px-2 py-2 transition hover:text-green-600 hover:scale-105 text-base" :href="item.href">
    {{ item.label }}
  </a>
</template>
