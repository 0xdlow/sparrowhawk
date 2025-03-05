import { ComponentCustomProperties } from 'vue'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $t: (key: string, ...args: any[]) => string
    $d: (value: number | Date, ...args: any[]) => string
    $n: (value: number, ...args: any[]) => string
    $tm: (key: string, ...args: any[]) => any
  }
} 