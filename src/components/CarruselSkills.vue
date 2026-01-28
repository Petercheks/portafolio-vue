<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Skill {
  icon: string
  label: string
}
const skills = ref<Skill[]>([
  { icon: 'vuejs.png', label: 'VueJs' },
  { icon: 'nodejs.png', label: 'NodeJs' },
  { icon: 'python.png', label: 'Python' },
  { icon: 'postgresql.png', label: 'PostgreSQL' },
  { icon: 'mysql.png', label: 'MySQL' },
  { icon: 'typescript.png', label: 'TypeScript' },
  { icon: 'tailwindcss.png', label: 'Tailwind CSS' },
  { icon: 'laravel.png', label: 'Laravel' },
  { icon: 'django.png', label: 'Django' },
  { icon: 'git.png', label: 'GIT' },
  { icon: 'nestjs.png', label: 'NestJs' },
  { icon: 'javascript.png', label: 'JavaScript' },
  { icon: 'sql.png', label: 'SQL' },
  { icon: 'php.png', label: 'PHP' },
  { icon: 'visual.png', label: 'Visual Studio' },
])

const currentIndex = ref<number>(0)
let intervalId: number | null = null

const start = () => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % skills.value.length
  }, 2000)
}

const stop = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

onMounted(() => {
  start()
})

onUnmounted(() => {
  stop()
})
</script>

<template>
  <div class="relative overflow-hidden max-w-4xl mx-auto">
    <div
      class="flex transition-transform duration-500 ease-in-out"
      :style="`transform: translateX(-${currentIndex * 100}px)`"
      @mouseenter="stop"
      @mouseleave="start"
    >
      <div
        v-for="(skill, index) in [...skills, ...skills, ...skills, ...skills]"
        :key="`${index}-${skill.label}`"
        class="flex-shrink-0 flex flex-col items-center justify-center w-24 h-24"
      >
        <div :title="skill.label" class="text-3xl mb-2">
          <img :src="`/${skill.icon}`" :alt="skill.label" class="w-9 h-9 object-contain" />
        </div>
      </div>
    </div>
  </div>
</template>
