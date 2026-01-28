<script setup lang="ts">
import CarruselSkills from '../CarruselSkills.vue'
import SectionBase from './SectionBase.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const name = 'Pedro Matos'
</script>

<template>
  <SectionBase id="resumen" class="without-pb">
    <div class="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
      <img
        src="/pedro-matos.png"
        :alt="t('resume.photoAlt', { name })"
        class="w-28 h-28 sm:w-40 sm:h-40 rounded-full object-cover"
      />
      <h2 class="text-3xl sm:text-5xl font-bold text-sky-300 text-center sm:text-left break-words">
        {{ t('resume.greeting', { name }) }}
      </h2>
    </div>
    <div class="text-center max-w-3xl mx-auto">
      <p class="text-lg">
        {{ t('resume.intro') }}
      </p>
    </div>

    <div class="mt-16 sm:mt-24">
      <h3 class="text-2xl font-bold text-center mb-4">{{ t('resume.techTitle') }}</h3>
      <CarruselSkills />
    </div>
  </SectionBase>
</template>
