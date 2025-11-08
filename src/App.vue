<script setup lang="ts">
import NavbarBase from './components/navbar/NavbarBase.vue'
import SectionResume from './components/sections/SectionResume.vue'
</script>

<template>
  <header class="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2">
    <NavbarBase />
  </header>

  <main class="px-4">
    <SectionResume />

    <section id="experiencia" class="section py-36 w-full mx-auto container px-36">
      Experiencia
    </section>
    <section id="educacion" class="section py-36 w-full mx-auto container px-36">Educación</section>
    <section id="sobre-mi" class="section py-36 w-full mx-auto container px-36">Sobre mí</section>
  </main>

  <footer class="text-center py-6 mt-12 text-sm text-gray-500">
    &copy; 2025 Pedro Matos. Todos los derechos reservados. Icons by
    <a class="text-green-600 underline" target="_blank" href="https://icons8.com">Icons8</a>
  </footer>
</template>
