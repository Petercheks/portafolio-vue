<script setup lang="ts">
import CardExperience from '../CardExperience.vue'
import SectionBase from './SectionBase.vue'
import experiences from '../stores/workExperience'
</script>

<template>
  <SectionBase id="experiencia" class="without-pb">
    <h3 class="text-2xl font-bold mb-12 text-emerald-700">Experiencia Laboral</h3>

    <CardExperience v-for="experience in experiences" :key="experience.id" :experience="experience" />
  </SectionBase>
</template>
