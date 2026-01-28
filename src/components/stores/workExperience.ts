import { ref } from 'vue'

export interface WorkExperienceItem {
  id: number
  rol: string
  company: string
  period: string
  logo?: string
  responsibilities: string[]
}

const experiences = ref<WorkExperienceItem[]>([
  {
    id: 1,
    rol: 'Desarrollador FullStack',
    company: 'Lirmi',
    period: 'Agosto 2023 - Presente',
    logo: '/lirmi-icon.jpg',
    responsibilities: [
      'Desarrollo nuevas funcionalidades y módulos para la gestión educativa, con un stack backend con Laravel y una base de datos PostgreSQL, y frontend dinámico e intuitivo con Vue.',
      'Participe en el diseño y puesta en marcha de mas de 10 nuevos módulos con gran impacto en estudiantes, directivos y administrativos.',
      'Impulsado por la calidad y usabilidad del producto se ha logrado un crecimiento del Net Promoter Score (NPS) de la empresa, que pasó de 25 a 43 puntos representando un 24% de mejora.',
    ],
  },
  {
    id: 2,
    rol: 'Desarrollador Backend',
    company: 'Kuiper Make',
    period: 'Octubre 2024 - Presente',
    logo: '/kuiper-icon.jpeg',
    responsibilities: [
      'Desarrollo y mantengo micro servicios para la gestión de motores de riesgo de machine learning usando FastApi y Laravel.',
      'Lidero el mantenimiento y la refactorización de código obsoleto en múltiples módulos de la app, mejorando la estabilidad y eficiencia del sistema.',
    ],
  },
  {
    id: 3,
    rol: 'Desarrollador FullStack',
    company: 'Crediminuto',
    period: 'Noviembre 2020 - Septiembre 2023',
    logo: '/crediminuto-icon.png',
    responsibilities: [
      'Diseñe e implemente métodos de evaluación e integre servicios AWS para la detección de fraude',
      'Diseñe e implemente métodos de evaluación e integre servicios AWS para la detección de fraude, fortaleciendo la seguridad transaccional.',
    ],
  },
])

export default experiences
