<script setup lang="ts">
import CarruselSkills from '../CarruselSkills.vue'
import SectionBase from './SectionBase.vue'
</script>

<template>
  <SectionBase id="resumen" class="without-pb">
    <div class="flex justify-center mb-4 items-center">
      <img src="/profile.jpg" alt="Pedro Matos" class="w-40 h-40 rounded-full object-cover" />
      <div class="mt-4">
        <h2 class="text-5xl font-bold ml-4 text-emerald-700">Hola, soy Pedro Matos.</h2>
      </div>
    </div>
    <div class="text-center max-w-3xl mx-auto">
      <p class="text-lg">
        Desarrollador Full Stack con +5 años de experiencia creando aplicaciones web robustas y
        escalables. Apasionado por la tecnología y el aprendizaje continuo, busco siempre
        implementar las mejores prácticas en cada proyecto.
      </p>
    </div>

    <div class="mt-24">
      <h3 class="text-2xl font-bold text-center mb-4">Tecnologías y Herramientas</h3>
      <CarruselSkills />
    </div>
  </SectionBase>
</template>
