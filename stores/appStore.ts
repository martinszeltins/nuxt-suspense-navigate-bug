import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
    const items = ref<string[]>([])
    const shipments = ref<string[]>([])
  
    return { items, shipments }
  })
