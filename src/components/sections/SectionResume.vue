<script setup lang="ts">
import CarruselSkills from '../CarruselSkills.vue'
import SectionBase from './SectionBase.vue'
</script>

<template>
  <SectionBase id="resumen" class="without-pb">
    <div class="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
      <img src="/pedro-matos.png" alt="Pedro Matos" class="w-28 h-28 sm:w-40 sm:h-40 rounded-full object-cover" />
      <h2 class="text-3xl sm:text-5xl font-bold text-emerald-700 text-center sm:text-left break-words">
        Hola, soy Pedro Matos.
      </h2>
    </div>
    <div class="text-center max-w-3xl mx-auto">
      <p class="text-lg">
        Desarrollador Full Stack con +5 años de experiencia creando aplicaciones web robustas y
        escalables. Apasionado por la tecnología y el aprendizaje continuo, busco siempre
        implementar las mejores prácticas en cada proyecto.
      </p>
    </div>

    <div class="mt-16 sm:mt-24">
      <h3 class="text-2xl font-bold text-center mb-4">Tecnologías y Herramientas</h3>
      <CarruselSkills />
    </div>
  </SectionBase>
</template>
