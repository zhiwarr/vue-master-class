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
import { supabase } from '@/lib/supabaseClient'
;(async () => {
  const { data, error } = await supabase.from('projects').select()
  console.log(data)
  console.log(error)
})()
</script>
