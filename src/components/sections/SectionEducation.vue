<script setup lang="ts">
import SectionBase from './SectionBase.vue'
import education from '../stores/education'
</script>

<template>
  <SectionBase id="educacion" class="without-pb">
    <h3 class="text-2xl font-bold mb-12 text-sky-300">Educación</h3>

    <div class="max-w-4xl mx-auto space-y-6">
      <div v-for="item in education" :key="item.id"
        class="relative group bg-gradient-to-br from-slate-800/90 via-slate-700/80 to-slate-600/70 border border-blue-300/20 rounded-2xl backdrop-blur-lg overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-blue-300/40 hover:shadow-2xl hover:shadow-black/30">
        <div
          class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400 via-blue-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        </div>
        <div class="p-6">
          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <h4 class="text-xl font-semibold text-slate-100 leading-tight">
                {{ item.title }}
              </h4>
              <p class="text-blue-300 font-medium mt-1">
                {{ item.institution }}
              </p>
            </div>

            <p class="text-sm text-slate-400 sm:text-right">
              {{ item.period }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </SectionBase>
</template>
