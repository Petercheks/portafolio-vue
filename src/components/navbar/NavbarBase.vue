<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import NavbarItem from './NavbarItem.vue'
import { setLocale } from '../../i18n'

const { t, locale } = useI18n()

const items = computed(() => [
  { label: t('nav.experience'), href: '#experiencia' },
  { label: t('nav.education'), href: '#educacion' },
  { label: t('nav.about'), href: '#sobre-mi' },
])

const isOpen = ref(false)
const close = () => {
  isOpen.value = false
}

const currentIconLocale = computed(() => (locale.value === 'en' ? '/es-icon.png' : '/en-icon.png'))

const toggleLocale = () => {
  setLocale(locale.value === 'es' ? 'en' : 'es')
}
</script>
<template>
  <nav
    class="relative w-full max-w-[92vw] sm:w-auto px-4 sm:px-6 text-sm font-medium rounded-full bg-gray-900/90 border border-gray-700 shadow-md"
  >
    <div class="flex items-center justify-between sm:justify-center gap-3 sm:gap-4">
      <a class="relative block px-2 py-2 transition hover:scale-125" href="#resumen" @click="close">
        <img src="/home-ico.png" :alt="t('nav.homeAlt')" class="h-6 w-6" />
      </a>

      <div class="hidden sm:flex items-center justify-center space-x-4">
        <NavbarItem v-for="item in items" :key="item.label" :item="item" />
      </div>

      <button
        type="button"
        class="hidden sm:inline-flex items-center justify-center w-6 h-6 hover:scale-125 transition"
        :aria-label="t('nav.changeLanguage')"
        @click="toggleLocale"
      >
        <img :src="currentIconLocale" :alt="locale" class="h-5 w-5" />
      </button>

      <button
        type="button"
        class="sm:hidden inline-flex items-center justify-center w-6 h-6 hover:scale-125 transition"
        :aria-label="t('nav.changeLanguage')"
        @click="toggleLocale"
      >
        <img :src="currentIconLocale" :alt="locale" class="h-5 w-5" />
      </button>

      <button
        type="button"
        class="sm:hidden inline-flex items-center justify-center px-2 py-2 rounded-full hover:bg-white/5 transition"
        :aria-label="t('nav.openMenu')"
        aria-controls="mobile-nav"
        :aria-expanded="isOpen"
        @click="isOpen = !isOpen"
      >
        <svg
          v-if="!isOpen"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div
      v-show="isOpen"
      id="mobile-nav"
      class="sm:hidden absolute left-0 right-0 mt-2 rounded-2xl bg-gray-900/95 border border-gray-700 shadow-lg overflow-hidden"
    >
      <div class="flex flex-col py-2">
        <a class="px-4 py-3 text-base hover:bg-white/5 transition" href="#resumen" @click="close">
          {{ t('nav.resume') }}
        </a>
        <a
          v-for="item in items"
          :key="item.label"
          class="px-4 py-3 text-base hover:bg-white/5 transition"
          :href="item.href"
          @click="close"
        >
          {{ item.label }}
        </a>
      </div>
    </div>
  </nav>
</template>
