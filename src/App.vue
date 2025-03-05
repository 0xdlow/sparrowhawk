<script setup lang="ts">
import MainLayout from './layouts/MainLayout.vue'
import { appConfig } from './config/app'

console.log('App component loaded', appConfig.name)
</script>

<template>
  <MainLayout>
    <router-view />
  </MainLayout>
</template>
