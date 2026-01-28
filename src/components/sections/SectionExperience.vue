<script setup lang="ts">
import CardExperience from '../CardExperience.vue'
import SectionBase from './SectionBase.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

interface WorkExperienceItem {
  id: number
  rol: string
  company: string
  period: string
  logo?: string
  responsibilities: string[]
}

const { t, tm } = useI18n()
const experiences = computed(() => tm('experience.items') as unknown as WorkExperienceItem[])
</script>

<template>
  <SectionBase id="experiencia" class="without-pb">
    <h3 class="text-2xl font-bold mb-12 text-sky-300">{{ t('sections.workExperience') }}</h3>

    <CardExperience
      v-for="experience in experiences"
      :key="experience.id"
      :experience="experience"
    />
  </SectionBase>
</template>
