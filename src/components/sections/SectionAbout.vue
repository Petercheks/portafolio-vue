<script setup lang="ts">
import SectionBase from './SectionBase.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const highlights = computed(() => tm('about.highlights') as unknown as string[])
const quickInfo = computed(
  () => tm('about.quickInfo') as unknown as Array<{ label: string; value: string }>,
)
</script>

<template>
  <SectionBase id="sobre-mi" class="without-pb">
    <h3 class="text-2xl font-bold mb-12 text-sky-300">{{ t('sections.about') }}</h3>

    <div class="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div
        class="lg:col-span-2 bg-gradient-to-br from-slate-800/90 via-slate-700/80 to-slate-600/70 border border-blue-300/20 rounded-2xl backdrop-blur-lg p-6"
      >
        <p class="text-slate-200 leading-relaxed">
          {{ t('about.p1') }}
        </p>

        <p class="text-slate-300 leading-relaxed mt-4">
          {{ t('about.p2') }}
        </p>

        <ul class="mt-6 space-y-3">
          <li v-for="(h, idx) in highlights" :key="idx" class="flex items-start gap-3">
            <span class="flex-shrink-0 mt-1 font-bold text-blue-400">•</span>
            <span class="text-slate-300">{{ h }}</span>
          </li>
        </ul>
      </div>

      <aside
        class="bg-gradient-to-br from-slate-800/90 via-slate-700/80 to-slate-600/70 border border-blue-300/20 rounded-2xl backdrop-blur-lg p-6"
      >
        <dl class="mt-4 space-y-4">
          <div v-for="row in quickInfo" :key="row.label">
            <dt class="text-sm text-slate-400">{{ row.label }}</dt>
            <dd class="text-slate-200">{{ row.value }}</dd>
          </div>
        </dl>

        <div class="mt-6 border-t border-blue-300/15 pt-6">
          <p class="text-sm text-slate-400">{{ t('about.contact') }}</p>
          <div class="mt-3 flex flex-col gap-2">
            <a
              class="text-blue-300 hover:text-green-400 transition"
              href="https://github.com/Petercheks"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              class="text-blue-300 hover:text-green-400 transition"
              href="https://www.linkedin.com/in/pedro-matos-fd/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </aside>
    </div>
  </SectionBase>
</template>
