<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Home Page</h1>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { usePageStore } from '@/stores/page'

usePageStore().pageData.title = 'Home Page'
</script>
