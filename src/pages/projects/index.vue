<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>this is projects page</h1>
        <ul>
          <li v-for="project in projects" :key="project.id">
            {{ project.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'
import type { Tables } from '../../../database/types'

const projects = ref<Tables<'projects'>[] | null>(null)
;(async () => {
  const { data, error } = await supabase.from('projects').select()
  projects.value = data
})()
</script>
