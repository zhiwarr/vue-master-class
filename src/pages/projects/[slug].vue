<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>this is project number {{ route.params?.slug }}</h1>
      </div>
    </div>
  </div>
</template>
