<script setup lang="ts">
import { useErrorStore } from '@/stores/error'
import { usePageStore } from '@/stores/page'
import { tasksWithProjectsQuery, type tasksWithProjects } from '@/utils/supaQueries'
import { columns } from '@/utils/TableColumns/TasksColumns'

usePageStore().pageData.title = 'Tasks'

const tasks = ref<tasksWithProjects | null>(null)
const fetchTasks = async () => {
  const { data, error, status } = await tasksWithProjectsQuery

  if (error) useErrorStore().setError({ error: error, customCode: status })

  tasks.value = data
}

// useErrorStore().setError({ error: Error('uncaught error') })

await fetchTasks()
</script>

<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>
