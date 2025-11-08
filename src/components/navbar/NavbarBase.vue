<script setup lang="ts">
import NavbarItem from './NavbarItem.vue'

const items = [
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Educación', href: '#educacion' },
  { label: 'Sobre mí', href: '#sobre-mi' },
]
</script>
<template>
  <nav
    class="flex px-6 text-sm font-medium rounded-full justify-center items-center bg-gray-900 opacity-90 border border-gray-700 shadow-md space-x-4"
  >
    <a class="relative block px-2 py-2 transition hover:scale-125" href="#resumen">
      <img src="/home.ico" alt="Logo" class="h-4 w-4" />
    </a>

    <NavbarItem v-for="item in items" :key="item.label" :item="item" />
  </nav>
</template>
