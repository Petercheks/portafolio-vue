import { ref } from 'vue'

export interface EducationItem {
  id: number
  title: string
  institution: string
  period: string
}

const education = ref<EducationItem[]>([
  {
    id: 1,
    title: 'Tecnico Universitario en Programación de Sistemas',
    institution: 'UCES',
    period: '2022 - 2025',
  },
  {
    id: 2,
    title: 'Ingeniería mecatrónica',
    institution: 'UNEXPO Luis Caballero Mejías - (No titulado)',
    period: '2012 - 2016',
  },
])

export default education
