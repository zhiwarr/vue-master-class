<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>this is tasks page</h1>
        <ul>
          <li v-for="task in tasks" :key="task.id">
            {{ task.name }}
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

const tasks = ref<Tables<'tasks'>[] | null>(null)
;(async () => {
  const { data, error } = await supabase.from('tasks').select()
  tasks.value = data
})()
</script>
