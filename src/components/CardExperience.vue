<script setup lang="ts">
defineProps<{
  experience: {
    rol: string
    company: string
    period: string
    responsibilities: string[]
    logo?: string
  }
}>()
</script>

<template>
  <div class="relative max-w-4xl mx-auto mb-8 group">
    <div
      class="relative bg-gradient-to-br from-slate-800/90 via-slate-700/80 to-slate-600/70 border border-blue-300/20 rounded-2xl backdrop-blur-lg transition-all duration-300 ease-in-out overflow-hidden hover:transform hover:-translate-y-1 hover:border-blue-300/40 hover:shadow-2xl hover:shadow-black/30"
    >
      <div
        class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400 via-blue-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      ></div>

      <div class="p-6">
        <div class="flex flex-col sm:flex-row items-start gap-4 mb-6">
          <div class="flex-shrink-0 mx-auto sm:mx-0">
            <img
              :src="experience.logo"
              :alt="experience.company + ' logo'"
              class="w-14 h-14 rounded-xl object-cover border-2 border-blue-300/20 transition-all duration-300 group-hover:border-blue-300/50 group-hover:scale-105"
            />
          </div>

          <div class="flex-1 sm:text-left">
            <h4 class="text-xl font-semibold mb-2 text-slate-100 leading-tight">
              {{ experience.rol }}
            </h4>
            <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <span class="font-medium text-blue-300">{{ experience.company }}</span>
              <span class="hidden sm:inline text-slate-500">•</span>
              <span class="text-sm text-slate-400">{{ experience.period }}</span>
            </div>
          </div>
        </div>

        <!-- Responsabilidades -->
        <div class="mt-4">
          <ul class="space-y-3">
            <li
              v-for="(responsibility, index) in experience.responsibilities"
              :key="index"
              class="flex items-start gap-3 text-slate-300 leading-relaxed animate-fade-in-up"
              :style="{ animationDelay: `${(index + 1) * 0.1}s` }"
            >
              <span class="flex-shrink-0 mt-1 font-bold text-blue-400">•</span>
              <span class="flex-1">{{ responsibility }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.5s ease forwards;
  opacity: 0;
}
</style>
