<script setup lang="ts">
import SectionBase from './SectionBase.vue'

const highlights = [
  'Full Stack con foco en calidad, performance y mantenibilidad.',
  'Me gusta trabajar en productos que tengan impacto en la vida de las personas.',
  'Me apasiona la automatización y electrónica asi que si tienes un proyecto que combine ambas, no dudes en contactarme.',
]

const quickInfo = [
  { label: 'Ubicación', value: 'Buenos Aires, Argentina (remoto)' },
  { label: 'Rol', value: 'Full Stack Developer' },
]
</script>

<template>
  <SectionBase id="sobre-mi" class="without-pb">
    <h3 class="text-2xl font-bold mb-12 text-emerald-700">Sobre mí</h3>

    <div class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div
        class="lg:col-span-2 bg-gradient-to-br from-slate-800/90 via-slate-700/80 to-slate-600/70 border border-blue-300/20 rounded-2xl backdrop-blur-lg p-6">
        <p class="text-slate-200 leading-relaxed">
          Soy Pedro Matos, desarrollador Full Stack. Me enfoco en entregar soluciones escalables,
          eficientes y con buenas bases: código limpio, buenas prácticas y una experiencia clara
          para el usuario.
        </p>

        <p class="text-slate-300 leading-relaxed mt-4">
          Me siento cómodo trabajando en backend y frontend, integrando APIs, debatiendo soluciones y creando productos.
        </p>

        <ul class="mt-6 space-y-3">
          <li v-for="(h, idx) in highlights" :key="idx" class="flex items-start gap-3">
            <span class="flex-shrink-0 mt-1 font-bold text-blue-400">•</span>
            <span class="text-slate-300">{{ h }}</span>
          </li>
        </ul>
      </div>

      <aside
        class="bg-gradient-to-br from-slate-800/90 via-slate-700/80 to-slate-600/70 border border-blue-300/20 rounded-2xl backdrop-blur-lg p-6">

        <dl class="mt-4 space-y-4">
          <div v-for="row in quickInfo" :key="row.label">
            <dt class="text-sm text-slate-400">{{ row.label }}</dt>
            <dd class="text-slate-200">{{ row.value }}</dd>
          </div>
        </dl>

        <div class="mt-6 border-t border-blue-300/15 pt-6">
          <p class="text-sm text-slate-400">Contacto</p>
          <div class="mt-3 flex flex-col gap-2">
            <a class="text-blue-300 hover:text-green-400 transition" href="https://github.com/Petercheks"
              target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a class="text-blue-300 hover:text-green-400 transition" href="https://www.linkedin.com/in/pedro-matos-fd/"
              target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </aside>
    </div>
  </SectionBase>
</template>
