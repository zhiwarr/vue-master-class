<script setup lang="ts">
import { useErrorStore } from '@/stores/error'
useErrorStore().setError({ error: 'who are you?', customCode: 404 })
</script>

<template>
  <ErrorComponent />
</template>
